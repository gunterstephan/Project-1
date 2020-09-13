import React, { Component } from 'react'

class News extends Component{
    constructor(props){
        super(props);

    }
    componentDidMount(){
        const newsApi = require('newsapi');
        const news = new newsApi('f10e035924bc438e9b574fee2c97496d');

        news.v2.topHeadlines({
            sources: 'bbc-news,the-verge',
            q: 'bitcoin'
        }).then(response =>{

        })
    }
    render(){
        return(
            <div className="news">

            </div>
        )
    }
}