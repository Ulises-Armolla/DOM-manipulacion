window.addEventListener('load', ()=>{
    $h1 = document.querySelector('h1');
    $section = document.querySelector('section');
    $article = document.querySelector('article');

    $h1.innerHTML = 'AGREGAR PELICULAS';
    $h1.classList.add('titulo');
    $article.classList.add('fondoTransparente');
    $section.classList.add('fondoCRUD');
})