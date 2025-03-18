const addBtnElement = document.getElementById("addBtn");
const removeBtnElement = document.getElementById("removeBtn");
const sliderElement = document.getElementById("slider");
const newImageElement = document.getElementById("newImg");

function refresh() {
  document.querySelectorAll("img").forEach((image) => {
    image.src =
      "https://via.assets.so/album.png?id=1&q=95&w=360&h=360&fit=fill";
  });
}

document.getElementById("newImg").onclick = refresh;

addBtnElement.addEventListener("click", function () {
  const newImage = document.createElement("img");
  newImage.src =
    "https://via.assets.so/game.png?id=1&q=95&w=360&h=360&fit=fill";
  newImage.alt = "photo 2";

  sliderElement.appendChild(newImage);

  disabledBtn();
});

removeBtnElement.addEventListener("click", function () {
  sliderElement.removeChild(sliderElement.lastChild);
  disabledBtn();
});

function disabledBtn() {
  let imageElement = document.querySelectorAll("img");
  if (imageElement.length < 2) {
    removeBtnElement.disabled = true;
  } else {
    removeBtnElement.disabled = false;
  }
}

function zoomIn(event) {
  if (event.target.tagName === "IMG") {
    const parent = event.target.parentElement;
    parent.classList.toggle("fullScreen");
  }
  if (event.target.classList.contains("fullScreen")) {
    event.target.classList.toggle("fullScreen");
  }
}

function init() {
  document.getElementById("newImg").onclick = refresh;
  document.querySelectorAll("img").forEach((image) => {
    image.onclick = zoomIn;
  });
}

window.addEventListener("DOMContentLoaded", init);
