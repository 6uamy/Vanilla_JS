const API_KEY = '2c5995dd91584b1d74bba842cc3394f5';

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');

        city.innerText = `위치 | ${data.name}`;
        weather.innerText = `${data.weather[0].main} ${data.main.temp}°C`;
    });
}

function onGeoError(){
    alert("Error : 위치를 찾을 수 없습니다.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); 