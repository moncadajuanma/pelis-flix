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
    var elementoListaPeliculas = document.getElementById('listaPeliculas');
    elementoListaPeliculas.innerHTML = '';
    for (i = 0; i < listaPeliculasFavoritas.length; i++) {
        elementoListaPeliculas.innerHTML += `<a href=" ${listaTrailersFavoritas[i]} "><img src=" ${listaPeliculasFavoritas[i]} "></a>`;
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

function recuperoListaPeliculas() {
    // Se parsea para poder ser usado en js con JSON.parse :)
    return listaPeliculasFavoritas = JSON.parse(storage.getItem("listaCaratula"));

}

function recuperoListaTailers() {
    // Se parsea para poder ser usado en js con JSON.parse :)
    // listaTrailersPeliculasFavoritas = storage.getItem("listaTrailer");
    return listaTrailersFavoritas = JSON.parse(storage.getItem("listaTrailer"));
}

// Carga Automatica de variables almacenadas en localStorage
//document.addEventListener("DOMContentLoaded", recuperoListas);



// https://www.ghibli.jp/images/chihiro.jpg
// https://www.youtube.com/watch?v=5Fgq4Osh6XQ

// https://www.ghibli.jp/images/ponyo.jpg
// https://www.youtube.com/watch?v=f5-QJhafJj4

// https://www.ghibli.jp/images/marnie.jpg
// https://www.youtube.com/watch?v=JeDyp2JkvEs