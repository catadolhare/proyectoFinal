let objetoId = new URLSearchParams(location.search); // ahi estoy atrapando el id del genero anterior
let id =  objetoId.get('id'); // para traerlo y que lo muestre pongo id 
let detallegenero = objetoId.get('genre');
let favoritos = document.querySelector('.favoritos')
let titulo = document.querySelector('.pop')



fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`)
.then(respuesta => {
    return respuesta.json();
 })
 .then(datatitulogenero=>{
    console.log(datatitulogenero);
    titulo.innerHTML += 
   ` <article class="derecha">
    <h2 class="titulopop">${datatitulogenero.name}</h2> 
     </article>
     <article class="izquierda">
     <img src="${datatitulogenero.picture_big} " alt="pop" class="fotopop" 
     </article> -->`
  })
  .catch(error => console.log(error))

    
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists/`)

.then(respuesta =>{
    return respuesta.json();
})
.then(datageneroartista =>{
    console.log(datageneroartista);
    for(i=0 ; i< 9 ; i++){
        favoritos.innerHTML += `<article class = "fav"><a href="detailArtista.html?id=${datageneroartista.data[i].id}" <h3 class="fav:hover"> ${datageneroartista.data[i].name}  </h3> > <img src = "${datageneroartista.data[i].picture}"  </article>`
    }
    })


.catch(error => console.log(error))

//favoritos.innerHTML += `<article class = "fav"><a href="detailArtista.html?id=${datageneroartista.data[0].id}" <h3 class="fav:hover"> ${datageneroartista.data[i].name}  </h3> > <img src = "${datageneroartista.data[i].picture}"  </article>`



