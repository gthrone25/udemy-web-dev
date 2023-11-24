var map = L.map('showmap').setView(campground.geometry.coordinates, 14);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker(campground.geometry.coordinates).addTo(map);

marker.bindPopup(`<h4>${campground.title}</h4><p>${campground.location}</p>`).openPopup();