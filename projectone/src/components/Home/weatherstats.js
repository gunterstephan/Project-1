import axios from 'axios';

var values = {
    temp: null,
    feels_like: null,
    min: null,
    max: null,
    humidity: null
}

const getLocation = () =>{

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(successfulLookup);
        console.log(values);
    }
}

successfulLookup = (position) =>{

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const key = "916f670fb8bb1b6a63a2fa2f8f3e56f4";
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
    .then(response =>{
        temp = (response.data.main.temp-273.15);
        max = (response.data.main.temp_max -273.15);
        min = (response.data.main.temp_min -273.15);
        humidity =(response.data.main.humidity -273.15);
        feels_like =(response.data.main.feels_like -273.15);
        console.log({feels_like});
    });  
}