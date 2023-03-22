import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Loading from './assets/loading.gif';

class News extends Component {
    constructor() {
        super();
        this.state = {
            navigation: "initial",
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
            navigation: "ready", 
            articles: parsedData.articles,
        })
    }


    render() {
        console.log("RENDER")
        const { navigation } = this.state;

        if (navigation === "initial") {
            return (
                <div className="text-center" style={{margin:"4rem"}}>
                    <img src={Loading} alt="Loading" />
                </div>
            )
        };

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