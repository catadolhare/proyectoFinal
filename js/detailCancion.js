let objetoId = new URLSearchParams(location.search);
let id =  objetoId.get('id');
let cover = document.querySelector('.fotoalbum')
let tituloHead = document.querySelector('title')
let titulo = document.querySelector('h1')
let artista = document.getElementById('artista')
let album = document.getElementById('album')

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
})