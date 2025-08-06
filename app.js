document.addEventListener("DOMContentLoaded", function(event) {
  // show overlay when clicking on the photo
  document.querySelectorAll(".thumbnail").forEach((element) => {
    element.addEventListener("click", () => {
      const overlay = element.parentElement.querySelector(".overlay");
      overlay.classList.replace("hidden", "visible");
    });
  });

  // close the overlay when clicking on the back button
  document.querySelectorAll(".back").forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
      let overlay = closeButton.closest(".visible");
      overlay.classList.replace("visible", "hidden");
    });
  });

  // show map overlay when clicking on the Details link
  document.querySelectorAll(".details").forEach((element) => {
    element.addEventListener("click", () => {
      const figure = element.closest("figure");
      const mapOverlay = figure.querySelector(".map");
      mapOverlay.classList.replace("hidden", "visible")
    });
  });

  // hide map overlay when clicking anywhere
  document.querySelectorAll(".map").forEach((mapOverlay) => {
    mapOverlay.addEventListener("click", () => {
      mapOverlay.classList.replace("visible", "hidden")
    })
  });
});
