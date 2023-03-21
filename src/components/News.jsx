import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    render() {

        return (
            <div className='container'>
                <h2>Indonesia News - Top Headlines</h2>
                <div className='row'>
                    <div className='col-md-4'>
                        <NewsItem 
                        urlToImage="https://media.cnn.com/api/v1/images/stellar/prod/230320102819-01-xi-jinping-moscow-032023.jpg?c=16x9&q=w_800,c_fill"
                        title="myTitle" 
                        author="Simone McCarthy, Rob Picheta"
                        description="This is description"
                        newsUrl="https://www.cnn.com/2023/03/20/europe/xi-putin-china-russia-visit-monday-intl-hnk/index.html"
                        publishedAt="2023-03-20T22:02:00Z"/>
                    </div>
                    <div className='col-md-4'>
                        <NewsItem 
                        urlToImage="https://media.cnn.com/api/v1/images/stellar/prod/230320102819-01-xi-jinping-moscow-032023.jpg?c=16x9&q=w_800,c_fill"
                        title="myTitle" 
                        author="Simone McCarthy, Rob Picheta"
                        description="This is description"
                        newsUrl="https://www.cnn.com/2023/03/20/europe/xi-putin-china-russia-visit-monday-intl-hnk/index.html"
                        publishedAt="2023-03-20T22:02:00Z"/>
                    </div>
                    <div className='col-md-4'>
                        <NewsItem 
                        urlToImage="https://media.cnn.com/api/v1/images/stellar/prod/230320102819-01-xi-jinping-moscow-032023.jpg?c=16x9&q=w_800,c_fill"
                        title="myTitle" 
                        author="Simone McCarthy, Rob Picheta"
                        description="This is description"
                        newsUrl="https://www.cnn.com/2023/03/20/europe/xi-putin-china-russia-visit-monday-intl-hnk/index.html"
                        publishedAt="2023-03-20T22:02:00Z"/>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default News