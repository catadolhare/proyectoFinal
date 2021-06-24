let objetoId = new URLSearchParams(location.search);
let id =  objetoId.get('id');
let segundafila = document.querySelector('.segundafila')
console.log(id);




fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/top`)

.then(respuesta => {
    return respuesta.json()
})

.then(topcinco => {
    
    //console.log(topcinco.data);
    //console.log(topcinco.data +'------');
   for( let i=0 ; i<6; i++){ 
    segundafila.innerHTML += `<article class="topcinco">
        <a href="detailCancion.html?id=${topcinco.data[i].id}">
            <img src="${topcinco.data[i].picture}" alt="${topcinco.data[i].name}" class="imagencancion">
            <ul class="informacion">
                <li><h3>${topcinco.data[i].name}h3></li>
            </ul>
        </a>
    </article>`
    }
  
})