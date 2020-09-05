import React, { Component } from 'react'
import './Home.css';
import './Catch.js'
import Catch from './Catch.js';
import InformationPane from './InformationPane.js';
import CreativityPane from './CreativityPane.js';

class Home extends Component{
    render(){
        return(
            <section id="sone" className="homePage">
                <div className='mainview'>
                    <InformationPane />
                    <Catch />
                    <CreativityPane />
                </div>
            </section>
        )
    }
}
export default Home;