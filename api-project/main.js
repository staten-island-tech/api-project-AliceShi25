const URL = "https://tarot-api.onrender.com/";
const tarot = "https://tarot-api.onrender.com/api/v1/cards/wakn";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    document.getElementById("body").textContent = data.card.name;
    console.log(data);
  } catch (error) {}
}

getData(tarot);
