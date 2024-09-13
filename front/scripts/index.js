//se importa el modulo de renderCards y tempData
const { contenedor_tarjetas, crearTarjeta } = require("./renderCards");
const { tempData } = require("./tempData");

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