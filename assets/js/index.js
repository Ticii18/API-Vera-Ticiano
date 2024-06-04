const url = "https://rickandmortyapi.com/api/character" // obtengo la api
 
// con este codigo pueedo contectarme con un .json (el codigo es reutilizable)
// siempre y cuando este deifiniendo una url anteriormente (procesarPromesa(url (constante con una url));)
const procesarPromesa = async (link) =>{
    try {    
        const respuesta = await fetch(link)
        const info = await respuesta.json()
        console.log(info);
        return info
    } catch (error) {
        console.log("hubo un error: " + error);
    }
}

const container = document.getElementById("container");

procesarPromesa(url)
    .then((info) =>{
        info.results.forEach((elemento) => {
            container.innerHTML += `
            <div class="card">
                <img src="${elemento.image}" alt="">
                <h2>${elemento.name}</h2>
                <p>${elemento.species}</p>
            </div>
            `
        })
    })