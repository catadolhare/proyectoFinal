//Header
let buscador = document.querySelector('.formulario')

//Body
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
.then(respuesta =>{
    return respuesta.json()
})
.then(dataCanciones =>{
    console.log(dataCanciones);
})
.catch(error => console.log(error))
