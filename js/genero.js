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

let columna2 = document.querySelector('.columna2')


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre`)
.then(respuesta =>{
    return respuesta.json();
})
.then(datagenero =>{
    console.log(datagenero);
    for( i=1 ; i<7; i++){ 
        columna2.innerHTML += `<article class = "fotogenero" ><a href="detailGenero.html?id=${datagenero.data[i].id }" <h3 class="h3"> ${datagenero.data[i].name}  </h3> <img src = "${datagenero.data[i].picture}" </article>`
    }

})

.catch(error => console.log(error))
    

