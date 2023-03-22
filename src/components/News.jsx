import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
        }
    }

    async componentDidMount(){
        console.log("Component DID MOUNT");
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=1235311a10564850bd45dd4a2400da4c";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
        })
    }


    render() {
        console.log("RENDER")

        return (
            <div className='container'>
                <h2 style={{paddingTop: "2rem", fontFamily:"sans-serif"}}>United States News API - Top Headlines</h2>
                <div className='row d-flex justify-content-between'>
                    {this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                        <NewsItem 
                        urlToImage={element.urlToImage}
                        title={element.title} 
                        author={element.author}
                        description={element.description?element.description.slice(0, 100):""}
                        newsUrl={element.url}
                        publishedAt={element.publishedAt}/>
                    </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News