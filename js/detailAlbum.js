let objetoId = new URLSearchParams(location.search);
let id =  objetoId.get('id');
let cover = document.getElementById('cover')
let titulo = document.querySelector('h1')
let artista = document.querySelector('h2')
let genero = document.querySelector('h3')
let publicacion = document.getElementById('publicacion')
let canciones = document.querySelector('.canciones')
let duracion = document.getElementById('duracion')

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`)
.then(respuesta =>{
    return respuesta.json()
})
.then(dataAlbum =>{
    //console.log(dataAlbum);
    cover.innerHTML = `<img src="${dataAlbum.cover_big}" alt="Album ${dataAlbum.title}"></img>`
    titulo.innerHTML = `${dataAlbum.title}`
    artista.innerHTML = `<a href="detailArtista.html?id=${dataAlbum.artist.id}">${dataAlbum.artist.name}</a>`
    genero.innerHTML = `<a href="detailGenero.html?id=${dataAlbum.genres.data.id}">${dataAlbum.genres.data.id}</a>`
    publicacion.innerHTML += `${dataAlbum.release_date}`
    //console.log(dataAlbum.tracks.data.length);
    for(let i=0; i<dataAlbum.tracks.data.length; i++){
        canciones.innerHTML = `<li><a href="detailCancion.html?id=${dataAlbum.tracks.data[i].id}">${dataAlbum.tracks.data[i].title}</a></li>`
    }
    duracion.innerHTML += `${dataAlbum.duration} segundos`
})
.catch(error => console.log(error))