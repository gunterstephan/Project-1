import React, { Component } from 'react'
import './Technologies.css'

export default class Languages extends Component{
    render(){
        return(
            <div id="technologies" className="technologies">
                <div className="techpng"><img src="https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png" alt="C#"/></div>
                <div className="techpng"><img src="https://images.vexels.com/media/users/3/166401/isolated/preview/b82aa7ac3f736dd78570dd3fa3fa9e24-java-programming-language-icon-by-vexels.png" alt="Java"/></div>            
                <div className="techpng"><img src="https://www.jing.fm/clipimg/full/53-537670_python-png-file-python-logo-png.png" alt="Python"/></div>
                <div className="techpng"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Unofficial_JavaScript_logo.svg/480px-Unofficial_JavaScript_logo.svg.png" alt="Javascript"/></div>
                <div className="techpng"><img src="https://pngimg.com/uploads/php/php_PNG50.png" alt="PHP"/></div>
                <div className="techpng"><img src="https://cdn.freebiesupply.com/logos/large/2x/dart-logo-png-transparent.png" alt="Dart"/></div>
            </div>
        )
    }
}