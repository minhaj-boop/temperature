const API_KEY =  `c6fefd44650b2b3a502f4d46594db6e2`;

const searchTemperature = () => {
    const city = document.getElementById('city-name');
    const searchText = city.value;
    if(searchText !== '') {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY}&units=metric`;
        fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
    }
}

const setInnerText = (id,text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    console.log(temperature);
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('weather', temperature.weather[0].main);

    //set icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src',url);
}