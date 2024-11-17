const { Router } = require("express");
const moviesController = require("../controllers/moviesController");
const { validateMovieData } = require("../middlewares/index");

const moviesRouter = Router();

moviesRouter.get("/", moviesController.getAllmovies);

moviesRouter.post("/", validateMovieData, moviesController.postMovie);

module.exports = moviesRouter;