let swfobject = (function () {
  function x () {
    if (!v) {
      try {
        let a = d
          .getElementsByTagName('body')[0]
          .appendChild(d.createElement('span'))
        a.parentNode.removeChild(a)
      } catch (b) {
        return
      }
      v = !0
      for (let a = A.length, c = 0; c < a; c++) A[c]()
    }
  }
  function O (a) {
    v ? a() : (A[A.length] = a)
  }
  function P (a) {
    if (typeof p.addEventListener !== k) p.addEventListener('load', a, !1)
    else if (typeof d.addEventListener !== k) d.addEventListener('load', a, !1)
    else if (typeof p.attachEvent !== k) X(p, 'onload', a)
    else if (typeof p.onload === 'function') {
      let b = p.onload
      p.onload = function () {
        b()
        a()
      }
    } else p.onload = a
  }
  function Y () {
    let a = d.getElementsByTagName('body')[0]
    let b = d.createElement(u)
    b.setAttribute('type', B)
    let c = a.appendChild(b)
    if (c) {
      let f = 0;
      (function () {
        if (typeof c.Getletiable !== k) {
          let g = c.Getletiable('$version')
          g &&
            ((g = g.split(' ')[1].split(',')),
            (e.pv = [
              parseInt(g[0], 10),
              parseInt(g[1], 10),
              parseInt(g[2], 10)
            ]))
        } else if (f < 10) {
          f++
          setTimeout(arguments.callee, 10)
          return
        }
        a.removeChild(b)
        c = null
        G()
      })()
    } else G()
  }
  function G () {
    let a = s.length
    if (a > 0) {
      for (let b = 0; b < a; b++) {
        let c = s[b].id
        let f = s[b].callbackFn
        let g = { success: !1, id: c }
        if (e.pv[0] > 0) {
          let d = q(c)
          if (d) {
            if (!C(s[b].swfVersion) || (e.wk && e.wk < 312)) {
              if (s[b].expressInstall && H()) {
                g = {}
                g.data = s[b].expressInstall
                g.width = d.getAttribute('width') || '0'
                g.height = d.getAttribute('height') || '0'
                d.getAttribute('class') &&
                  (g.styleclass = d.getAttribute('class'))
                d.getAttribute('align') && (g.align = d.getAttribute('align'))
                for (
                  let h = {},
                    d = d.getElementsByTagName('param'),
                    l = d.length,
                    m = 0;
                  m < l;
                  m++
                )
                  {d[m].getAttribute('name').toLowerCase() != 'movie' &&
                    (h[d[m].getAttribute('name')] = d[m].getAttribute('value'))}
                I(g, h, c, f)
              } else Z(d), f && f(g)
            } else w(c, !0), f && ((g.success = !0), (g.ref = J(c)), f(g))
          }
        } else {
          w(c, !0),
          f &&
              ((c = J(c)) &&
                typeof c.Setletiable !== k &&
                ((g.success = !0), (g.ref = c)),
              f(g))
        }
      }
    }
  }
  function J (a) {
    let b = null;
    (a = q(a)) &&
      a.nodeName == 'OBJECT' &&
      (typeof a.Setletiable !== k
        ? (b = a)
        : (a = a.getElementsByTagName(u)[0]) && (b = a))
    return b
  }
  function H () {
    return !D && C('6.0.65') && (e.win || e.mac) && !(e.wk && e.wk < 312)
  }
  function I (a, b, c, f) {
    D = !0
    K = f || null
    Q = { success: !1, id: c }
    let g = q(c)
    if (g) {
      g.nodeName == 'OBJECT' ? ((z = L(g)), (E = null)) : ((z = g), (E = c))
      a.id = R
      if (
        typeof a.width === k ||
        (!/%$/.test(a.width) && parseInt(a.width, 10) < 310)
      ) { a.width = '310' }
      if (
        typeof a.height === k ||
        (!/%$/.test(a.height) && parseInt(a.height, 10) < 137)
      ) { a.height = '137' }
      d.title = d.title.slice(0, 47) + ' - Flash Player Installation'
      f = e.ie && e.win ? 'ActiveX' : 'PlugIn'
      f =
        'MMredirectURL=' +
        p.location.toString().replace(/&/g, '%26') +
        '&MMplayerType=' +
        f +
        '&MMdoctitle=' +
        d.title
      b.flashlets = typeof b.flashlets !== k ? b.flashlets + ('&' + f) : f
      e.ie &&
        e.win &&
        g.readyState != 4 &&
        ((f = d.createElement('div')),
        (c += 'SWFObjectNew'),
        f.setAttribute('id', c),
        g.parentNode.insertBefore(f, g),
        (g.style.display = 'none'),
        (function () {
          g.readyState == 4
            ? g.parentNode.removeChild(g)
            : setTimeout(arguments.callee, 10)
        })())
      M(a, b, c)
    }
  }
  function Z (a) {
    if (e.ie && e.win && a.readyState != 4) {
      let b = d.createElement('div')
      a.parentNode.insertBefore(b, a)
      b.parentNode.replaceChild(L(a), b)
      a.style.display = 'none';
      (function () {
        a.readyState == 4
          ? a.parentNode.removeChild(a)
          : setTimeout(arguments.callee, 10)
      })()
    } else a.parentNode.replaceChild(L(a), a)
  }
  function L (a) {
    let b = d.createElement('div')
    if (e.win && e.ie) b.innerHTML = a.innerHTML
    else if ((a = a.getElementsByTagName(u)[0])) {
      if ((a = a.childNodes)) {
        for (let c = a.length, f = 0; f < c; f++) {
          (a[f].nodeType == 1 && a[f].nodeName == 'PARAM') ||
            a[f].nodeType == 8 ||
            b.appendChild(a[f].cloneNode(!0))
        }
      }
    }
    return b
  }
  function M (a, b, c) {
    let f
    let g = q(c)
    if (e.wk && e.wk < 312) return f
    if (g) {
      if ((typeof a.id === k && (a.id = c), e.ie && e.win)) {
        let r = ''
        let h
        for (h in a) {
          a[h] != Object.prototype[h] &&
            (h.toLowerCase() == 'data'
              ? (b.movie = a[h])
              : h.toLowerCase() == 'styleclass'
                ? (r += ' class="' + a[h] + '"')
                : h.toLowerCase() != 'classid' &&
                (r += ' ' + h + '="' + a[h] + '"'))
        }
        h = ''
        for (let l in b) {
          b[l] != Object.prototype[l] &&
            (h += '<param name="' + l + '" value="' + b[l] + '" />')
        }
        g.outerHTML =
          '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' +
          r +
          '>' +
          h +
          '</object>'
        F[F.length] = a.id
        f = q(a.id)
      } else {
        l = d.createElement(u)
        l.setAttribute('type', B)
        for (let m in a) {
          a[m] != Object.prototype[m] &&
            (m.toLowerCase() == 'styleclass'
              ? l.setAttribute('class', a[m])
              : m.toLowerCase() != 'classid' && l.setAttribute(m, a[m]))
        }
        for (r in b) {
          b[r] != Object.prototype[r] &&
            r.toLowerCase() != 'movie' &&
            ((a = l),
            (h = r),
            (m = b[r]),
            (c = d.createElement('param')),
            c.setAttribute('name', h),
            c.setAttribute('value', m),
            a.appendChild(c))
        }
        g.parentNode.replaceChild(l, g)
        f = l
      }
    }
    return f
  }
  function S (a) {
    let b = q(a)
    b &&
      b.nodeName == 'OBJECT' &&
      (e.ie && e.win
        ? ((b.style.display = 'none'),
        (function () {
          if (b.readyState == 4) {
            let c = q(a)
            if (c) {
              for (let f in c) typeof c[f] === 'function' && (c[f] = null)
              c.parentNode.removeChild(c)
            }
          } else setTimeout(arguments.callee, 10)
        })())
        : b.parentNode.removeChild(b))
  }
  function q (a) {
    let b = null
    try {
      b = d.getElementById(a)
    } catch (c) {}
    return b
  }
  function X (a, b, c) {
    a.attachEvent(b, c)
    y[y.length] = [a, b, c]
  }
  function C (a) {
    let b = e.pv
    a = a.split('.')
    a[0] = parseInt(a[0], 10)
    a[1] = parseInt(a[1], 10) || 0
    a[2] = parseInt(a[2], 10) || 0
    return b[0] > a[0] ||
      (b[0] == a[0] && b[1] > a[1]) ||
      (b[0] == a[0] && b[1] == a[1] && b[2] >= a[2])
      ? !0
      : !1
  }
  function T (a, b, c, f) {
    if (!e.ie || !e.mac) {
      let g = d.getElementsByTagName('head')[0]
      g &&
        ((c = c && typeof c === 'string' ? c : 'screen'),
        f && (N = n = null),
        (n && N == c) ||
          ((f = d.createElement('style')),
          f.setAttribute('type', 'text/css'),
          f.setAttribute('media', c),
          (n = g.appendChild(f)),
          e.ie &&
            e.win &&
            typeof d.styleSheets !== k &&
            d.styleSheets.length > 0 &&
            (n = d.styleSheets[d.styleSheets.length - 1]),
          (N = c)),
        e.ie && e.win
          ? n && typeof n.addRule === u && n.addRule(a, b)
          : n &&
            typeof d.createTextNode !== k &&
            n.appendChild(d.createTextNode(a + ' {' + b + '}')))
    }
  }
  function w (a, b) {
    if (U) {
      let c = b ? 'visible' : 'hidden'
      v && q(a) ? (q(a).style.visibility = c) : T('#' + a, 'visibility:' + c)
    }
  }
  function V (a) {
    return /[\"<>\.;]/.exec(a) != null && typeof encodeURIComponent !== k
      ? encodeURIComponent(a)
      : a
  }
  let k = 'undefined'
  let u = 'object'
  let B = 'application/x-shockwave-flash'
  let R = 'SWFObjectExprInst'
  let p = window
  let d = document
  let t = navigator
  let W = !1
  let A = [
    function () {
      W ? Y() : G()
    }
  ]
  let s = []
  let F = []
  let y = []
  let z
  let E
  let K
  let Q
  let v = !1
  let D = !1
  let n
  let N
  let U = !0
  let e = (function () {
    let a =
          typeof d.getElementById !== k &&
          typeof d.getElementsByTagName !== k &&
          typeof d.createElement !== k
    let b = t.userAgent.toLowerCase()
    let c = t.platform.toLowerCase()
    let f = c ? /win/.test(c) : /win/.test(b)
    let c = c ? /mac/.test(c) : /mac/.test(b)
    let b = /webkit/.test(b)
      ? parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, '$1'))
      : !1
    let g = !+'\v1'
    let e = [0, 0, 0]
    let h = null
    if (typeof t.plugins !== k && typeof t.plugins['Shockwave Flash'] === u) {
      !(h = t.plugins['Shockwave Flash'].description) ||
          (typeof t.mimeTypes !== k &&
            t.mimeTypes[B] &&
            !t.mimeTypes[B].enabledPlugin) ||
          ((W = !0),
          (g = !1),
          (h = h.replace(/^.*\s+(\S+\s+\S+$)/, '$1')),
          (e[0] = parseInt(h.replace(/^(.*)\..*$/, '$1'), 10)),
          (e[1] = parseInt(h.replace(/^.*\.(.*)\s.*$/, '$1'), 10)),
          (e[2] = /[a-zA-Z]/.test(h)
            ? parseInt(h.replace(/^.*[a-zA-Z]+(.*)$/, '$1'), 10)
            : 0))
    } else if (typeof p.ActiveXObject !== k) {
      try {
        let l = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')
        l &&
            (h = l.Getletiable('$version')) &&
            ((g = !0),
            (h = h.split(' ')[1].split(',')),
            (e = [parseInt(h[0], 10), parseInt(h[1], 10), parseInt(h[2], 10)]))
      } catch (m) {}
    }
    return { w3: a, pv: e, wk: b, ie: g, win: f, mac: c }
  })();
  (function () {
    e.w3 &&
      (((typeof d.readyState !== k && d.readyState == 'complete') ||
        (typeof d.readyState === k &&
          (d.getElementsByTagName('body')[0] || d.body))) &&
        x(),
      v ||
        (typeof d.addEventListener !== k &&
          d.addEventListener('DOMContentLoaded', x, !1),
        e.ie &&
          e.win &&
          (d.attachEvent('onreadystatechange', function () {
            d.readyState == 'complete' &&
              (d.detachEvent('onreadystatechange', arguments.callee), x())
          }),
          p == top &&
            (function () {
              if (!v) {
                try {
                  d.documentElement.doScroll('left')
                } catch (a) {
                  setTimeout(arguments.callee, 0)
                  return
                }
                x()
              }
            })()),
        e.wk &&
          (function () {
            v ||
              (/loaded|complete/.test(d.readyState)
                ? x()
                : setTimeout(arguments.callee, 0))
          })(),
        P(x)))
  })();
  (function () {
    e.ie &&
      e.win &&
      window.attachEvent('onunload', function () {
        for (let a = y.length, b = 0; b < a; b++) { y[b][0].detachEvent(y[b][1], y[b][2]) }
        a = F.length
        for (b = 0; b < a; b++) S(F[b])
        for (let c in e) e[c] = null
        e = null
        for (let f in swfobject) swfobject[f] = null
        swfobject = null
      })
  })()
  return {
    registerObject: function (a, b, c, f) {
      if (e.w3 && a && b) {
        let d = {}
        d.id = a
        d.swfVersion = b
        d.expressInstall = c
        d.callbackFn = f
        s[s.length] = d
        w(a, !1)
      } else f && f({ success: !1, id: a })
    },
    getObjectById: function (a) {
      if (e.w3) return J(a)
    },
    embedSWF: function (a, b, c, d, g, r, h, l, m, p) {
      let q = { success: !1, id: b }
      e.w3 && !(e.wk && e.wk < 312) && a && b && c && d && g
        ? (w(b, !1),
        O(function () {
          c += ''
          d += ''
          let e = {}
          if (m && typeof m === u) for (let n in m) e[n] = m[n]
          e.data = a
          e.width = c
          e.height = d
          n = {}
          if (l && typeof l === u) for (let s in l) n[s] = l[s]
          if (h && typeof h === u) {
            for (let t in h) {
              n.flashlets =
                  typeof n.flashlets !== k
                    ? n.flashlets + ('&' + t + '=' + h[t])
                    : t + '=' + h[t]
            }
          }
          if (C(g)) {
            (s = M(e, n, b)),
            e.id == b && w(b, !0),
            (q.success = !0),
            (q.ref = s)
          } else {
            if (r && H()) {
              e.data = r
              I(e, n, b, p)
              return
            }
            w(b, !0)
          }
          p && p(q)
        }))
        : p && p(q)
    },
    switchOffAutoHideShow: function () {
      U = !1
    },
    ua: e,
    getFlashPlayerVersion: function () {
      return { major: e.pv[0], minor: e.pv[1], release: e.pv[2] }
    },
    hasFlashPlayerVersion: C,
    createSWF: function (a, b, c) {
      if (e.w3) return M(a, b, c)
    },
    showExpressInstall: function (a, b, c, d) {
      e.w3 && H() && I(a, b, c, d)
    },
    removeSWF: function (a) {
      e.w3 && S(a)
    },
    createCSS: function (a, b, c, d) {
      e.w3 && T(a, b, c, d)
    },
    addDomLoadEvent: O,
    addLoadEvent: P,
    getQueryParamValue: function (a) {
      let b = d.location.search || d.location.hash
      if (b) {
        /\?/.test(b) && (b = b.split('?')[1])
        if (a == null) return V(b)
        for (let b = b.split('&'), c = 0; c < b.length; c++) {
          if (b[c].substring(0, b[c].indexOf('=')) == a) { return V(b[c].substring(b[c].indexOf('=') + 1)) }
        }
      }
      return ''
    },
    expressInstallCallback: function () {
      if (D) {
        let a = q(R)
        a &&
          z &&
          (a.parentNode.replaceChild(z, a),
          E && (w(E, !0), e.ie && e.win && (z.style.display = 'block')),
          K && K(Q))
        D = !1
      }
    }
  }
})()

