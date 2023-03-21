import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: this.articles,
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
                        title="myTitle" description="This is description"
                        urlToImage="https://media.cnn.com/api/v1/images/stellar/prod/230320102819-01-xi-jinping-moscow-032023.jpg?c=16x9&q=w_800,c_fill"/>
                    </div>
                    <div className='col-md-4'>
                        <NewsItem title="myTitle" description="This is description"
                        urlToImage="https://media.cnn.com/api/v1/images/stellar/prod/230320102819-01-xi-jinping-moscow-032023.jpg?c=16x9&q=w_800,c_fill"/>
                    </div>
                    <div className='col-md-4'>
                        <NewsItem title="myTitle" description="This is description"
                        urlToImage="https://media.cnn.com/api/v1/images/stellar/prod/230320102819-01-xi-jinping-moscow-032023.jpg?c=16x9&q=w_800,c_fill"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default News