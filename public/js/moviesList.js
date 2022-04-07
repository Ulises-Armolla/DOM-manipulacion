window.addEventListener('load', ()=>{
    $body = document.querySelector('body');
    $h1 = document.querySelector('h1');

    $dark = confirm('¿Desea modo oscuro?');
    if ($dark) {
        $body.style.backgroundColor = '#7f7f7f';
        $body.classList.add('fondoMoviesList');
    }

    $h1.innerHTML = 'LISTADO DE PELICULAS';
    $h1.style.color = 'white';
    $h1.style.backgroundColor = 'teal';
    $h1.style.padding = '20px';
})