/**
 * Outputs google map and markers.
 */

var map;
var autocomplete;
function renderMap() {

  toggleMap();
  var userSelect = $('#zip-code').val();

  var geocoder;
  var lat;
  var lng;
  geocoder = new google.maps.Geocoder;
  geocoder.geocode({'address': userSelect}, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      lat = results[0].geometry.location.lat();
      lng = results[0].geometry.location.lng();
      localStorage.setItem('entryLat', lat.toFixed(2));
      localStorage.setItem('entryLng', lng.toFixed(2));
    }
  });
  setTimeout(function () {
    map = new google.maps.Map(document.getElementById('map-interior'), {
      zoom: 12,
      center: new google.maps.LatLng(localStorage.getItem('entryLat'), localStorage.getItem('entryLng')),
      mapTypeId: 'roadmap',
    });


    var input = document.getElementById('zip-code');

    autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    var geo = new google.maps.Geocoder;

    searchForZip();
    var items = filteredResults.results;

    $.each(items, function (key, val) {
      /**
       * ProviderType Legend
       * 1) ?
       * 2) Licensed Slot Contractor
       * 3) Licensed Group Home (Home Based Day Care)
       * 4) Licensed Daycare Center
       * 5) Unlicensed Non-Relative In-Home
       * 6) Unlicensed Relative In-Home
       * 7) Unlicensed Non-Relative Out-of-Home
       * 8) Unlicensed Relative Out-of-Home
       */
      var marker;
      var icon;
      var infoWindow;

      function markerBuild(icon) {
        var options = {
          position: {lat: val.lat, lng: val.lng},
          icon: icon,
          optimized: false,
          map: map
        };
        return options;
      }

      function returnHtml(rating) {
        var starStr = '<hr />';
        if (parseInt(rating) > 0) {
          var starStr = '<br />' + rating + ' stars <hr />';
        }
        return '<b>' + val.ProviderName + '</b><hr/>' + val.PostalAddress + ',<br/>' + val.ProviderTypeDescription + '<br />'
          + val.PhoneNumber + starStr;
      }

      switch (val.ProviderType) {
        case '2':
          icon = 'public/images/square.gif';
          if (val.PostalAddress) {
            marker = new google.maps.Marker(markerBuild(icon));
            infoWindow = new google.maps.InfoWindow;
            google.maps.event.addListener(marker, 'click', function () {
              infoWindow.setContent(returnHtml(val.QualityRating));
              infoWindow.open(map, this);
            });
          }
          break;

        case '3':
          icon = 'public/images/circle.gif';
          if (val.PostalAddress) {
            marker = new google.maps.Marker(markerBuild(icon));
            infoWindow = new google.maps.InfoWindow;
            google.maps.event.addListener(marker, 'click', function () {
              infoWindow.setContent(returnHtml(val.QualityRating));
              infoWindow.open(map, this);
            });
          }
          break;

        case '4':
          icon = 'public/images/triangle.png';
          if (val.PostalAddress) {
            marker = new google.maps.Marker(markerBuild(icon));
            infoWindow = new google.maps.InfoWindow;
            google.maps.event.addListener(marker, 'click', function () {
              infoWindow.setContent(returnHtml(val.QualityRating));
              infoWindow.open(map, this);
            });
          }
          break;
      }

    });
  }, 1000)
}

/**
 * Sets our initial location.
 */
function setPosition() {
  toggleMap();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else {
    console.log('Geolocation is not available')
  }
  /**
   * Gets user lat long.
   * @param position
   */
  function showPosition(position) {
    var entrygeo = new google.maps.Geocoder;
    var latlng = {lat: position.coords.latitude, lng: position.coords.longitude};
    entrygeo.geocode({'location': latlng}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        localStorage.setItem('entryLat', position.coords.latitude);
        localStorage.setItem('entryLng', position.coords.longitude);
        $('#zip-code').val(results[0].formatted_address);
      }

    })
  }
}
