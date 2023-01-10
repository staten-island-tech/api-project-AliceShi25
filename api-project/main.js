const tarotM = "tarot-api.onrender.com/";
const tarot = "https://tarot-api.onrender.com/api/v1/cards";

async function getData(tarot) {
  try {
    const response = await fetch(tarot);
    if (response.status < 200 || response.status > 299) {
      throw Error(response.status);
    } else {
      const data = await response.json();
      document.getElementById("body").textContent = data.cards;
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
}
getData(tarot);

console.log(tarot);
