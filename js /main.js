// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("heroCarousel");
  
    // Listen for each slide change
    carousel.addEventListener("slid.bs.carousel", function () {
      // Get the active carousel item
      const activeItem = carousel.querySelector(".carousel-item.active");
  
      // Get caption elements inside the active slide
      const heading = activeItem.querySelector("h1");
      const paragraph = activeItem.querySelector("p");
  
      // Remove previous animation classes (if any)
      [heading, paragraph].forEach(el => {
        el.classList.remove("animate__animated", "animate__fadeInDown", "animate__fadeInUp");
  
        // Trigger reflow to restart animation
        void el.offsetWidth;
      });
  
      // Add Animate.css classes to trigger animation
      heading.classList.add("animate__animated", "animate__fadeInDown");
      paragraph.classList.add("animate__animated", "animate__fadeInUp");
    });
  
    // Trigger animation for first slide on load
    const firstItem = carousel.querySelector(".carousel-item.active");
    if (firstItem) {
      const heading = firstItem.querySelector("h1");
      const paragraph = firstItem.querySelector("p");
  
      heading.classList.add("animate__animated", "animate__fadeInDown");
      paragraph.classList.add("animate__animated", "animate__fadeInUp");
    }
  });
  
