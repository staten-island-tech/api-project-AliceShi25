// import { image } from "./tarot";
import { ponyuh } from "./ponah";
import "../styles/style.css";

const DOMselectors = {
  parent: document.getElementById("parent"),
};

async function getData(ponyuh) {
  try {
    const response = await fetch(ponyuh);
    const data = await response.json();
    console.log(data);
    data.data.forEach((ponee) => {
      DOMselectors.parent.insertAdjacentHTML(
        "beforeend",
        `<div class="pohee">
            <h2>${ponee.name}</h2>
            <img class = "img" src=${ponee.image}>
            <p class="info">${ponee.sex}</p>
          </div>`
      );
    });
  } catch (error) {
    console.log(error);
  }
}
getData(ponyuh);

// function createImage(pic) {
//   document.getElementById("parent").insertAdjacentHTML(
//     "beforeend",
//     `<div class="card-front">
//         <img class="image" src="${pic.image}">
//         </div>`
//   );
// }
// image.forEach(createImage);
