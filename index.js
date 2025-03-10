const addBtnElement = document.getElementById("addBtn");
const removeBtnElement = document.getElementById("removeBtn");
const sliderElement = document.getElementById("slider");
const newImageElement = document.getElementById("newImg");

newImageElement.addEventListener("click", function () {
  let newImage = new Image();
  newImage.onload = () => {
    // Заменяем старое изображение новым
    let oldImage = document.querySelectorAll("img");
    oldImage.parentNode.replaceChild(newImage, oldImage);
  };
  newImage.src = "https://loremflickr.com/320/240?random=1" + 1++ ;
});

addBtnElement.addEventListener("click", function () {
  const newImage = document.createElement("img");
  newImage.src = "https://loremflickr.com/g/320/240/paris";
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
