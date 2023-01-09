const tarot = "https://tarot-api.onrender.com/api/v1/cards/ar01";

async function getData(tarot) {
  try {
    const response = await fetch(tarot);
    const data = await response.json();
    document.getElementById("body").textContent = data.card.desc;
    console.log(data.card.desc);
  } catch (error) {}
}

getData(tarot);
