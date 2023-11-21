var map = L.map('map').setView([35.6876096, -105.938456], 2);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var markers = new L.MarkerClusterGroup();

for (let campground of campgrounds) {
    let title = `${campground.properties.popUpMarkup}`
    // console.log(title)
    let marker = L.marker(campground.geometry.coordinates);
    // markers.addLayer(L.marker([175.3107, -37.7784]));
    marker.bindPopup(title);
    markers.addLayer(marker);
}

map.addLayer(markers);
