// Aquí vamos a definir las rutas a través de las cuales nos podemos comunicar

// Tengo definida la solicitud a GET /users => controlador

const { Router } = require("express");
const { moviesController } = require("../controllers");

const router = Router();

router.get("/movies", moviesController);

module.exports = router;