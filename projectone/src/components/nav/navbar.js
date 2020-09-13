import React, { Component } from 'react'
import {links} from './navlinks'
import './navlinks.css'

class Navbar extends Component
{
    constructor(props){
        super(props);

        this.state = {
            mobileOptionsActive: false
        }
    }
    handleOptionsClick = () => {
         this.setState({mobileOptionsActive: !this.state.mobileOptionsActive})
         console.log(this.state)
    };
    render()
    {
        const {mobileOptionsActive} = this.state;
        return(
            <nav className="headerer">
                <div className="logo">
                <h1>Software Anonymous</h1>
                </div>
                    <ul className={"nav-links "+(mobileOptionsActive ? "optionsselect": null)}>
                    {links.map((link,index)=>{
                        return(
                            <li key={index}>
                                <a id={index} className={link.classname} href={link.address} onClick={this.handleOptionsClick}>{link.name}</a>
                            </li>
                        )
                    })}
                    </ul>
                    <div className="options-mobile" onClick={this.handleOptionsClick}>
                        <div id="line1" className="line"></div>
                        <div id="line2" className="line"></div>
                        <div id="line3" className="line"></div>
                    </div>
            </nav>
        )
    }
}
export default Navbar