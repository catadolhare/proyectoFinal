let cancionAlbumFav = localStorage.getItem('cancionesFavAlbum')
let arrayFavAlbum = JSON.parse(cancionAlbumFav)

let cancionFav = localStorage.getItem('cancionesFavoritas')
let arrayCancionFav = JSON.parse(cancionFav)

let listaCanciones = document.querySelector('.playlist')
let play = document.querySelector('.play')
let vacio = document.getElementById('vacio')
let eliminarPlaylist = document.getElementById('eliminar')

if(arrayFavAlbum.length === 0 && arrayCancionFav.length === 0){
    play.style.display = 'none'
} else {
    vacio.style.display = 'none'
    for(let i=0; i<arrayFavAlbum.length; i++){
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${arrayFavAlbum[i]}`)
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(dataAlbum =>{
            for(let i=0; i<dataAlbum.tracks.data.length; i++){
                listaCanciones.innerHTML += `<article class="favorito"><img src="${dataAlbum.cover_big}" alt="Album ${dataAlbum.title}">
                <ul class="elegido">
                    <li><a href="detailCancion.html?id=${dataAlbum.tracks.data[i].id}"><h4>${dataAlbum.tracks.data[i].title}</h4></a></li>
                    <li><a href="detailAlbum.html?id=${dataAlbum.id}">${dataAlbum.title}</a> | <a href="detailArtista.html?id=${dataAlbum.artist.id}">${dataAlbum.artist.name}</a></li>
                    <li id="borrarAlbum"><a href="#"><i class="far fa-trash-alt"></i></a></li>
                </ul></article>` 
            }
        })
        .catch(error => console.log(error))
    }
    for(let i=0; i<arrayCancionFav.length; i++){
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${arrayCancionFav}`)
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(dataCancion =>{
            listaCanciones.innerHTML += `<article class="favorito"><img src="${dataCancion.album.cover_big}" alt="Album ${dataCancion.album.title}">
                <ul class="elegido">
                    <li><a href="detailCancion.html?id=${dataCancion.id}"><h4>${dataCancion.title}</h4></a></li>
                    <li><a href="detailAlbum.html?id=${dataCancion.album.id}">${dataCancion.album.title}</a> | <a href="detailArtista.html?id=${dataCancion.artist.id}">${dataCancion.artist.name}</a></li>
                    <li id="borrarAlbum"><a href="#"><i class="far fa-trash-alt"></i></a></li>
                </ul></article>`
        })
        .catch(error => console.log(error))
    }
}
/*let borrarAlbum = document.getElementById('borrarAlbum')
borrarAlbum.addEventListener('click', function(e){
    e.preventDefault();
    let cancionAlbumPosicion = arrayFavAlbum.tracks.data.indexOf(id);
    arrayFavAlbum.splice(cancionAlbumPosicion, 1);

})
console.log(localStorage);
eliminarPlaylist.addEventListener('click', function(e){
    e.preventDefault();
    localStorage.clear(cancionFavAlbum)
})*/