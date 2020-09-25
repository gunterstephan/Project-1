import React, { Component } from 'react'
import './About.css';
import pic from './p.jpg';
import Cv from './cv.js'
import { saveAs } from '@progress/kendo-file-saver';

class About extends Component{
    render(){
        return(
            <section id="sthree" className="aboutPage">
                <div className="aboutitems">
                    <div className="heading">
                        <div className="pphoto">
                            <img className="ppic" src={pic} alt="Profile Picture"/>
                        </div>
                        <div className="name">
                            <h1 className="myname">Stephan Gunter</h1>
                        <div className="title">
                            <h2>B.Sc IT Graduate</h2>
                        </div>
                        </div>
                    </div>
                    <Cv/>

                </div>
            </section>
        )
    }
}
export default About;