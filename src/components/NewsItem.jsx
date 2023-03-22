import React, { Component } from 'react';

class NewsItem extends Component {
    render() {
        let { urlToImage, title, author, description, newsUrl, publishedAt } = this.props
    
        return (
            <div className='container' style={{boxSizing: "border-box", paddingTop: "2rem"}}>
                <div className="card h-100">
                    <img 
                    style={{width: "20", height:"40%"}}
                    src={urlToImage} 
                    className="card-img-top" 
                    alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize:"20px"}}>{title}</h5>
                        <p className="card-text" style={{fontSize:"16px", marginTop:"10"}}>
                            <small className='text-muted'>{author}</small>
                            <br />
                            {description}
                        </p>
                        <a href={newsUrl} className="btn btn-primary" role="button">Read More</a>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{publishedAt}</small>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

