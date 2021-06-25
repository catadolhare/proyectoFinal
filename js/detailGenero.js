//Buscador
let form = document.querySelector('form')
let buscar = document.querySelector('[name=buscar]')
let formFooter = document.querySelector('#formFooter')
let buscarFooter = document.querySelector('#inputFooter')

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(buscar.value === ''){
        alert('El buscador no puede estar vacio')
    } else if(buscar.value.length < 3) {
        alert('El termino buscado debe tener al menos 3 caracteres')
    } else {
        form.submit();
    }
})
formFooter.addEventListener('submit', function(e){
    e.preventDefault();
    if(buscarFooter.value === ''){
        alert('El buscador no puede estar vacio')
    } else if(buscarFooter.value.length < 3) {
        alert('El termino buscado debe tener al menos 3 caracteres')
    } else {
        formFooter.submit();
    }
})

// Detalle Genero 
let objetoId = new URLSearchParams(location.search);  
let id =  objetoId.get('id'); 
let favoritos = document.querySelector('.favoritos') 
let titulo = document.querySelector('.pop')



fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`) 
.then(respuesta => { // hice la estructura de fetch que empieza con una promesa que es then. declaro la funcion es un bloque de código reutilizable que realiza una tarea especifica y retorna un valor. 
    return respuesta.json();  // me retorna una respues
 })
 .then(datatitulogenero=>{
    //console.log(datatitulogenero);
    titulo.innerHTML = 
   ` <article class="derecha">
    <h2 class="titulopop">${datatitulogenero.name}</h2> 
     </article>
     <article class="izquierda">
     <img src="${datatitulogenero.picture_big} " alt="pop" class="fotopop" 
     </article> `
  })
  .catch(error => console.log(error))

    
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists/`)

.then(respuesta =>{
    return respuesta.json();
})
.then(datageneroartista =>{
    //console.log(datageneroartista);
    for(i=0 ; i< 9 ; i++){
        favoritos.innerHTML += `<article class ="fav"><a href="detailArtista.html?id=${datageneroartista.data[i].id}" <h3 class="fav:hover"> ${datageneroartista.data[i].name}  </h3> <img src = "${datageneroartista.data[i].picture}"  </article>`
    }
    })


.catch(error => console.log(error))