window.Modernizr = (function (p, d, t) {
  function k (b, a) {
    for (let c in b) if (D[b[c]] !== t) return a == 'pfx' ? b[c] : !0
    return !1
  }
  let f = {}
  let B = d.documentElement
  d.head || d.getElementsByTagName('head')
  let m = d.createElement('modernizr')
  let D = m.style
  let E = ['Webkit', 'Moz', 'O', 'ms', 'Khtml']
  let m = {}
  let C = []
  let z = (function () {
    let b = {
      select: 'input',
      change: 'input',
      submit: 'form',
      reset: 'form',
      error: 'img',
      load: 'img',
      abort: 'img'
    }
    return function (a, c) {
      c = c || d.createElement(b[a] || 'div')
      a = 'on' + a
      let w = a in c
      w ||
          (c.setAttribute || (c = d.createElement('div')),
          c.setAttribute &&
            c.removeAttribute &&
            (c.setAttribute(a, ''),
            (w = typeof c[a] === 'function'),
            typeof c[a] === t || (c[a] = t),
            c.removeAttribute(a)))
      return w
    }
  })()
  let e
  let q = {}.hasOwnProperty
  let x
  typeof q !== t && typeof q.call !== t
    ? (x = function (b, a) {
      return q.call(b, a)
    })
    : (x = function (b, a) {
      return a in b && typeof b.constructor.prototype[a] === t
    })
  m.video = function () {
    let b = d.createElement('video')
    let a = !1
    try {
      if ((a = !!b.canPlayType)) {
        (a = new Boolean(a)),
        (a.ogg = b.canPlayType('video/ogg; codecs="theora"')),
        (a.h264 =
            b.canPlayType('video/mp4; codecs="avc1.42E01E"') ||
            b.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')),
        (a.webm = b.canPlayType('video/webm; codecs="vp8, vorbis"'))
      }
    } catch (c) {}
    return a
  }
  m.audio = function () {
    let b = d.createElement('audio')
    let a = !1
    try {
      if ((a = !!b.canPlayType)) {
        (a = new Boolean(a)),
        (a.ogg = b.canPlayType('audio/ogg; codecs="vorbis"')),
        (a.mp3 = b.canPlayType('audio/mpeg;')),
        (a.wav = b.canPlayType('audio/wav; codecs="1"')),
        (a.m4a =
            b.canPlayType('audio/x-m4a;') || b.canPlayType('audio/aac;'))
      }
    } catch (c) {}
    return a
  }
  for (let n in m) {
    x(m, n) &&
      ((e = n.toLowerCase()), (f[e] = m[n]()), C.push((f[e] ? '' : 'no-') + e))
  }
  D.cssText = ''
  m = null
  p.attachEvent &&
    (function () {
      let b = d.createElement('div')
      b.innerHTML = '<elem></elem>'
      return b.childNodes.length !== 1
    })() &&
    (function (b, a) {
      function c (h) {
        for (let a = -1; ++a < k;) h.createElement(g[a])
      }
      b.iepp = b.iepp || {}
      let d = b.iepp
      let e =
          d.html5elements ||
          'abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video'
      let g = e.split('|')
      let k = g.length
      let f = RegExp('(^|\\s)(' + e + ')', 'gi')
      let m = RegExp('<(/*)(' + e + ')', 'gi')
      let n = /^\s*[\{\}]\s*$/
      let q = RegExp(
        '(^|[^\\n]*?\\s)(' + e + ')([^\\n]*)({[\\n\\w\\W]*?})',
        'gi'
      )
      let p = a.createDocumentFragment()
      let u = a.documentElement
      let e = u.firstChild
      let r = a.createElement('body')
      let v = a.createElement('style')
      let s = /print|all/
      let h
      d.getCSS = function (h, a) {
        if (h + '' === t) return ''
        for (let b = -1, c = h.length, e, g = []; ++b < c;) {
          (e = h[b]),
          e.disabled ||
              ((a = e.media || a),
              s.test(a) && g.push(d.getCSS(e.imports, a), e.cssText),
              (a = 'all'))
        }
        return g.join('')
      }
      d.parseCSS = function (h) {
        for (let a = [], b; (b = q.exec(h)) != null;) {
          a.push(
            ((n.exec(b[1]) ? '\n' : b[1]) + b[2] + b[3]).replace(
              f,
              '$1.iepp_$2'
            ) + b[4]
          )
        }
        return a.join('\n')
      }
      d.writeHTML = function () {
        let b = -1
        for (h = h || a.body; ++b < k;) {
          for (
            let d = a.getElementsByTagName(g[b]), c = d.length, e = -1;
            ++e < c;

          ) {
            d[e].className.indexOf('iepp_') < 0 &&
              (d[e].className += ' iepp_' + g[b])
          }
        }
        p.appendChild(h)
        u.appendChild(r)
        r.className = h.className
        r.id = h.id
        r.innerHTML = h.innerHTML.replace(m, '<$1font')
      }
      d._beforePrint = function () {
        v.styleSheet.cssText = d.parseCSS(d.getCSS(a.styleSheets, 'all'))
        d.writeHTML()
      }
      d.restoreHTML = function () {
        r.innerHTML = ''
        u.removeChild(r)
        u.appendChild(h)
      }
      d._afterPrint = function () {
        d.restoreHTML()
        v.styleSheet.cssText = ''
      }
      c(a)
      c(p)
      d.disablePP ||
        (e.insertBefore(v, e.firstChild),
        (v.media = 'print'),
        (v.className = 'iepp-printshim'),
        b.attachEvent('onbeforeprint', d._beforePrint),
        b.attachEvent('onafterprint', d._afterPrint))
    })(p, d)
  f._version = '2.0.6'
  f._prefixes = ' -webkit- -moz- -o- -ms- -khtml- '.split(' ')
  f._domPrefixes = E
  f.hasEvent = z
  f.testProp = function (b) {
    return k([b])
  }
  f.testAllProps = function (b, a) {
    let d = b.charAt(0).toUpperCase() + b.substr(1)
    let d = (b + ' ' + E.join(d + ' ') + d).split(' ')
    return k(d, a)
  }
  f.testStyles = function (b, a, c, e) {
    let k
    let g = d.createElement('div')
    if (parseInt(c, 10)) {
      for (; c--;) {
        (k = d.createElement('div')),
        (k.id = e ? e[c] : 'modernizr' + (c + 1)),
        g.appendChild(k)
      }
    }
    c = ['&shy;<style>', b, '</style>'].join('')
    g.id = 'modernizr'
    g.innerHTML += c
    B.appendChild(g)
    b = a(g, b)
    g.parentNode.removeChild(g)
    return !!b
  }
  B.className = B.className.replace(/\bno-js\b/, '') + (' js ' + C.join(' '))
  return f
})(this, this.document);
(function (p, d, t) {
  function k () {
    for (let h = 1, b = -1; n.length - ++b && (!n[b].s || (h = n[b].r)););
    h && m()
  }
  function f (b) {
    let a = d.createElement('script')
    let c
    a.src = b.s
    a.onreadystatechange = a.onload = function () {
      c ||
        (a.readyState &&
          a.readyState != 'loaded' &&
          a.readyState != 'complete') ||
        ((c = 1), k(), (a.onload = a.onreadystatechange = null))
    }
    e(function () {
      c || ((c = 1), k())
    }, s.errorTimeout)
    b.e ? a.onload() : q.parentNode.insertBefore(a, q)
  }
  function B (b) {
    let c = d.createElement('link')
    let y
    c.href = b.s
    c.rel = 'stylesheet'
    c.type = 'text/css'
    if (b.e || (!g && !a)) {
      (c.onload = function () {
        y ||
          ((y = 1),
          e(function () {
            k()
          }, 0))
      }),
      b.e && c.onload()
    } else {
      let f = function (b) {
        e(function () {
          if (!y) {
            try {
              b.sheet.cssRules.length ? ((y = 1), k()) : f(b)
            } catch (a) {
              a.code == 1e3 || a.message == 'security' || a.message == 'denied'
                ? ((y = 1),
                e(function () {
                  k()
                }, 0))
                : f(b)
            }
          }
        }, 0)
      }
      f(c)
    }
    e(function () {
      y || ((y = 1), k())
    }, s.errorTimeout)
    !b.e && q.parentNode.insertBefore(c, q)
  }
  function m () {
    let a = n.shift()
    b = 1
    a
      ? a.t
        ? e(function () {
          a.t == 'c' ? B(a) : f(a)
        }, 0)
        : (a(), k())
      : (b = 0)
  }
  function D (a, g, f, p, t, N) {
    function r () {
      G ||
        (l.readyState &&
          l.readyState != 'loaded' &&
          l.readyState != 'complete') ||
        ((A.r = G = 1),
        !b && k(),
        (l.onload = l.onreadystatechange = null),
        e(function () {
          w.removeChild(l)
        }, 0))
    }
    let l = d.createElement(a)
    let G = 0
    let A = { t: f, s: g, e: N }
    l.src = l.data = g
    !c && (l.style.display = 'none')
    l.width = l.height = '0'
    a != 'object' && (l.type = f)
    l.onload = l.onreadystatechange = r
    a == 'img'
      ? (l.onerror = r)
      : a == 'script' &&
        (l.onerror = function () {
          A.e = A.r = 1
          m()
        })
    n.splice(p, 0, A)
    w.insertBefore(l, c ? null : q)
    e(function () {
      G || (w.removeChild(l), (A.r = A.e = G = 1), k())
    }, s.errorTimeout)
  }
  function E (a, d, c) {
    let e = d == 'c' ? M : I
    b = 0
    d = d || 'j'
    F(a)
      ? D(e, a, d, this.i++, z, c)
      : (n.splice(this.i++, 0, a), n.length == 1 && m())
    return this
  }
  function C () {
    let a = s
    a.loader = { load: E, i: 0 }
    return a
  }
  let z = d.documentElement
  let e = p.setTimeout
  let q = d.getElementsByTagName('script')[0]
  let x = {}.toString
  let n = []
  let b = 0
  let a = 'MozAppearance' in z.style
  let c = a && !!d.createRange().compareNode
  let w = c ? z : q.parentNode
  let L = p.opera && x.call(p.opera) == '[object Opera]'
  let g = 'webkitAppearance' in z.style
  let K = g && 'async' in d.createElement('script')
  let I = a ? 'object' : L || K ? 'img' : 'script'
  let M = g ? 'img' : I
  let J =
      Array.isArray ||
      function (a) {
        return x.call(a) == '[object Array]'
      }
  let F = function (a) {
    return typeof a === 'string'
  }
  let H = function (a) {
    return x.call(a) == '[object Function]'
  }
  let u = []
  let r = {}
  let v
  let s
  s = function (a) {
    function b (a) {
      a = a.split('!')
      let d = u.length
      let c = a.pop()
      let e = a.length
      let c = { url: c, origUrl: c, prefixes: a }
      let g
      let f
      for (f = 0; f < e; f++) (g = r[a[f]]) && (c = g(c))
      for (f = 0; f < d; f++) c = u[f](c)
      return c
    }
    function d (a, c, e, f, g) {
      let h = b(a)
      let k = h.autoCallback
      if (!h.bypass) {
        c &&
          (c = H(c) ? c : c[a] || c[f] || c[a.split('/').pop().split('?')[0]])
        if (h.instead) return h.instead(a, c, e, f, g)
        e.load(
          h.url,
          h.forceCSS || (!h.forceJS && /css$/.test(h.url)) ? 'c' : t,
          h.noexec
        );
        (H(c) || H(k)) &&
          e.load(function () {
            C()
            c && c(h.origUrl, g, f)
            k && k(h.origUrl, g, f)
          })
      }
    }
    function c (a, b) {
      function e (a) {
        if (F(a)) d(a, h, b, 0, f)
        else if (Object(a) === a) { for (k in a) a.hasOwnProperty(k) && d(a[k], h, b, k, f) }
      }
      let f = !!a.test
      let g = a.load || a.both
      let h = a.callback
      let k
      e(f ? a.yep : a.nope)
      e(g)
      a.complete && b.load(a.complete)
    }
    let e
    let g
    let f = this.yepnope.loader
    if (F(a)) d(a, 0, f, 0)
    else if (J(a)) {
      for (e = 0; e < a.length; e++) {
        (g = a[e]),
        F(g) ? d(g, 0, f, 0) : J(g) ? s(g) : Object(g) === g && c(g, f)
      }
    } else Object(a) === a && c(a, f)
  }
  s.addPrefix = function (a, b) {
    r[a] = b
  }
  s.addFilter = function (a) {
    u.push(a)
  }
  s.errorTimeout = 1e4
  d.readyState == null &&
    d.addEventListener &&
    ((d.readyState = 'loading'),
    d.addEventListener(
      'DOMContentLoaded',
      (v = function () {
        d.removeEventListener('DOMContentLoaded', v, 0)
        d.readyState = 'complete'
      }),
      0
    ))
  p.yepnope = C()
})(this, this.document)
Modernizr.load = function () {
  yepnope.apply(window, [].slice.call(arguments, 0))
};

(function () {
  function h () {
    let a = navigator.userAgent.toLowerCase()
    return a.indexOf('msie') != -1 ? parseInt(a.split('msie')[1]) : !1
  }
  if (void 0 == jQuery) console.log('Jquery not included!')
  else if (void 0 == Modernizr.video) console.log('Modernizr not included!')
  else {
    let b = jQuery
    let k = h()
    let g = 0
    let e = 0
    jQuery.fn.extend({
      ensureLoad: function (a) {
        return this.each(function () {
          this.complete || this.readyState === 4
            ? a.call(this)
            : this.readyState === 'uninitialized' &&
              this.src.indexOf('data:') === 0
              ? (b(this).trigger('error'), a.call(this))
              : (b(this).one('load', a),
              k &&
                void 0 != this.src &&
                this.src.indexOf('?') == -1 &&
                (this.src = this.src + '?' + new Date().getTime()))
        })
      }
    })
    video_background = function (a, f) {
      this.hidden = !1
      this.$holder = a
      this.id = 'video_background_video_' + g
      g++
      this.parameters = {
        position: 'absolute',
        'z-index': '-1',
        video_ratio: !1,
        loop: !0,
        autoplay: !0,
        muted: !1,
        mp4: !1,
        webm: !1,
        ogg: !1,
        flv: !1,
        youtube: !1,
        priority: 'html5',
        fallback_image: !1,
        sizing: 'fill',
        start: 0
      }
      b.each(
        f,
        b.proxy(function (a, b) {
          this.parameters[a] = b
        }, this)
      )
      this.$video_holder = b('<div id="' + this.id + '"></div>')
        .appendTo(a)
        .css({
          'z-index': this.parameters['z-index'],
          position: this.parameters.position,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden'
        })
      this.ismobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      )
      this.supports_flash =
        swfobject.getFlashPlayerVersion().major > 9 &&
        (!1 !== this.parameters.mp4 || !1 !== this.parameters.flv)
      this.supports_video =
        Modernizr.video &&
        ((Modernizr.video.h264 && !1 !== this.parameters.mp4) ||
          (Modernizr.video.ogg && !1 !== this.parameters.ogg) ||
          (Modernizr.video.webm && !1 !== this.parameters.webm))
      this.decision = 'image'
      this.ismobile ||
        (!this.supports_flash &&
          !this.supports_video &&
          !1 === this.parameters.youtube) ||
        ((this.decision = this.parameters.priority),
        !1 !== this.parameters.youtube
          ? (this.decision = 'youtube')
          : this.parameters.priority == 'flash' && this.supports_flash
            ? (this.decision = 'flash')
            : this.parameters.priority == 'html5' && this.supports_video
              ? (this.decision = 'html5')
              : this.supports_flash
                ? (this.decision = 'flash')
                : this.supports_video && (this.decision = 'html5'))
      this.decision == 'image'
        ? this.make_image()
        : this.decision == 'youtube'
          ? this.make_youtube()
          : this.decision == 'html5'
            ? this.make_video()
            : this.make_flash()
      return this
    }
    video_background.prototype = {
      make_video: function () {
        let a =
          '<video width="100%" height="100%" ' +
          ((this.parameters.autoplay ? 'autoplay ' : '') +
            (this.parameters.loop ? 'loop onended="this.play()" ' : '')) +
          '>'
        !1 !== this.parameters.mp4 &&
          (a +=
            '<source src="' +
            this.parameters.mp4 +
            '" type="video/mp4"></source>')
        !1 !== this.parameters.webm &&
          (a +=
            '<source src="' +
            this.parameters.webm +
            '" type="video/webm"></source>')
        !1 !== this.parameters.ogg &&
          (a +=
            '<source src="' +
            this.parameters.ogg +
            '" type="video/ogg"></source>')
        this.$video = b(a + '</video>').css({ position: 'absolute' })
        this.$video_holder.append(this.$video)
        this.video = this.$video.get(0)
        !1 !== this.parameters.video_ratio &&
          ((this.resize_timeout = !1),
          b(window).resize(
            b.proxy(function () {
              clearTimeout(this.resize_timeout)
              this.resize_timeout = setTimeout(
                b.proxy(this.video_resize, this),
                10
              )
            }, this)
          ),
          this.video_resize())
        this.parameters.muted && this.mute()
      },
      video_resize: function () {
        let a = this.$video_holder.width()
        let b = this.$video_holder.height()
        let c = a
        let d = a / this.parameters.video_ratio
        d < b && ((d = b), (c = b * this.parameters.video_ratio))
        d = Math.ceil(d)
        c = Math.ceil(c)
        b = Math.round(b / 2 - d / 2)
        a = Math.round(a / 2 - c / 2)
        this.$video.attr('width', c)
        this.$video.attr('height', d)
        this.$video.css({ top: b + 'px', left: a + 'px' })
      },
      make_youtube: function () {
        let a = b('html')
        this.$video = b('<div id="' + this.id + '_yt"></div>')
          .appendTo(this.$video_holder)
          .css({ position: 'absolute' })
        this.youtube_ready = !1
        if (e == 0) {
          let f = document.createElement('script')
          f.src = 'https://www.youtube.com/iframe_api'
          let c = document.getElementsByTagName('script')[0]
          c.parentNode.insertBefore(f, c)
          e = 1
          window.onYouTubeIframeAPIReady = b.proxy(function () {
            a.trigger('yt_loaded')
            this.build_youtube()
            e = 2
          }, this)
        } else {
          e == 1
            ? a.bind('yt_loaded', b.proxy(this.build_youtube, this))
            : e == 2 && this.build_youtube()
        }
      },
      build_youtube: function () {
        let a = {
          loop: this.parameters.loop ? 1 : 0,
          start: this.parameters.start,
          autoplay: this.parameters.autoplay ? 1 : 0,
          controls: 0,
          showinfo: 0,
          wmode: 'transparent',
          iv_load_policy: 3,
          modestbranding: 1,
          rel: 0
        }
        this.parameters.loop && (a.playlist = this.parameters.youtube)
        this.player = new YT.Player(this.id + '_yt', {
          height: '100%',
          width: '100%',
          playerlets: a,
          videoId: this.parameters.youtube,
          events: { onReady: b.proxy(this.youtube_ready_fun, this) }
        })
      },
      youtube_ready_fun: function (a) {
        this.youtube_ready = !0
        this.$video = b('#' + this.id + '_yt')
        !1 !== this.parameters.video_ratio &&
          ((this.resize_timeout = !1),
          b(window).resize(
            b.proxy(function () {
              clearTimeout(this.resize_timeout)
              this.resize_timeout = setTimeout(
                b.proxy(this.video_resize, this),
                10
              )
            }, this)
          ),
          this.video_resize())
        this.parameters.muted && this.mute()
      },
      make_flash: function () {
        let a = {
          url:
            !1 != this.parameters.mp4
              ? this.parameters.mp4
              : this.parameters.flv,
          loop: this.parameters.loop,
          autoplay: this.parameters.autoplay,
          muted: this.parameters.muted
        }
        this.$video_holder.append('<div id="' + this.id + '_flash"></div>')
        swfobject.embedSWF(
          'flash/video.swf',
          this.id + '_flash',
          '100%',
          '100%',
          '9.0',
          null,
          a,
          {
            allowfullscreen: !0,
            allowScriptAccess: 'always',
            wmode: 'transparent'
          },
          { name: 'background-video-swf' },
          b.proxy(this.flash_callback, this)
        )
      },
      flash_callback: function (a) {
        this.video = b(a.target).get(0)
        this.parameters.muted && this.mute()
      },
      make_image: function () {
        !1 !== this.parameters.fallback_image &&
          ((this.$img = b(
            '<img src="' + this.parameters.fallback_image + '" alt=""/>'
          )
            .appendTo(this.$video_holder)
            .css({ position: 'absolute' })),
          this.$img.ensureLoad(b.proxy(this.image_loaded, this)))
      },
      image_loaded: function () {
        this.original_width = this.$img.width()
        this.original_height = this.$img.height()
        this.resize_timeout = !1
        b(window).resize(
          b.proxy(function () {
            clearTimeout(this.resize_timeout)
            this.resize_timeout = setTimeout(
              b.proxy(this.image_resize, this),
              10
            )
          }, this)
        )
        this.image_resize()
      },
      image_resize: function () {
        let a = this.$video_holder.width()
        let b = this.$video_holder.height()
        let c = a
        let d = this.original_height / (this.original_width / a)
        if (
          (this.parameters.sizing == 'adjust' && d > b) ||
          (this.parameters.sizing == 'fill' && d < b)
        ) { (d = b), (c = this.original_width / (this.original_height / b)) }
        d = Math.ceil(d)
        c = Math.ceil(c)
        b = Math.round(b / 2 - d / 2)
        a = Math.round(a / 2 - c / 2)
        this.$img.css({
          width: c + 'px',
          height: d + 'px',
          top: b + 'px',
          left: a + 'px'
        })
      },
      isPlaying: function () {
        return this.decision == 'html5'
          ? !this.video.paused
          : this.decision == 'flash'
            ? video.isPlaying()
            : this.decision == 'youtube' && this.youtube_ready
              ? this.player.getPlayerState() === 1
              : !1
      },
      play: function () {
        this.decision == 'html5'
          ? this.video.play()
          : this.decision == 'flash'
            ? this.video.resume()
            : this.decision == 'youtube' &&
            this.youtube_ready &&
            this.player.playVideo()
      },
      pause: function () {
        this.decision == 'html5' || this.decision == 'flash'
          ? this.video.pause()
          : this.decision == 'youtube' &&
            this.youtube_ready &&
            this.player.pauseVideo()
      },
      toggle_play: function () {
        this.isPlaying() ? this.pause() : this.play()
      },
      isMuted: function () {
        return this.decision == 'html5'
          ? !this.video.volume
          : this.decision == 'flash'
            ? video.isMute()
            : this.decision == 'youtube' && this.youtube_ready
              ? this.player.isMuted()
              : !1
      },
      mute: function () {
        this.decision == 'html5'
          ? (this.video.volume = 0)
          : this.decision == 'flash'
            ? this.video.mute()
            : this.decision == 'youtube' &&
            this.youtube_ready &&
            this.player.mute()
      },
      unmute: function () {
        this.decision == 'html5'
          ? (this.video.volume = 1)
          : this.decision == 'flash'
            ? this.video.unmute()
            : this.decision == 'youtube' &&
            this.youtube_ready &&
            this.player.unMute()
      },
      toggle_mute: function () {
        this.isMuted() ? this.unmute() : this.mute()
      },
      hide: function () {
        this.pause()
        this.$video_holder.stop().fadeTo(700, 0)
        this.hidden = !0
      },
      show: function () {
        this.play()
        this.$video_holder.stop().fadeTo(700, 1)
        this.hidden = !1
      },
      toogle_hidden: function () {
        this.hidden ? this.show() : this.hide()
      },
      rewind: function () {
        this.decision == 'html5'
          ? (this.video.currentTime = 0)
          : this.decision == 'flash'
            ? this.video.rewind()
            : this.decision == 'youtube' &&
            this.youtube_ready &&
            this.player.seekTo(0)
      }
    }
  }
})(void 0)

jQuery(document).ready(function ($) {
  let Video_back = new video_background($('#home'), {
    position: 'absolute', // Follow page scroll
    'z-index': '-1', // Behind everything
    loop: true, // Loop when it reaches the end
    autoplay: true, // Autoplay at start
    muted: true, // Muted at start
    mp4: 'upload/preview.mp4', // Path to video mp4 format
    ogg: 'upload/preview.ogg', // Path to video ogg format
    webm: 'upload/preview.webm', // Path to video webm format
    video_ratio: 1.7778, // width/height -> If none provided sizing of the video is set to adjust
    fallback_image: 'images/dummy.png', // Fallback image path
    priority: 'html5' // Priority for html5 (if set to flash and tested locally will give a flash security error)
  })
})
