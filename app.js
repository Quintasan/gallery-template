document.addEventListener("DOMContentLoaded", function(event) {
  // show overlay when clicking on the photo
  document.querySelectorAll(".gallery > figure").forEach((element) => {
    element.addEventListener("click", () => {
      const overlay = element.querySelector(".overlay");
      overlay.classList.toggle("display-none");
    });
  });

  // show map overlay when clicking on the Details link
  document.querySelectorAll(".details").forEach((element) => {
    element.addEventListener("click", () => {
      const figure = element.closest("figure");
      const mapOverlay = figure.querySelector(".map");
      mapOverlay.classList.toggle("display-none");
    });
  });

  // hide map overlay when clicking anywhere
  document.querySelectorAll(".map").forEach((mapOverlay) => {
    mapOverlay.addEventListener("click", () => {
      ["display-none"].forEach(klass => {
        mapOverlay.classList.toggle(klass);
      });
    })
  });
});