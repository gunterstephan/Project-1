import React, { Component } from 'react'
import './Technologies.css'

export default class Technologies extends Component{
    render(){
        return(
            <div id="technologies" className="technologies">
                <div className="techpng"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/1200px-.NET_Logo.svg.png" alt="ASP.NET in C#"/></div>
                <div className="techpng"><img src="https://mecdata.it/wp-content/uploads/2020/02/vs2015.png" alt="Visual C#"/></div>            
                <div className="techpng"><img src="https://static.wixstatic.com/media/2724b2_a4c660815dde4271be00cb7e9b9cae2c~mv2.png/v1/fit/w_605,h_533,al_c,q_80/file.png" alt="JavaFX in Java"/></div>
                <div className="techpng"><img src="https://www.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="ReactJS in Javascript"/></div>
                <div className="techpng"><img src="https://icons-for-free.com/iconfiles/png/512/logo+my+query+server+sql+icon-1320184811372606623.png" alt="Database Systems"/></div>
                <div className="techpng"><img src="https://cdn.worldvectorlogo.com/logos/flutter-logo.svg" alt="Flutter"/></div>
            </div>
        )
    }
}