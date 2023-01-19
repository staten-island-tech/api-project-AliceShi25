// import { image } from "./tarot";
import "../styles/style.css";
import { DOMselectors } from "./variables";

const apiKey = "api_key=8f0696839a064ed5b45cadbe141ee377";
const URL = "https://api.themoviedb.org/3";
const pop_URL = URL + "/discover/movie?sort_by=popularity.desc&" + apiKey;
const img_URL = "https://image.tmdb.org/t/p/w500";
const search_URL = URL + "/search/movie?" + apiKey;

DOMselectors.theme.addEventListener("click", function () {
  if (document.body.classList.contains("theme2")) {
    document.body.classList.add("theme1");
    document.body.classList.remove("theme2");
  } else {
    document.body.classList.add("theme2");
    document.body.classList.remove("theme1");
  }
});

const show = {
  data: async function getData(pop_URL) {
    try {
      const response = await fetch(pop_URL);
      const data = await response.json();
      console.log(data);
      show.movie(data.results);
    } catch (error) {
      console.log(error);
    }
  },

  movie: function showMovies(data) {
    DOMselectors.parent.innerHTML = "";
    data.forEach((weewo) => {
      const { title, poster_path, vote_average, overview, release_date } =
        weewo;
      const create = document.createElement("div");
      create.classList.add("movie");
      create.innerHTML = `
      <img class ="img" src="${
        img_URL + poster_path
      }" alt="${title}, Release Date ${release_date}">
      <div class="movieInfo">
        <h2>${title}</h2>
        <h3>Rating: ${vote_average}</h3>
      </div>
      <div class="movieDesc">
        <h4>Description</h4>
          <p>${overview}</p>
      </div>`;
      DOMselectors.parent.appendChild(create);
    });
  },

  search: form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searching = DOMselectors.search.value;
    if (searching) {
      show.data(search_URL + "&query=" + searching);
    } else {
      show.data(pop_URL);
    }
    searching.value = "";
  }),
};

show.data(pop_URL);

// function createImage(pic) {
//   document.getElementById("parent").insertAdjacentHTML(
//     "beforeend",
//     `<div class = "justT"><div class="tarot-front">
//         <img class="img" src="${pic.image}">
//         </div></div>`
//   );
// }
// image.forEach(createImage);
