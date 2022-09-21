const h1 = document.querySelector('div.hello:first-child h1');

function onclicking(){
    h1.style.color = 'blue';
}

function onhover(){
    h1.innerText = 'Mouse is here';
}

function onleave(){
    h1.innerText = 'Mouse is gone';
}

function handleWindowResize(){
    document.body.style.backgroundColor = 'tomato';
}

function handleWindowcopy(){
    alert('Copier!');
}

function handleoff(){
    alert('No wifi!');
}

function handleon(){
    alert('good');
}

h1.addEventListener('click', onclicking);
h1.addEventListener('mouseenter', onhover);
h1.addEventListener('mouseleave', onleave);

window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowcopy);
window.addEventListener('offline', handleoff);
window.addEventListener('online', handleon);