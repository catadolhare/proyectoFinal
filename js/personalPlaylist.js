let cancionesFavoritas = localStorage.getItem('favoritas')
let arrayCancionesFav = JSON.parse(cancionesFavoritas) 
console.log(arrayCancionesFav);

let listaCanciones = document.querySelector('.playlist')
let play = document.querySelector('.play')
let vacio = document.getElementById('vacio')
let eliminarPlaylist = document.querySelector('#borrarPlaylist')

console.log(eliminarPlaylist)
eliminarPlaylist.addEventListener('click', () => {
   // e.preventDefault();
    console.log('hola');
    //localStorage.removeItem('favoritas')
})

if(arrayCancionesFav.length === 0){
    play.style.display = 'none'
} else {
    vacio.style.display = 'none'

    for(let i=0; i<arrayCancionesFav.length; i++){
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${arrayCancionesFav[i]}`)
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(dataCancion =>{
            console.log(dataCancion);
            listaCanciones.innerHTML += `
            <article class="favorito">
                <img src="${dataCancion.album.cover_big}" alt="Album ${dataCancion.album.title}">
                <ul class="elegido">
                    <li><a href="detailCancion.html?id=${dataCancion.id}"><h4>${dataCancion.title}</h4></a></li>
                    <li><a href="detailAlbum.html?id=${dataCancion.album.id}">${dataCancion.album.title}</a> | <a href="detailArtista.html?id=${dataCancion.artist.id}">${dataCancion.artist.name}</a></li>
                    <li><a class="borrarCancion" href="#" ><i class="far fa-trash-alt"></i></a></li>
                </ul>
            </article>`

            //let cancionPosicion = arrayCancionesFav.indexOf([i])
            //console.log(cancionPosicion);
        })
        .catch(error => {console.log(error)})
    }

    
    

    //let borrarCancion = document.querySelectorAll('.borrarCancion')
    //console.log(borrarCancion);
    
    //borrarCancion.addEventListener('click',function(e){
       // e.preventDefault()
        
   // })
}






//onclick="borrarCancion(${dataCancion.id})"

//borrarCancion.addEventListener('click', function(e){

//function borrarCancion(id){
    //console.log(id);
    //let cancionPosicion = arrayCancionesFav.indexOf('1370066842');
    //console.log(cancionPosicion);
    //arrayCancionFav.splice(cancionPosicion, 1) 
//}   



/*console.log(localStorage);
*/