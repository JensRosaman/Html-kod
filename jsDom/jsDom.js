

// Hitta element på sidan
const vibes = document.querySelector("#vibes");
const img = document.querySelector("#img1");
const header = document.getElementById("header")
const hiddenDiv = document.querySelector(".hidden");
const thanksDiv = document.querySelector(".thanks");

// Hitta knappar på sidan
const showHideBtn = document.querySelector(".show-hide");
const changePicBtn = document.querySelector(".change-pic");
const yellowBtn = document.querySelector(".yellow-bg");
const greenBtn = document.querySelector(".green-bg");
const blueBtn = document.querySelector(".blue-bg");
const goodVibesBtn = document.querySelector(".good-vibes");
const headerBtn = document.querySelector(".header");
const removeHeaderBtn = document.querySelector(".remove-header");
const showHeaderBtn = document.querySelector(".show-header");

// Funktioner för att ändra sidans innehåll
function hideImg() {
  img.style.visibility = "hidden";
}

function showImg(){
  console.log("showImg called")
  img.style.visibility = "visible";
}

function changeImg() {
  console.log("changeImg succesfully called")
  if (img.src == "https://thumbs.dreamstime.com/z/cyber-woman-orange-11363555.jpg" ) {
    img.src = "https://preview.redd.it/akiinn6djtd21.jpg?auto=webp&s=52cd4cd252e44b0c06e80d190edb032e39492a76";
  } else {
    img.src = "https://thumbs.dreamstime.com/z/cyber-woman-orange-11363555.jpg";
  }
}

function changeBg() {
  console.log("changeBg called")
  const colors = [
    "black",
    "silver",
    "gray",
    "white",
    "maroon",
    "red",
    "purple",
    "fuchsia",
    "green",
    "lime",
    "olive",
    "yellow",
    "navy",
    "blue",
    "teal",
    "aqua",
  ];
  while (true){
    const color = colors[Math.floor(Math.random() * colors.length)];
    if (document.body.style.backgroundColor != color){
      document.body.style.backgroundColor = color;
      break;

    }

  }
}

function toggleVibes(){
  console.log("toggleVibes called")
  if( vibes.textContent == ""){
    vibes.textContent = "Du kan klara allt"
  }
  else{
    vibes.textContent = "";
  };
};

function toggleTime(){
  const time = document.getElementById("time")
  console.log("Toggle time called")

  if (time.textContent == ""){
    time.textContent = new Date().toString();
  }
}
function changeHeader() {
  const newHeader = prompt("Skriv in en ny rubrik");
  if (newHeader !== null && newHeader !== "") {
    vibes.textContent = newHeader;
  }
}

function createHeader(){
  header.style.alignItems
}

function removeHeader() {
  header.remove();
}

function showHeader() {
  document.body.prepend(header);
}

function toggleThanks() {
  thanksDiv.classList.toggle("hidden");
}

// Lägg till event listeners till knappar
showHideBtn.addEventListener("click", toggleHidden);
changePicBtn.addEventListener("click", changePic);
yellowBtn.addEventListener("click", () => changeBg("red"));
