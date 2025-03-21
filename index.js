function init() {
  document.querySelector(".newImg").onclick = refresh;
  document.querySelector(".addBtn").onclick = addImg;
  document.querySelector(".removeBtn").onclick = removeImg;
  document.querySelector(".container").addEventListener("click", zoomIn);
  document.querySelectorAll("img").forEach((image) => {
    image.onload = (Event) => Event.target.classList.remove("loading");
  });
}

function refresh() {
  document.querySelectorAll("img").forEach((image) => {
    image.src = "https://loremflickr.com/320/240?random=" + Math.random();
    image.classList.add("loading");
  });
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

function addImg() {
  const addDiv = document.querySelector(".imagecontainer");
  const div = document.createElement("div");
  addDiv.appendChild(div);
  div.classList.add("imageWrapper");
  const newImage = document.createElement("img");
  newImage.src = "https://loremflickr.com/320/240?random=" + Math.random();
  newImage.alt = "photo 2";
  div.appendChild(newImage);
  disabledBtn();
}

function removeImg() {
  let removeImgEl = document.querySelector(".imagecontainer");
  removeImgEl.removeChild(removeImgEl.lastChild);
  disabledBtn();
}

function disabledBtn() {
  let imageElement = document.querySelectorAll("img");
  if (imageElement.length < 2) {
    document.querySelector(".removeBtn").disabled = true;
  } else {
    document.querySelector(".removeBtn").disabled = false;
  }
}

window.addEventListener("DOMContentLoaded", init);
