const addBtnElement = document.getElementById("addBtn");
let removeBtnElement = document.getElementById("removeBtn")
const sliderElement = document.getElementById("slider")
let imageElement = document.querySelectorAll("img")

function enabled() {
  let imageElement = document.querySelectorAll(".img")
  let removeBtnElement = document.getElementById("removeBtn")
   
  imageElement.addEventListener(".imagecontainer", function(){
      if (imageElement.value.length < 2){
          button.disabled = false;
    } else {
          button.disabled = true;
    }
  })
  }

addBtnElement.addEventListener("click", function () {
  const newImage = document.createElement("img");
  newImage.src = "https://loremflickr.com/g/320/240/paris";
  newImage.alt = "photo 2";
  
  sliderElement.appendChild(newImage);
});

removeBtnElement.addEventListener("click", function () {
  sliderElement.removeChild(sliderElement.lastChild);
});
