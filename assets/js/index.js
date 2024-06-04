const url = "https://api.imgflip.com/get_memes";

async function procesarPromesa(url, targetId) { // Pass targetId as an argument
  try {
    const response = await fetch(url);
    const data = await response.json();

    const filteredMemes = data.data.memes.filter(meme => meme.id !== targetId); // Filter memes excluding targetId

    return filteredMemes;
  } catch (error) {
    console.error("Error: ", error);
    return [];
  }
}

const container = document.getElementById('container');

// Specify the target ID you want to stop before
const targetId = 87743020;

procesarPromesa(url, targetId) // Pass targetId during function call
  .then((data) => {
    data.forEach((elemento) => {
      container.innerHTML += `
        <div class="card">
            <img src="${elemento.url}" alt="${elemento.name}">
            <h1>nombre: ${elemento.name}</h1>
        </div>
      `;
    });
  });