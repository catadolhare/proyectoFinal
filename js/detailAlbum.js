let objetoId = new URLSearchParams(location.search);
let id =  objetoId.get('id');
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
.then(respuesta =>{
    return respuesta.json()
})
.then(dataAlbum =>{
    //console.log(dataAlbum);
    cover.innerHTML = `<img src="${dataAlbum.cover_big}" alt="Album ${dataAlbum.title}"></img>`
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
.catch(error => console.log(error))

//Agregar album a favoritos
/*let agregarSacar = document.getElementById('agregarSacar')
let cancionesFavAlbum = []

let traerCancionesAlbum = localStorage.getItem('cancionesFavAlbum')
console.log(traerCancionesAlbum);

if(traerCancionesAlbum != null){
    cancionesFavAlbum = JSON.parse(traerCancionesAlbum)
}

if(cancionesFavAlbum.includes(id)){
    agregarSacar.innerHTML = 'Eliminar de mi playlist'
}

agregarSacar.addEventListener('click', function(e){
    e.preventDefault();

    if(cancionesFavAlbum.includes(id)){
        let cancionAlbumPosicion = cancionesFavAlbum.indexOf(id);
        cancionesFavAlbum.splice(cancionAlbumPosicion, 1);
        agregarSacar.innerHTML = 'Agregar a mi playlist'
    } else {
        cancionesFavAlbum.push(id);
        agregarSacar.innerHTML = 'Eliminar de mi playlist'
    }

    let cancionAlbumString = JSON.stringify(cancionesFavAlbum);
    localStorage.setItem('cancionesFavAlbum', cancionAlbumString)
    console.log(localStorage);
})*/