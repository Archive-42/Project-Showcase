/* ==============================================
    MAP -->
    =============================================== */
(function ($) {
  "use strict";
  var locations = [
    [
      '<div class="infobox"><h3 class="title"><a class="btn" href="#">Where I live</a></h3><span>Weehawken NJ</span><span>+551-254-5505</span></div>',
      40.76788,
      -74.0163,
      2,
    ],
  ];
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    scrollwheel: false,
    navigationControl: true,
    mapTypeControl: false,
    scaleControl: false,
    draggable: true,
    styles: [
      {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#444444",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            color: "#f2f2f2",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            saturation: -100,
          },
          {
            lightness: 45,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            color: "#01bacf",
          },
          {
            visibility: "on",
          },
        ],
      },
    ],
    center: new google.maps.LatLng(40.76788, -74.0163),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });
  var infowindow = new google.maps.InfoWindow();
  var marker, i;
  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
      icon: "images/apple-touch-icon.png",
    });
    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, i) {
        return function () {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        };
      })(marker, i)
    );
  }
})(jQuery);
