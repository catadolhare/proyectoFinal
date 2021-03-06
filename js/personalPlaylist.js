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

let cancionesFavoritas = localStorage.getItem('favoritas') //Bajamos la informacion del localStorage
let arrayCancionesFav = JSON.parse(cancionesFavoritas)  //Lo convertimos en un array (informacion esta en string)
console.log(arrayCancionesFav);
    
let listaCanciones = document.querySelector('.playlist')
let play = document.querySelector('.play')
let vacio = document.getElementById('vacio')
let eliminarTodo = document.querySelector('.eliminar')
console.log(eliminarTodo)

console.log(arrayCancionesFav)
if(arrayCancionesFav === null){ //Si el array esta vacio, no se mostrara el boton de play ni de eliminar
    play.style.display = 'none'
    eliminarTodo.style.display = 'none'
} else {
    vacio.style.display = 'none' //Si no, no se muestra el article con class vacio y se recorre el array con los ids de las canciones favoritas
    
    for(let i=0; i<arrayCancionesFav.length; i++){
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${arrayCancionesFav[i]}`)
        .then(function(respuesta){
            return respuesta.json()
        })
        .then(function(dataCancion){
            // console.log(dataCancion);
            listaCanciones.innerHTML += `
            <article class="favorito">
                <img src="${dataCancion.album.cover_big}" alt="Album ${dataCancion.album.title}">
                <ul class="elegido">
                    <li><a href="detailCancion.html?id=${dataCancion.id}"><h4>${dataCancion.title}</h4></a></li>
                    <li><a href="detailAlbum.html?id=${dataCancion.album.id}">${dataCancion.album.title}</a> | <a href="detailArtista.html?id=${dataCancion.artist.id}">${dataCancion.artist.name}</a></li>
                    <li><a class="borrarCancion" href="#" ><i class="far fa-trash-alt"></i></a></li>
                </ul>
            </article>`

        })
        .catch(function(error){
            console.log(error)
        })
    }
    
    eliminarTodo.addEventListener('click', borrar())
    let borrar = function(){
        localStorage.removeItem('favoritas')
        location.href='personalPlaylist.html'
    }
        
    let borrarCancion = document.querySelectorAll('.borrarCancion')
    //console.log(borrarCancion);
        
    borrarCancion.addEventListener('click',function(e){
        e.preventDefault()
        let cancionPosicion = arrayCancionesFav.indexOf();
        arrayCancionFav.splice(cancionPosicion, 1) 
    })
}