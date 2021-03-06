import React, { Component } from 'react'

export default class Currency extends Component{
    constructor(props){
        super(props);
        this.state = {
            ZARtoUSD: null,
            ZARtoCAD: null,
            ZARtoEuro: null
        };
    }
    componentDidMount(){
        var dollar;
        var canDollar;
        var euro;

        const axios = require("axios");

        axios({
            "method":"GET",
            "url":"https://currency-exchange.p.rapidapi.com/exchange",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"currency-exchange.p.rapidapi.com",
            "x-rapidapi-key":"6d50bf598fmsh6444c6d85d0bde0p1ed17ejsn0ee836b38dfc",
            "useQueryString":true
            },"params":{
            "q":"1.0",
            "from":"USD",
            "to":"ZAR"
            }
            })
            .then((response)=>{
                dollar = response.data;
              this.setState({
                  ZARtoUSD: dollar
              })
            })
            .catch((error)=>{
              console.log(error)
            })
            axios({
                "method":"GET",
                "url":"https://currency-exchange.p.rapidapi.com/exchange",
                "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"currency-exchange.p.rapidapi.com",
                "x-rapidapi-key":"6d50bf598fmsh6444c6d85d0bde0p1ed17ejsn0ee836b38dfc",
                "useQueryString":true
                },"params":{
                "q":"1.0",
                "from":"CAD",
                "to":"ZAR"
                }
                })
                .then((response)=>{
                    canDollar = response.data;
                  this.setState({
                      ZARtoGBP: canDollar
                  })
                })
                .catch((error)=>{
                  console.log(error)
                })
            axios({
                "method":"GET",
                "url":"https://currency-exchange.p.rapidapi.com/exchange",
                "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"currency-exchange.p.rapidapi.com",
                "x-rapidapi-key":"6d50bf598fmsh6444c6d85d0bde0p1ed17ejsn0ee836b38dfc",
                "useQueryString":true
                },"params":{
                "q":"1.0",
                "from":"EUR",
                "to":"ZAR"
                }
                })
                .then((response)=>{
                    euro = response.data;
                    this.setState({
                        ZARtoEuro: euro
                    })
                    const loader = document.getElementById("s3");
                    loader.classList.add("hide");
                    const money = document.getElementById("ip");
                    money.classList.remove("hide")
                })
                .catch((error)=>{
                    console.log(error)
                })

    }
    render(){
        return(
            <div id="ip" className="currencyPane hidden">
                <div id="s3" className="spinner3"></div>
                <h1>Exchange rate:</h1>
                <br/>
                USD: R{this.state.ZARtoUSD}
                <br/>
                CAD: R{this.state.ZARtoGBP}
                <br/>
                EUR: R{this.state.ZARtoEuro}
            </div>
        )
    }
}