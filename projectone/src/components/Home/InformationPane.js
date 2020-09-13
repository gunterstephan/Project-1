import React, { Component } from 'react'

import WeatherPost from './Weather.js'
import News from './News.js'
import Currency from './Currency.js'
import './Home.css';

class InformationPane extends Component{
    render(){
        return(
            <div className= 'infoPane'>
                <WeatherPost />
                <News />
                <Currency />
            </div>
            

        )
    }
}
export default InformationPane