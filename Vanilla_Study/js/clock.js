const clock = document.querySelector("h2#clock");

function getClock(){
    const xmas = new Date("2022-12-25T00:00:00")
    const date = new Date();
    const getDday = xmas.getTime() - date.getTime();
    const day = Math.floor(getDday/(1000*60*60*24));
    const hours = String(Math.floor((getDday % (1000*60*60*24))/(1000*60*60))).padStart(2, '0');
    const minutes = String(Math.floor((getDday % (1000*60*60))/(1000*60))).padStart(2, '0');
    const seconds = String(Math.floor((getDday % (1000*60))/1000)).padStart(2, '0');
    clock.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

getClock();
setInterval(getClock, 1000); // function, 1000ms == 1s