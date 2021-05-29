//Header

//Body
let seccionAlbum = document.getElementById('seccionAlbum')
let seccionArtista = document.getElementById('seccionArtista')
let seccionCancion = document.getElementById('seccionCancion')
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
.then(respuesta =>{
    return respuesta.json()
})
.then(dataCharts =>{
    //console.log(dataCanciones);
    //Albumes
    for(let i=0; i<5; i++){
        console.log(dataCharts.albums.data[i].title);
        console.log(dataCharts.albums.data[i].cover_big);
        console.log(dataCharts.albums.data[i].artist.name);
        seccionAlbum.innerHTML = `<article class="eleccion">
        <a href="detailAlbum.html"><img src="${dataCharts.albums.data[i].cover_big}" alt="Album ${dataCharts.albums.data[i].title}"><ul class="info"><li><h2>${dataCharts.albums.data[i].title}</h2></li><li><p>${dataCharts.albums.data[i].artist.name}</p></li></ul></a></article>`
    }
    //Artista
    for(let i=0; i<5; i++){
        console.log(dataCharts.artists.data[i].name);
        console.log(dataCharts.artists.data[i].picture_big);
        seccionArtista.innerHTML = `<article class="eleccion"><a href="detailArtista.html"><img src="${dataCharts.artists.data[i].picture_big}" alt="${dataCharts.artists.data[i].name}"><h2>${dataCharts.artists.data[i].name}</h2></a></article>`
    }
    //Canciones
    for(let i=0; i<5; i++){
        console.log(dataCharts.tracks.data[i].title);
        console.log(dataCharts.tracks.data[i].artist.name);
        console.log(dataCharts.tracks.data[i].artist.picture_big);
        seccionCancion.innerHTML = `<article class="eleccion"><a href="detailCancion.html"><img src="${dataCharts.tracks.data[i].picture_big}" alt="${dataCharts.tracks.data[i].title}"><ul class="info"><li><h2>${dataCharts.tracks.data[i].title}</h2></li><li><p>${dataCharts.tracks.data[i].artist.name}</p></li></ul></a></article>`

    }
})
.catch(error => console.log(error))