import { image } from "./tarot";
import { tarot } from "./tarot";
import "../styles/style.css";

const DOMselectors = {
  parent: document.getElementById("parent"),
};

async function getData(tarot) {
  try {
    const response = await fetch(tarot);
    const data = await response.json();
    console.log(data);
    data.cards.forEach((card) => {
      DOMselectors.parent.insertAdjacentHTML(
        "beforeend",
        `<div class="card-back">
            <h2>${card.name}</h2>
            <h3>${card.meaning_up}</h3>
            <p class="info">${card.desc}</p>
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
    `<div class="card-front">
        <img class="image" src="${pic.image}">
        </div>`
  );
}

image.forEach(createImage);
