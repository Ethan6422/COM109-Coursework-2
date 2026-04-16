const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg"
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
  console.log("carousel script running");
  startIndex = (startIndex + direction + images.length) % images.length;
  renderCarousel();
  
}

renderCarousel();
console.log("carousel script running");

setInterval(() => {
  moveSlide(1);
}, 5000);