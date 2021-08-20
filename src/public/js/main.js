const map = L.map('map-template').setView([-34.6046086,-58.3803817], 13);

const socket = io();

const tileURL = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png';

L.tileLayer(tileURL).addTo(map);

map.locate({enableHighAccuracy: true});
map.on('locationfound', e => {
    const coords = [e.latlng.lat, e.latlng.lng];
    const marker = L.marker(coords);
    marker.bindPopup('Solucionar');
    map.addLayer(marker);
    socket.emit('userCoordinates', e.latlng);
});

socket.on('newUserCoordinates', (coords) => {
    const marker = L.marker([coords.lat, coords.lng]);
    marker.bindPopup('User');
    map.addLayer(marker);
});

const marker = L.marker([-34.6046086,-58.3803817]);
marker.bindPopup('Base');
map.addLayer(marker);