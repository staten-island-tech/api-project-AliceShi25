import { image } from "./tarot";
import { tarot } from "./tarot";
import "../styles/style.css";

const DOMselectors = {
  parent: document.getElementById("parent"),
  parent2: document.getElementById("parent2"),
};

async function getData(tarot) {
  try {
    const response = await fetch(tarot);
    const data = await response.json();
    console.log(data);
    data.cards.forEach((card) => {
      DOMselectors.parent.insertAdjacentHTML(
        "beforeend",
        `<div class="tarots">
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
