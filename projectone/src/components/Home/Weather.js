import React, { Component } from 'react'
import axios from 'axios';

export default class WeatherPost extends Component
{
    constructor(props){
        super(props);
            this.state = {
                temp: null,
                humidity: null,
                realfeal: null
            };  
        this.successfulLookup = this.successfulLookup.bind(this);
    }
    componentDidMount()
    {
        window.navigator.geolocation.getCurrentPosition(this.successfulLookup,console.log);   
        console.log();
    }
    successfulLookup(position){
        var temp = 0;
        var humidity =0;
        var feels_like =0;
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const key = "916f670fb8bb1b6a63a2fa2f8f3e56f4";
        axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
        .then(response =>{

            temp = (response.data.main.temp-273.15);
            humidity =(response.data.main.humidity);
            feels_like =(response.data.main.feels_like -273.15);
            this.setState({
                temp: temp,
                humidity: humidity,
                realfeal: feels_like
            },()=> console.log("temp: "+this.state.temp))
        })
        

        
    }
    
    render()
    {
        return(
            <div className="weatherPane">
                Local Weather:
                <br/>
                temp:{Math.round(this.state.temp)}
                <br/>
                real feel:{Math.round(this.state.realfeal)}
                <br/>
                hum:{this.state.humidity}%
            </div>
        );
    }
}
