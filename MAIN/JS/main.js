const images = [
  "../IMAGES/MOVIES/scream.jpg",
  "../IMAGES/CDS/Bladerunner OST.png",
  "../IMAGES/MOVIES/wolfOfWallStreet.jpg",
  "../IMAGES/CDS/Hades.png",
  "../IMAGES/MOVIES/rambo.jpg"
];

let startIndex = 0;

function renderCarousel() {
  const carousel = document.getElementById("carousel");
  carousel.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    let index = (startIndex + i) % images.length;

    const img = document.createElement("img");
    img.src = images[index];

    carousel.appendChild(img);
  }
}

function moveSlide(direction) {
  startIndex = (startIndex + direction + images.length) % images.length;
  renderCarousel();
  
}

renderCarousel();

setInterval(() => {
  moveSlide(1);
}, 5000);
