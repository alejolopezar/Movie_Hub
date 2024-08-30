const tempData = [
  {
    title: "Guardians of the Galaxy Vol. 2",
    year: 2017,
    director: "James Gunn",
    duration: "2h 16min",
    genre: ["Action", " Adventure", " Comedy"],
    rate: 7.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
  },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    director: "George Lucas",
    duration: "2h 1min",
    genre: ["Action", " Adventure", " Fantasy", " Sci-Fi"],
    rate: 8.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    director: "Peter Jackson",
    duration: "2h 58min",
    genre: ["Action", " Adventure", " Drama", " Fantasy"],
    rate: 8.8,
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    title: "The Hobbit: An Unexpected Journey",
    year: 2012,
    director: "Peter Jackson",
    duration: "2h 49min",
    genre: ["Action", " Adventure", " Drama", " Fantasy"],
    rate: 7.8,
    poster:
      "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/88/91/08/20306579.jpg",
  },
  {
    title: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    duration: "2h 58min",
    genre: ["Sci-Fi Epic", " Adventure", " Drama", " Quest"],
    rate: 8.7,
    poster:
      "https://mx.web.img3.acsta.net/c_310_420/pictures/19/01/28/01/13/3672733.png",
  },
  {
    title: "The Matrix",
    year: 1999,
    director: "Lana Wachowski & Lilly Wachowski",
    duration: "2h 16min",
    genre: ["Sci-Fi Epic", " Artificial Intelligence", " Action Epic", " Cyberpunk"],
    rate: 8.7,
    poster:
      "https://th.bing.com/th/id/OIP.gjF_px0_PyPzmI2fButiWAHaLH?rs=1&pid=ImgDetMain",
  },
];

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

  //"Mapear" el listado de actividades para convertirlos en elementos HTML
  const arrayTarjetas = tempData.map(crearTarjeta);

  //"Appendear" todos los elementos HTML del nuevo array dentro del contenedor
  arrayTarjetas.forEach(tarjeta => contenedor_tarjetas.appendChild(tarjeta));
