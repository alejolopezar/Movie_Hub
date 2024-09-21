// const movies = [
//     {
//         title: "Guardians of the Galaxy Vol. 2",
//         year: 2017,
//         director: "James Gunn",
//         duration: "2h 16min",
//         genre: ["Action", " Adventure", " Comedy"],
//         rate: 7.7,
//         poster:
//           "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
//       },
//       {
//         title: "Star Wars: Episode IV - A New Hope",
//         year: 1977,
//         director: "George Lucas",
//         duration: "2h 1min",
//         genre: ["Action", " Adventure", " Fantasy", " Sci-Fi"],
//         rate: 8.7,
//         poster:
//           "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
//       },
//       {
//         title: "The Lord of the Rings: The Fellowship of the Ring",
//         year: 2001,
//         director: "Peter Jackson",
//         duration: "2h 58min",
//         genre: ["Action", " Adventure", " Drama", " Fantasy"],
//         rate: 8.8,
//         poster:
//           "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
//       },
//       {
//         title: "The Hobbit: An Unexpected Journey",
//         year: 2012,
//         director: "Peter Jackson",
//         duration: "2h 49min",
//         genre: ["Action", " Adventure", " Drama", " Fantasy"],
//         rate: 7.8,
//         poster:
//           "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/88/91/08/20306579.jpg",
//       },
//       {
//         title: "Interstellar",
//         year: 2014,
//         director: "Christopher Nolan",
//         duration: "2h 58min",
//         genre: ["Sci-Fi Epic", " Adventure", " Drama", " Quest"],
//         rate: 8.7,
//         poster:
//           "https://mx.web.img3.acsta.net/c_310_420/pictures/19/01/28/01/13/3672733.png",
//       },
//       {
//         title: "The Matrix",
//         year: 1999,
//         director: "Lana Wachowski & Lilly Wachowski",
//         duration: "2h 16min",
//         genre: ["Sci-Fi Epic", " Artificial Intelligence", " Action Epic", " Cyberpunk"],
//         rate: 8.7,
//         poster:
//           "https://th.bing.com/th/id/OIP.gjF_px0_PyPzmI2fButiWAHaLH?rs=1&pid=ImgDetMain",
//       },
//     ];

// module.exports = {
//     getAllmovies: async () => {
//         return movies;
//     },

// };

class Movie {
  constructor(title, year, director, duration, genre, rate, poster){

    if (!title) {
      throw new Error("El título es inadecuado");
    }
    if (!director) {
      throw new Error("El director es inadecuado");
    }
    if (!poster) {
      throw new Error("El poster es inadecuado");
    }
    
    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  }
}

const movie1 = new Movie("Guardians of the Galaxy Vol. 2",
          2017,
          "James Gunn",
          "2h 16min",
          ["Action", " Adventure", " Comedy"],
          7.7,
          "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
        );

const movie2 = new Movie("Star Wars: Episode IV - A New Hope",
          1977,
          "George Lucas",
          "2h 1min",
          ["Action", " Adventure", " Fantasy", " Sci-Fi"],
          8.7,
          "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
);

const movie3 = new Movie("The Lord of the Rings: The Fellowship of the Ring",
        2001,
        "Peter Jackson",
        "2h 58min",
        ["Action", " Adventure", " Drama", " Fantasy"],
        8.8,
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
);

const movie4 = new Movie("The Hobbit: An Unexpected Journey",
        2012,
        "Peter Jackson",
        "2h 49min",
        ["Action", " Adventure", " Drama", " Fantasy"],
        7.8,
        "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/88/91/08/20306579.jpg"
);

const movie5 = new Movie("Interstellar",
        2014,
        "Christopher Nolan",
        "2h 58min",
        ["Sci-Fi Epic", " Adventure", " Drama", " Quest"],
        8.7,
        "https://mx.web.img3.acsta.net/c_310_420/pictures/19/01/28/01/13/3672733.png"
);
                
const movie6 = new Movie("The Matrix",
        1999,
        "Lana Wachowski & Lilly Wachowski",
        "2h 16min",
        ["Sci-Fi Epic", " Artificial Intelligence", " Action Epic", " Cyberpunk"],
        8.7,
        "https://th.bing.com/th/id/OIP.gjF_px0_PyPzmI2fButiWAHaLH?rs=1&pid=ImgDetMain"
);
        
module.exports = {
  getAllmovies: async () => {
  return [movie1, movie2, movie3, movie4, movie5, movie6];
    },

};
