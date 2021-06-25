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

let objetoId = new URLSearchParams(location.search);
let id =  objetoId.get('id');

let tituloHead = document.querySelector('title')
let cover = document.getElementById('cover')
let titulo = document.querySelector('h1')
let artista = document.querySelector('h2')
let genero = document.querySelector('h3')
let publicacion = document.getElementById('publicacion')
let canciones = document.querySelector('.canciones')
let duracion = document.getElementById('duracion')
let player = document.getElementById('player')

console.log(localStorage);
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(dataAlbum){
    //console.log(dataAlbum);
    cover.innerHTML = `<img src="${dataAlbum.cover_big}" alt="Album ${dataAlbum.title}"></img>`
    tituloHead.innerHTML = `${dataAlbum.title}`
    titulo.innerHTML = `${dataAlbum.title}`
    artista.innerHTML = `<a href="detailArtista.html?id=${dataAlbum.artist.id}">${dataAlbum.artist.name}</a>`
    genero.innerHTML = `<a href="detailGenero.html?id=${dataAlbum.genres.data[0].id}">${dataAlbum.genres.data[0].name}</a>`
    publicacion.innerHTML += `${dataAlbum.release_date}`
    //console.log(dataAlbum.tracks.data.length);
    for(let i=0; i<dataAlbum.tracks.data.length; i++){
        canciones.innerHTML += `<li><a href="detailCancion.html?id=${dataAlbum.tracks.data[i].id}">${dataAlbum.tracks.data[i].title}</a></li>`
    }
    duracion.innerHTML += `${dataAlbum.duration} segundos`
    player.innerHTML = `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/album/${dataAlbum.id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`
})
.catch(function(error){
    console.log(error)
})