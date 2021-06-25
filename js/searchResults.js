//Buscador
let form = document.querySelector('form')
let buscarform = document.querySelector('[name=buscar]')
let formFooter = document.querySelector('#formFooter')
let buscarFooter = document.querySelector('#inputFooter')

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(buscarForm.value === ''){
        alert('El buscador no puede estar vacio')
    } else if(buscarForm.value.length < 3) {
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

let busqueda = new URLSearchParams(location.search) 
let buscar = busqueda.get('buscar')
 console.log(buscar);
let resultados = document.querySelector('.resultados')
let contenido = ''
let titulo = document.querySelector('.titulob')

titulo.innerHTML += buscar





fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${buscar}`)
.then(respuesta =>{
   return respuesta.json()
})
.then(dataBusqueda =>{ 
 console.log(dataBusqueda);
   for(let i=0; i < dataBusqueda.data.length; i++){
       contenido += `<article class="contenido2">
                        <p class="Resultados"><a href="detailCancion.html?id=${dataBusqueda.data[i].id}"> ${dataBusqueda.data[i].title} </a></p>
                    </article>`
   }
   resultados.innerHTML += contenido
   if(dataBusqueda.data.length == 0){
      alert('La busqueda no trajo resultados')
   }
   
})
.catch(error =>{
   console.log(error);
})