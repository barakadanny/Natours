console.log("mapbox.js loaded");
const locations = JSON.parse(document.getElementById('map').dataset.locations);

// mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
mapboxgl.accessToken = 'pk.eyJ1IjoiYmFyYWthZGFuIiwiYSI6ImNsajQ0MGRkajBydmwzY28wZ3oycnJoZ2IifQ.IfkJrcVuXZ1_X4_L-cXZvg';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
});
