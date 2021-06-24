let objetoId = new URLSearchParams(location.search);
let id =  objetoId.get('id');
let segundafila = document.querySelector('.segundafila')
let section = document.querySelector('.section')
let imagendeartista = document.querySelector('.imagendeartista')
let nombredeartista = document.querySelector('.fila1')
let fila3 = document.querySelector('.fila3')
let fila4 = document.querySelector('.fila4')
//console.log(fila4);
console.log(id);

//NOMBRE DEL ARTISTA  Y FOTO, terminado. SI anda
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`)
.then(respuesta => {
    return respuesta.json()
})
.then(detalleartista => {
    console.log(detalleartista);
    imagendeartista.innerHTML += `<img src="${detalleartista.picture_big}" alt=""></img>`
    nombredeartista.innerHTML += `<article class="nombre">  <h1>${detalleartista.name}</h1></article>`

})
.catch(error => console.log(error))


// NOMBRE DE LA CANCION Y VIDEO DE LA CANCION, lo estoy terminado
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/top`)
.then(respuesta => {
    return respuesta.json()
})
.then(detallecancion => {
    console.log(detallecancion);
    fila3 += 

    
})
.catch(error => console.log(error))


// ALBUM DESTACADO DEL ARTISTA Y EL NOMBRE DEL ALBUM  , aca tengo el problema!
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`)
.then(respuesta => {
    return respuesta.json()
})
.then(albumartista => {
    console.log(albumartista); // Me devuelve bien los datos 
    fila4 += ` <figure class="albumH"> <img src="${albumartista.cover}" alt="fineline" class="imagendeharry"></figure> 
    <article class="article7"><h5> Ultimo lanzamiento</h5> <h4>${albumartista.title}</h4><a href="detailAlbum.html?id=${albumartista.id}"><h6 class="F">VER ALBUM<h6></a></article>`
    // no me aparece en el browser 
   } )
.catch(error => console.log(error))


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