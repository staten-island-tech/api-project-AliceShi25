import { image } from "./tarot";
import { tarot } from "./tarot";
import "../styles/style.css";

const DOMselectors = {
  parent: document.getElementById("parent"),
};
let pics = image;

async function getData(tarot) {
  try {
    const response = await fetch(tarot);
    const data = await response.json();
    console.log(data);
    data.cards.forEach((tarot) => {
      DOMselectors.parent.insertAdjacentHTML(
        "beforeend",
        `<div class="justT">
        <div class = "tarot-back">
            <h2>${tarot.name}</h2>
            <p class="info">${tarot.desc}</p>
            </div>
          </div>`
      );
    });
  } catch (error) {
    console.log(error);
  }
}
getData(tarot);

function createImage(pic) {
  document.getElementById("parent").insertAdjacentHTML(
    "beforeend",
    `<div class = "justT"><div class="tarot-front">
        <img class="img" src="${pic.image}">
        </div></div>`
  );
}
image.forEach(createImage);
