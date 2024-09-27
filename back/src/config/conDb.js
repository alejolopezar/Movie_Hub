require("dotenv").config();

const mongoose = require("mongoose");
// En este módulo hacer la conexión a la base de datos en una FUNCIÓN


// Exportar esta función


const conDb = async () => {
    // Acá hacemos la conexión a la BDD con la URL que nos da MongoDB
    // URL 
    mongoose.connect(process.env.MONGO_URI);
};

module.exports = conDb;

