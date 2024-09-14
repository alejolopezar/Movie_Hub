// En este módulo van a estar las funciones que establece la LÓGICA DE NEGOCIO de cada una de las ...

// Para esa ruta GET /movies =>

    // Vamos a ir a la base de datos a pedir la información de las peliculas
    // Y responder al cliente con la información obtenida.

    const moviesController = (req, res) => {
        res.status(200).send("Estamos recibiendo una solicitud y próximamente estarán disponibles los datos de películas.");
    }

    module.exports = {
        moviesController,
    };