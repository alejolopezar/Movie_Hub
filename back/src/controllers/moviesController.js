const movieServices = require("../services/movieServices");

module.exports = {
    getAllmovies: async (req, res) => {
        const movies = await movieServices.getAllmovies();
        res.status(200).json(movies);
    }
};