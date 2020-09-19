import React, { Component } from 'react'
import Languages from './Languages';
import Projects from './Projects';
import './Skills.css';
import Technologies from './Technologies'

class Skills extends Component{
    render(){
        return(
            <section id="stwo" className="skillsPage">
                <div className="mainview2">
                    <h1 className="header">Technologies</h1>
                    <Technologies />
                    <h1 className="header">Prominent Languages</h1>
                    <Languages/>
                    <h1 className="header">Projects</h1>
                    <Projects/>
                </div>
            </section>
        )
    }
}
export default Skills;