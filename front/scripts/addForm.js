const axios = require("axios");

const form = () => {

    const resetForm = () => {
        const form = document.querySelector("#form");
        form.reset();
        console.log("formulario limpio");
    };

    const formSubmit = (evento) => {
        evento.preventDefault();
        console.log("formulario enviado");
        

        
    
        const newMovie = {
            title: document.querySelector("#titleInput").value.trim(),
            year: document.querySelector("#yearInput").value.trim(),
            director: document.querySelector("#directorInput").value.trim(),
            duration: document.querySelector("#durationInput").value.trim(),
            genre: document.querySelector("#genreInput").value.trim(),
            rate: document.querySelector("#rateInput").value.trim(),
            poster: document.querySelector("#posterInput").value.trim()
        };
    console.log(newMovie);
        axios.post("http://localhost:3000/movies", newMovie)
    
    };

    const buttonSubmit = document.querySelector("#buttonSubmit");
    buttonSubmit.addEventListener("click", formSubmit);

    const resetButton = document.querySelector("#resetButton");
    resetButton.addEventListener("click", resetForm);

}

module.exports = {
    form
};