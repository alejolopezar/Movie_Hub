// Aquí vamos a definir las rutas a través de las cuales nos podemos comunicar

// Tengo definida la solicitud a GET /users => controlador

const { Router } = require("express");
const moviesRouter = require("./moviesRouter");

const router = Router();

router.use("/movies", moviesRouter);

module.exports = router;