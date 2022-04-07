window.addEventListener('load', ()=>{
    $h1 = document.querySelector('h1');
    $section = document.querySelector('section');
    $article = document.querySelector('article');
    $buttons = document.querySelector('.buttons')

    $h1.classList.add('titulo');
    $h1.style.textTransform = 'uppercase';
    $article.classList.add('fondoTransparente');
    $article.style.height = '300px';
    $article.style.display = 'flex';
    $article.style.flexDirection = 'column';
    $article.style.justifyContent = 'center';
    $section.classList.add('fondoCRUD');
    $buttons.style.display = 'flex';
    $buttons.style.flexDirection = 'column';
})