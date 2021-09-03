const queryURL = "https://dulce-affirmations-api.herokuapp.com/affirmation/";
const affirmationEl = document.getElementById("quote-text");
const gong = new Audio("./gongsound.wav");

const imageArray = [
  "./images/clouds.png",
  "./images/trees.png",
  "./images/water.png",
];

let imageUrl = imageArray[Math.floor(Math.random() * imageArray.length)];


document.body.style.backgroundImage = "url(" + imageUrl + ")";

async function getAffirmation() {
  const res = await fetch(queryURL);
  const data = await res.json();
  let affirmation = data[0].phrase;

  affirmationEl.textContent = affirmation;

  gong.volume = 0.1
  gong.play();
}