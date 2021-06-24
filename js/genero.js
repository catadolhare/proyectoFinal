
let columna2 = document.querySelector('.columna2')








fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre`)
.then(respuesta =>{
    return respuesta.json();
})
.then(datagenero =>{
    console.log(datagenero);
    for( i=1 ; i<7; i++){ //pongo igual a 1 porque la primera imagen dice "todos"
        columna2.innerHTML += `<article class = "fotogenero" ><a href="detailGenero.html?id=${datagenero.data[i].id }" <h3 class="h3"> ${datagenero.data[i].name}  </h3> <img src = "${datagenero.data[i].picture}"  </article>`
  // le estoy pasando por la a un id
    }

})

   
    
    


.catch(error => console.log(error))
    

