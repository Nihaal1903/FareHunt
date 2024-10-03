mapboxgl.accessToken =
  "pk.eyJ1IjoibmloYWFsMTkwMyIsImEiOiJjbTFzdm00d3AwOWNyMmlzNmM2c3R5eGdpIn0.PV0B6e3t_BgfQyKyoE-vGw"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'metric'
  })
   
  map.addControl(directions, "top-left")
}