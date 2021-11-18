document.addEventListener("DOMContentLoaded", () => {
    const myCarousel = document.querySelector("#carousel2");
    const carousel = new bootstrap.Carousel(myCarousel, {
      interval: false,
      wrap: false,
    });
  });