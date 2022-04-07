window.addEventListener('load', ()=>{
    $main = document.querySelector('.container');
    $h2 = document.querySelector('.subtitulo');
    $a = document.querySelector('a');
    $p = document.querySelectorAll('p');

    $name = prompt('Me dirías tu nombre?');

    if ($name) {
        $h2.innerHTML += ` ${$name}!!`;
    } else {
        $h2.innerHTML += 'Invitado!!';
    }

    $h2.style.textTransform = 'uppercase';

    $a.style.color = '#E51B3E';

    $selected = confirm('¿Desea colocar un fondo de pantalla?');
    if ($selected) {
        document.querySelector('body').classList.add('fondo');
    }

    for (let i = 0; i < $p.length; i++) {
        if (i%2 == 0) {
            $p[i].classList.add('destacadoPar');
        } else {
            $p[i].classList.add('destacadoImpar');
        }
    }

    $main.style.display = 'block';
})