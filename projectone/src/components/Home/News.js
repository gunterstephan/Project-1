import React, { Component } from 'react'

export default class News extends Component{
    constructor(props){
        super(props);
        this.state = {
            confirmed: null,
            critical: null,
            deaths: null,
            recovered: null
        }
    }
    componentDidMount(){
        const axios = require("axios");
        var confirmed;
        var critical;
        var deaths;
        var recovered;
        axios({
                "method":"GET",
                "url":"https://covid-19-data.p.rapidapi.com/country",
                "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"covid-19-data.p.rapidapi.com",
                "x-rapidapi-key":"6d50bf598fmsh6444c6d85d0bde0p1ed17ejsn0ee836b38dfc",
                "useQueryString":true
            },
            "params":{
                "format":"json",
                "name":"south africa"
            }
            })
            .then((response)=>{
                confirmed = response.data[0].confirmed;
                critical = response.data[0].critical;
                deaths  = response.data[0].deaths;
                recovered = response.data[0].recovered;
                this.setState({
                    confirmed: confirmed,
                    critical: critical,
                    deaths: deaths,
                    recovered: recovered
                })
                const loader = document.getElementById("s2");
                loader.classList.add("hide");
                const virus = document.getElementById("covid");
                virus.classList.remove("hide");
            })
            .catch((error)=>{
            console.log(error)
            })

            
    }
    render(){
        return(
            <div id="covid" className="newsPane hidden">
                <div id="s2" className="spinner2"></div>
                <h1>COVID-19 Stats:</h1>
                <br/>
                Confirmed:{this.state.confirmed}
                <br/>
                Critical:{this.state.critical}
                <br/>
                Deaths:{this.state.deaths}
                <br/>
                Recovered:{this.state.recovered}
            </div>
        )
    }
}
