// import { image } from "./tarot";
import { queen } from "./api";
import "../styles/style.css";

const DOMselectors = {
  parent: document.getElementById("parent"),
};

async function getData(queen) {
  try {
    const response = await fetch(queen);
    const data = await response.json();
    console.log(data);
    data.forEach((queen) => {
      DOMselectors.parent.insertAdjacentHTML(
        "beforeend",
        `<div class="justT">
        <div class = "tarot-back">
            <h2>${queen.song}</h2>
            <p class="info">${queen.quote}</p>
            </div>
          </div>`
      );
    });
  } catch (error) {
    console.log(error);
  }
}
getData(queen);

// function createImage(pic) {
//   document.getElementById("parent").insertAdjacentHTML(
//     "beforeend",
//     `<div class = "justT"><div class="tarot-front">
//         <img class="img" src="${pic.image}">
//         </div></div>`
//   );
// }
// image.forEach(createImage);
