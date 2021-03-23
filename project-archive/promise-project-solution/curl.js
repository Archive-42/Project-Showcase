#!/usr/bin/env node

const dash = require('dashdash');
const fetch = require('node-fetch');
const fs = require('fs');

const options = {
  allowUnknown: true,
  options: [{
    names: ['output', 'o'],
    type: 'arrayOfString',
    help: 'file in which to store the fetched content'
  }, {
    names: ['header', 'H'],
    type: 'arrayOfString',
    help: 'an arbitrary header to set on the fetch'
  }, {
    names: ['agent', 'A'],
    type: 'string',
    help: 'set the user agent'
  }, {
    names: ['referer', 'e'],
    type: 'string',
    help: 'set the URL of the referer'
  }, {
    names: ['help', 'h'],
    type: 'bool',
    help: 'print this help and exit'
  }, {
    names: ['dump-header'],
    type: 'string',
    help: 'the file to which response headers should be dumped'
  }, {
    names: ['data', 'd'],
    type: 'string',
    help: 'data to send with the request'
  }, {
    names: ['method', 'X'],
    type: 'string',
    help: 'the HTTP method to use'
  }]
};
const parser = dash.createParser(options);

const opts = parser.parse(options);
const { agent, data, dump_header, header = [], help, method, output = [], referer, _args: urls } = opts;

if (help) {
  console.log('node curl.js [OPTIONS] URL');
  console.log('OPTIONS:');
  console.log(parser.help().trimRight());
  return;
}

let out = [];
for (let o of output) {
  const stream = fs.createWriteStream(o)
  stream.on('error', error => {
    if (error.code === 'EISDIR') {
      return console.error(`curl: (23) Failed writing body`);
    }
    process.exit(23);
  });
  out.push(stream);
}

const meta = new Map();
for (let h of header) {
  const [key, value] = h.split(':').map(x => x.trim());
  meta.set(key, value);
}
if (agent) {
  meta.set('User-Agent', agent);
}
if (referer) {
  meta.set('Referer', referer);
}

const filesToFetch = [];
for (let url of urls) {
  const options = { body: data, headers: new fetch.Headers(meta), method };
  filesToFetch.push(fetch(url, options));
}

Promise.all(filesToFetch)
  .then(responses => {
    const promises = [responses];
    if (dump_header) {
      const headerLines = [
        `HTTP/1.1 ${response.status} ${response.statusText}`
      ];
      for (let key of response.headers.keys()) {
        headerLines.push(`${key}: ${response.headers.get(key)}`);
      }
      promises.push(fs.promises.writeFile(dump_header, headerLines.join('\n')));
    }
    return Promise.all(promises);
  })
  .then(([responses, _]) => responses.map((res, i) => res.body.pipe(out[i] || process.stdout)))
  .catch(error => {
    if (error.code === 'ENOTFOUND') {
      const host = new URL(url).host;
      return console.error(`curl: (6) Could not resolve host: ${host}`);
      process.exit(6);
    }
  });
