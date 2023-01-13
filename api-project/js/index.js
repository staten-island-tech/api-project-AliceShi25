// import { image } from "./tarot";
import "../styles/style.css";

const apiKey = "api_key=8f0696839a064ed5b45cadbe141ee377";
const URL = "https://api.themoviedb.org/3";
const pop_URL = URL + "/discover/movie?sort_by=popularity.desc&" + apiKey;

const DOMselectors = {
  parent: document.getElementById("parent"),
};

async function getData(pop_URL) {
  try {
    const response = await fetch(pop_URL);
    const data = await response.json();
    console.log(data);
    // showMovies(data.results);
    data.results.forEach((pop_URL) => {
      DOMselectors.parent.insertAdjacentHTML(
        "beforeend",
        `<div class = "stuff">
            <h2>${pop_URL.title}</h2>
            <p class="info">${pop_URL.id}</p>
          </div>`
      );
    });
  } catch (error) {
    console.log(error);
  }
}
getData(pop_URL);

// function showMovies(data) {
//   data.results.forEach((movie) => {
//     document.querySelector(".movie")
// }

// function createImage(pic) {
//   document.getElementById("parent").insertAdjacentHTML(
//     "beforeend",
//     `<div class = "justT"><div class="tarot-front">
//         <img class="img" src="${pic.image}">
//         </div></div>`
//   );
// }
// image.forEach(createImage);
