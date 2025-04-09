"use strict";

// Get the map container element
const mapImg = document.querySelector(".map-img");

// Create a div element to hold the map
const mapContainer = document.createElement("div");
mapContainer.id = "map";
mapContainer.style.marginBottom = "20px";
mapContainer.style.height = "200px";
mapContainer.style.width = "800px";
mapContainer.style.borderRadius = "10px";

// Append the map container to the map-img div
mapImg.appendChild(mapContainer);

let map, mapEvent;

// Geolocation
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude, longitude } = position.coords;

      console.log(
        `https://www.google.co.in/maps/@${latitude},${longitude},15z`
      );

      const coords = [latitude, longitude];

      // Initialize the map with the user's coordinates
      map = L.map("map").setView(coords, 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup("Your current location")
        .openPopup();
    },
    function (error) {
      mapContainer.innerHTML = `<p style="padding: 20px; text-align: center;">Could not get your position: ${error.message}</p>`;
      console.error("Geolocation error:", error);
    }
  );
} else {
  mapContainer.innerHTML =
    '<p style="padding: 20px; text-align: center;">Geolocation is not supported by your browser.</p>';
}
