const validateMovieData = (req, res, next) => {
    const {title, year, director, duration, genre, rate, poster } = req.body
    if(!title || !year || !director || !duration || !genre || !rate || !poster){
        res.status(400).json({
            message: "Falta informacion para poder crear la movie",
        })
    } else {
        next();
    }
}

const logSoliInfo = (req, res, next) => {

    console.log(req.method, req.path)
    next()
}

module.exports = {
    validateMovieData,
    logSoliInfo
};

