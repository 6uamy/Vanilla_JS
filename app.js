const h1 = document.querySelector('div.hello:first-child h1');

function onclicking(){
    h1.classList.toggle('active');
}

h1.addEventListener('click', onclicking);