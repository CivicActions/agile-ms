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
      zoom: 10,
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
      var marker = new google.maps.Marker({
        position: {lat: val.lat, lng: val.lng},
        type: 'info',
        icon: 'public/images/person.png',
        map: map
      });
      var html = '<b>' + val.ProviderName + '</b><hr/>' + val.PhysicalCity + ',<br/>' + val.ProviderTypeDescription + '<br />'
        + val.PhoneNumber + '<br />' + val.QualityRating + ' stars<hr />';

      var infoWindow = new google.maps.InfoWindow;
      google.maps.event.addListener(marker, 'click', function () {
        infoWindow.setContent(html);
        infoWindow.open(map, this);
      });

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
