document.addEventListener("DOMContentLoaded", function () {

  const eventImages = [
    "images/events/e1.avif",
    "images/events/ev2.avif",
    "images/events/e3.avif"
  ];

  let currentImage = 0;

  const eventImg = document.querySelector(".event-img");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  nextBtn.addEventListener("click", function () {
  eventImg.style.opacity = 0;

  setTimeout(() => {
    currentImage = (currentImage + 1) % eventImages.length;
    eventImg.src = eventImages[currentImage];
    eventImg.style.opacity = 1;
  }, 200);
});

  prevBtn.addEventListener("click", function () {
  eventImg.style.opacity = 0;

  setTimeout(() => {
    currentImage =
      (currentImage - 1 + eventImages.length) % eventImages.length;

    eventImg.src = eventImages[currentImage];
    eventImg.style.opacity = 1;
  }, 200);
});
});