let objetoId = new URLSearchParams(location.search);
let id =  objetoId.get('id');
let segundafila = document.querySelector('.segundafila')
let section = document.querySelector('.section')
let imagendeartista = document.querySelector('.imagendeartista')
let nombredeartista = document.querySelector('.fila1')
let fila2= document.querySelector('.fila2')
let fila3 = document.querySelector('.fila3')
let fila4 = document.querySelector('.fila4')
//console.log(fila4);
console.log(id);

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/top?limit=50`)
.then(respuesta => {
    return respuesta.json()
})
.then(playartist=>{
console.log(playartist);
for(let i=0 ; i<1; i++){
    fila2.innerHTML +=  `<article class="article1"> 
    <h2 class="F"> <a href="${playartist.data[0].preview}"}"><h6 class="F">PLAY ARTIST<h6></a></h2>
 </article>
 <article class="article2">
     <h5> Listeners</h5>
     <h4>18.7k</h4>
 </article>
  <article class="article3">
      <h5>scrobbles</h5>
      <h4>580M</h4>
  </article>`
}
})



//NOMBRE DEL ARTISTA  Y FOTO, terminado. SI anda
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`)
.then(respuesta => {
    return respuesta.json()
})
.then(detalleartista => {
    console.log(detalleartista);
    imagendeartista.innerHTML += `<img class="fotoart" src="${detalleartista.picture_big}" alt=""></img>`
    nombredeartista.innerHTML += `<article class="nombre">  <h1>${detalleartista.name}</h1></article>`

})
.catch(error => console.log(error))

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/top`)
.then(respuesta => {
    return respuesta.json()
})
.then(cancionartista => {
    for(let i=0 ; i<1 ; i++){
        fila3.innerHTML  += ` <article class="article4">
        <iframe width="200" height="140" src="https://www.deezer.com/track/${cancionartista.data[0].link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </article>
       <article class="article5">
        <h5> Popular esta semana</h5>
        <a href="detailCancion.html?id=${cancionartista.data[0].id}"><h4 class="F">${cancionartista.data[0].title}</h4></a>
        <h5> ${cancionartista.data[0].rank} Listeners</h5>
       </article>`
    }
    console.log(cancionartista); // Me devuelve bien los datos 
    
   } )
.catch(error => console.log(error))






fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`)
.then(respuesta => {
    return respuesta.json()
})
.then(albumartista => {
    for(let i=0; i<1 ; i++) {
        fila4.innerHTML += ` <figure class="albumH"> <img class="fotoalbumH" src="${albumartista.data[0].cover}" alt="fineline" class="imagendeharry"></figure> 
    <article class="article7"><h5> Ultimo lanzamiento</h5> <h3>${albumartista.data[0].title}</h3><a href="detailAlbum.html?id=${albumartista.data[0].id}"><h6 class="F">VER ALBUM<h6></a></article>`
    }
    console.log(albumartista);  
    
   } )
.catch(error => console.log(error))


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/top`)

.then(respuesta => {
    return respuesta.json()
})

.then(topcinco => {
    
    //console.log(topcinco.data);
    //console.log(topcinco.data +'------');
   for( let i=0 ; i<7; i++){ 
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