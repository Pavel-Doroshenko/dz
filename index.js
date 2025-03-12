const addBtnElement = document.getElementById("addBtn");
const removeBtnElement = document.getElementById("removeBtn");
const sliderElement = document.getElementById("slider");
const newImageElement = document.getElementById("newImg");
const imgList = document.querySelectorAll("img");
//for (let val of imgList) console.log(val);
//console.log(document.body);

newImageElement.addEventListener("click", function () {
  sliderElement.outerHTML =
    "<div><img src=https://loremflickr.com/g/320/240/paris/><img src=https://loremflickr.com/g/320/240/paris/></div>";

  //for (let val of imgList)
  //console.log(val);
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
