const movieServices = require("../services/movieServices");

module.exports = {
    getAllmovies: async (req, res) => {
        const movies = await movieServices.getAllmovies();
        res.status(200).json(movies);
    },

    postMovie: async (req, res) => {
        const { title, year, director, duration, genre, rate, poster } = req.body;
        const newMovie = await movieServices.createMovie({title, year, director, duration, genre, rate, poster});
        res.status(201).json(newMovie);
        
    },
};

// talves debo de modificar esta parte para implementar un try/catch para
// darle manejo a los errores