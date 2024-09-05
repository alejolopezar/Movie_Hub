// Se hace la solicitud GET. Esta solicitud es asincrona
$.get("https://students-api.up.railway.app/movies")
.done((data) => {
    //"Mapear" el listado de peliculas para convertirlos en elementos HTML
    const arrayTarjetas = data.map(crearTarjeta);  
    
    //"Appendear" todos los elementos HTML del nuevo array dentro del contenedor
    arrayTarjetas.forEach(tarjeta => contenedor_tarjetas.appendChild(tarjeta));
})

.fail(() => {
    alert("La información del servidor no se cargo, se utilizara información de tempData");
    //"Mapear" el listado de peliculas para convertirlos en elementos HTML
    const arrayTarjetas = tempData.map(crearTarjeta);  
    
    //"Appendear" todos los elementos HTML del nuevo array dentro del contenedor
    arrayTarjetas.forEach(tarjeta => contenedor_tarjetas.appendChild(tarjeta));
});
    
    //crear una funcion que reciva como parametro un  objeto de tempData
function crearTarjeta (pelicula){

    //extraer sus propiedades en variables utilizando destructuring
    const {title, year, director, duration, genre, rate, poster} = pelicula;
  
    //crear los elementos HTML que formaran parte de la tarjeta
    const img = document.createElement("img");
    const a = document.createElement("a");
    const h3 = document.createElement("h3");
    const p_year = document.createElement("p");
    const p_director = document.createElement("p");
    const p_duration = document.createElement("p");
    const p_rate = document.createElement("p");
    const p_genre = document.createElement("p");
  
    //asignar los valores a las propiedades correspondientes a cada uno de los elementos
    img.src = poster;
    img.alt = title;
    h3.textContent = title;
    p_year.textContent = "Year: "+year;
    p_director.textContent = "Director: "+director;
    p_duration.textContent = "Duration: "+duration;
    p_rate.textContent = "Rate: "+rate;
    p_genre.textContent = "Genre: "+genre;
  
    //agregar los elementos a las clases CSS correspondientes que hayas implementado para darles estilos
    
    //crear un <div> que sera la tarjeta donde incluiremos todo los demas elementos
    const div = document.createElement("div");
  
    //"Appendear" al nuevo <div> los elementos creados
    a.appendChild(h3);
    div.appendChild(a);
    div.appendChild(img);
    div.appendChild(p_year);
    div.appendChild(p_director);
    div.appendChild(p_duration);
    div.appendChild(p_rate);
    div.appendChild(p_genre);
    
    //asignar al <div> la clase css que tengas implementada para dale estilos
    div.classList.add("pelicula_tarjeta");
    
    //Retorna <div> finalizado con todos los elementos correspondientes dentro
    return div;
}  

// seleccionar el contenedor donde queremos agregar las peliculas
const contenedor_tarjetas = document.getElementById ("contenedor_tarjetas");
  
// vaciar el contenido actual del contenedor
contenedor_tarjetas.innerHTML = "";
  
