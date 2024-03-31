var listaPeliculasFavoritas = [];
var listaTrailersFavoritas = [];
var storage = localStorage;

function añadirPelícula() {
    var peliculaFavorita = document.getElementById('pelicula').value;
    var trailerPeliculasFavoritas = document.getElementById('trailer').value;

    if ((peliculaFavorita.endsWith('jpg')) || (peliculaFavorita.endsWith('jpeg'))) {
        document.getElementById('mensajeDeError').innerHTML = '';
        listaPeliculasFavoritas.push(peliculaFavorita);
        listaTrailersFavoritas.push(trailerPeliculasFavoritas);

        storageListas();
        limpiarCampos();
        recargarPeliculas();

    } else {
        document.getElementById('mensajeDeError').innerHTML = 'Dirección de imagen no válida, inténtalo de nuevo';
        limpiarCampos();
    }
}

function recargarPeliculas() {
    console.log(listaPeliculasFavoritas);
    var elementoListaPeliculas = document.getElementById('listaPeliculas');
    elementoListaPeliculas.innerHTML = '';
    for (i = 0; i < listaPeliculasFavoritas.length; i++) {
        elementoListaPeliculas.innerHTML += `<div class="contenedorImg"><a href=" ${listaTrailersFavoritas[i]} "><img src=" ${listaPeliculasFavoritas[i]} "></a></div>`;
    }
}

function limpiarCampos() {
    document.getElementById('pelicula').value = '';
    document.getElementById('trailer').value = '';
}

function storageListas() {
    storage.setItem('listaCaratula', JSON.stringify(listaPeliculasFavoritas));
    storage.setItem('listaTrailer', JSON.stringify(listaTrailersFavoritas));
}
const button = document.getElementById("button");
button.addEventListener("click", añadirPelícula);

// Carga Automatica de variables almacenadas en localStorage
document.addEventListener("DOMContentLoaded", () => {

    if (!(storage.getItem("listaCaratula")) && !(storage.getItem("listaTrailer"))) {
        return;
    }

    listaPeliculasFavoritas = JSON.parse(storage.getItem("listaCaratula"));
    listaTrailersFavoritas = JSON.parse(storage.getItem("listaTrailer"));

    // listaPeliculasFavoritas = imagen
    // listaTrailersFavoritas = trailer;
    recargarPeliculas()
});



// https://www.ghibli.jp/images/chihiro.jpg
// https://www.youtube.com/watch?v=5Fgq4Osh6XQ

// https://www.ghibli.jp/images/ponyo.jpg
// https://www.youtube.com/watch?v=f5-QJhafJj4

// https://www.ghibli.jp/images/marnie.jpg
// https://www.youtube.com/watch?v=JeDyp2JkvEs