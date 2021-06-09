let seccionAlbum = document.getElementById('seccionAlbum')
let seccionArtista = document.getElementById('seccionArtista')
let seccionCancion = document.getElementById('seccionCancion')
let recomArtista = document.getElementById('recomArtista')
let recomAlbum = document.getElementById('recomAlbum')
let recomCancion = document.getElementById('recomCancion')

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
        console.log(dataCharts.albums.data[i].id);
        seccionAlbum.innerHTML = `<article class="eleccion">
        <a href="detailAlbum.html?id=${dataCharts.albums.data[i].id}"><img src="${dataCharts.albums.data[i].cover_big}" alt="Album ${dataCharts.albums.data[i].title}"><ul class="info"><li><h2>${dataCharts.albums.data[i].title}</h2></li><li><p>${dataCharts.albums.data[i].artist.name}</p></li></ul></a></article>`
    }
    //Artista
    for(let i=0; i<5; i++){
        console.log(dataCharts.artists.data[i].name);
        console.log(dataCharts.artists.data[i].picture_big);
        console.log(dataCharts.artists.data[i].id);
        seccionArtista.innerHTML = `<article class="eleccion"><a href="detailArtista.html?id=${dataCharts.artists.data[i].id}"><img src="${dataCharts.artists.data[i].picture_big}" alt="${dataCharts.artists.data[i].name}"><h2>${dataCharts.artists.data[i].name}</h2></a></article>`
    }
    //Canciones
    for(let i=0; i<5; i++){
        console.log(dataCharts.tracks.data[i].title);
        console.log(dataCharts.tracks.data[i].artist.name);
        console.log(dataCharts.tracks.data[i].artist.picture_big);
        console.log(dataCharts.tracks.data[i].id);
        seccionCancion.innerHTML = `<article class="eleccion"><a href="detailCancion.html?id=${dataCharts.tracks.data[i].id}"><img src="${dataCharts.tracks.data[i].picture_big}" alt="${dataCharts.tracks.data[i].title}"><ul class="info"><li><h2>${dataCharts.tracks.data[i].title}</h2></li><li><p>${dataCharts.tracks.data[i].artist.name}</p></li></ul></a></article>`
    }
    //Recomendaciones Artista
    for(let i=0; i<3; i++){
        recomArtista.innerHTML = `<article class="rec"><a href="detailArtista.html?id=${dataCharts.artists.data[i].id}"><img src="${dataCharts.artists.data[i].picture_big}" alt="${dataCharts.artists.data[i].name}"><h3>${dataCharts.artists.data[i].name}</h3></a></article>`
    }
    //Recomendaciones Albumes
    for(let i=0; i<3; i++){
        recomAlbum.innerHTML = `<article class="rec"><a href="detailAlbum.html?id=${dataCharts.albums.data[i].id}"><img src="${dataCharts.albums.data[i].cover_big}" alt="${dataCharts.albums.data[i].title}"><h3>${dataCharts.albums.data[i].title}</h3></a></article>`
    }
    //Recomendaciones Cancion
    for(let i=0; i<3; i++){
        recomCancion.innerHTML = `<article class="rec"><a href="detailCancion.html?id=${dataCharts.tracks.data[i].id}"><img src="${dataCharts.tracks.data[i].artist.picture_big}" alt="${dataCharts.tracks.data[i].artist.name}"><h3>${dataCharts.tracks.data[i].title}</h3></a></article>`
    }
})
.catch(error => console.log(error))