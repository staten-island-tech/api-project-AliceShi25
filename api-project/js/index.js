// import { image } from "./tarot";
import "../styles/style.css";

const apiKey = "api_key=8f0696839a064ed5b45cadbe141ee377";
const URL = "https://api.themoviedb.org/3";
const pop_URL = URL + "/discover/movie?sort_by=popularity.desc&" + apiKey;
const img_URL = "https://image.tmdb.org/t/p/w500";

const DOMselectors = {
  parent: document.getElementById("parent"),
};

async function getData(pop_URL) {
  try {
    const response = await fetch(pop_URL);
    const data = await response.json();
    console.log(data);
    showMovies(data.results);
  } catch (error) {
    console.log(error);
  }
}
getData(pop_URL);

function showMovies(data) {
  DOMselectors.parent.innerHTML = "";
  data.forEach((movie) => {
    const { title, poster_path, vote_average, overview, id } = movie;
    const create = document.createElement("div");
    create.classList.add("movie");
    create.innerHTML = `
      <img class ="img" src="${img_URL + poster_path}" alt="img">
      <div class="movieInfo">
        <h2>${title}</h2>
        <p>Rating: ${vote_average}</p>
      </div>
      <div class="movieDesc">
        <h3>Description</h3>
          ${overview}
      </div>`;
    DOMselectors.parent.appendChild(create);
  });
}

// function createImage(pic) {
//   document.getElementById("parent").insertAdjacentHTML(
//     "beforeend",
//     `<div class = "justT"><div class="tarot-front">
//         <img class="img" src="${pic.image}">
//         </div></div>`
//   );
// }
// image.forEach(createImage);
