window.addEventListener('load', ()=>{
    $h1 = document.querySelector('h1');
    $section = document.querySelector('section');
    $form = document.querySelector('form');

    $h1.style.textTransform = 'uppercase';
    $form.classList.add('fondoTransparente');
    $section.style.width = '100%';
    $section.classList.add('fondoCRUD');
})