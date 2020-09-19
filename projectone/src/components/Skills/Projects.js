import React, { Component } from 'react'
import './Technologies.css'

export default class Projects extends Component{
    render(){
        return(
            <div id="technologies" className="technologies">
                <div className="projdesc">
                    <h4>Desktop GUI</h4>
                    <p>
                        1. Visual C# <br/>
                        2. JavaFX<br/>
                        3. Python
                    </p>
                </div>
                <div className="projdesc">
                    <h4>Cryptography</h4>
                    <p>
                        1. Java
                    </p>
                </div>
                <div className="projdesc">
                    <h4>AI algorithms</h4>
                    <p>
                        1. Python
                    </p>
                </div>
                <div className="projdesc">
                    <h4>Client-Server networking</h4>
                    <p>
                        1. Java
                    </p>
                </div>
                <div className="projdesc">
                    <h4>Web-Development</h4>
                    <p>
                    1. ASP.NET in C#<br/>
                    2. ReactJS
                    </p>
                </div>


                
                
            </div>
        )
    }
}