let objetoId = new URLSearchParams(location.search);
let id =  objetoId.get('id');
let cover = document.querySelector('.fotoalbum')
let tituloHead = document.querySelector('title')
let titulo = document.querySelector('h1')
let artista = document.getElementById('artista')
let album = document.getElementById('album')
let player = document.getElementById('player')

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`)
.then(respuesta =>{
    return respuesta.json()
})
.then(dataCancion =>{
    cover.innerHTML = `<img src="${dataCancion.album.cover_big}" alt="Album ${dataCancion.album.title}"></img>`
    tituloHead.innerHTML = dataCancion.title
    titulo.innerHTML = dataCancion.title
    artista.innerHTML = `<a href="detailArtista.html?id=${dataCancion.artist.id}">${dataCancion.artist.name}</a>`
    album.innerHTML = `<a href="detailAlbum.html?${dataCancion.album.id}">${dataCancion.album.title}</a>`
    player.innerHTML = `</li><iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${dataCancion.id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`
})
.catch(error => console.log(error))

//Agregar cancion a favoritos
let agregarSacar = document.getElementById('agregarSacar')
let cancionesFavoritas = []

let traerCancionesFavoritas = localStorage.getItem('cancionesFavoritas')
let traerCancionesAlbum = localStorage.getItem('cancionesFavAlbum')//me trae el id del album
console.log(cancionesFavoritas);

if(traerCancionesFavoritas != null){
    cancionesFavoritas = JSON.parse(traerCancionesFavoritas)
}

if(cancionesFavoritas.includes(id)){
    agregarSacar.innerHTML = 'Eliminar de mi playlist'
}

agregarSacar.addEventListener('click',function(e){
    e.preventDefault()

    if(cancionesFavoritas.includes(id)){
        let cancionesFavPosicion = cancionesFavoritas.indexOf(id);
        cancionesFavoritas.splice(cancionesFavPosicion, 1);
        agregarSacar.innerHTML = 'Agregar a mi playlist'
    } else {
        cancionesFavoritas.push(id)
        agregarSacar.innerHTML = 'Eliminar de mi playlist'
    }

    let cancionFavString = JSON.stringify(cancionesFavoritas)
    localStorage.setItem('cancionesFavoritas', cancionFavString)
    console.log(localStorage);
})