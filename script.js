'use strict';

const latitude = 36.977711;
const longitude = -76.430351;
const map = L.map('map').setView([latitude, longitude], 17);

const tileUrl =
  'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=fnRxcyJDYgEDIJQqzWyR';

const attribution =
  '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);

const marker = L.marker([latitude, longitude]).addTo(map);
