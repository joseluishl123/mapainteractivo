// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
var map = null;

function initMap() {
  const uluru = { lat: 5.6953765148714615, lng: -76.65155875727395 };
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: uluru,
  });
  const contentString = `<div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">Quibdó</h5>
  </div>
  <img
                  src="http://qradio.com.co/wp-content/uploads/2020/04/WhatsApp-Image-2020-04-29-at-8.39.17-AM-678x381.jpeg"
                  alt=""
                  style="width:100%;"
                />
  <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`;
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map,
    title: 'Uluru (Ayers Rock)',
  });
  const marker2 = new google.maps.Marker({
    position: { lat: 5.094803738916297, lng: -76.65221295759787 },
    map,
    title: 'Uluru (Ayers Rock)',
  });
  const marker3 = new google.maps.Marker({
    position: { lat: 5.16035287942598, lng: -76.68784044962018 },
    map,
    title: 'Uluru (Ayers Rock)',
  });
  const marker4 = new google.maps.Marker({
    position: { lat: 5.263723506407031, lng: -76.5634461450925 },
    map,
    title: 'Uluru (Ayers Rock)',
  });
  const marker5 = new google.maps.Marker({
    position: { lat: 5.710823154026221, lng: -77.26438003231776 },
    map,
    title: 'Uluru (Ayers Rock)',
  });

  marker.addListener('click', () => {
    infowindow.open(map, marker);
  });

  map.addListener('click', (e) => {
    placeMarkerAndPanTo(e.latLng, map);
    document.getElementById('Latitud').value = e.latLng.lat();
    document.getElementById('Longitud').value = e.latLng.lng();
  });

  function placeMarkerAndPanTo(latLng, map) {
    new google.maps.Marker({
      position: latLng,
      map: map,
    });
    map.panTo(latLng);
  }
}

function goPoint(lat, lng) {
  map.panTo(new google.maps.LatLng(lat, lng));
  map.setZoom(12);
}
