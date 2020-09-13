import React, { Component } from 'react'
import WeatherPost from './Weather.js'
import './Home.css';

class InformationPane extends Component{
    render(){
        return(
            <div className= 'weatherPane'>
                <WeatherPost />
            </div>
            

        )
    }
}
export default InformationPane