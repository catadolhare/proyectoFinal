let objetoId = new URLSearchParams(location.search);
let id =  objetoId.get('id');
let titulo = document.querySelector('h1')

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`)
.then(respuesta =>{
    return respuesta.json()
})
.then(dataAlbum =>{
    console.log(dataAlbum);
    //console.log(dataAlbum.title);
    //console.log(dataAlbum.artist.name);
    //console.log(dataAlbum.genres.data.name);
    //console.log(dataAlbum.release_date);
    //console.log(dataAlbum.tracks.data.title);
    //console.log(dataAlbum.duration);
})
.catch(error => console.log(error))