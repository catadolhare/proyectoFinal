let cancionAlbumFav = localStorage.getItem('cancionesFavAlbum')

let arrayFavAlbum = JSON.parse(cancionAlbumFav)
let listaCanciones = document.querySelector('.playlist')
let play = document.querySelector('.play')

if(arrayFavAlbum.length === 0){
    play.style.display = 'none'
    listaCanciones.innerHTML = `<h4>No tiene ninguna cancion en su playlist, empiece a agregar ahora!</h4>`
} else {
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
                </ul></article>`
            }
        })
        .catch(error => console.log(error))
    }
}