let busqueda = new URLSearchParams(location.search) /* CAPTURO New URLSearchParams me trae los datos de mejor manera - con location.search mandando a buscar lo que typeo el usuario- Aca tengo lo que el usuario typeo */
let buscar = busqueda.get('buscar')
 /* OBTENGO EL DATO Extraigo lo que el usuario typeo*/
 console.log(buscar);
let resultados = document.querySelector('.resultados')
let contenido = ''
let titulo = document.querySelector('.titulob')

titulo.innerHTML += buscar
//titulo.classList.add('tituloBusqueda')




fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${buscar}`)
.then(respuesta =>{
   return respuesta.json()
})
.then(dataBusqueda =>{ //en dataBusqueda estan los datos/
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