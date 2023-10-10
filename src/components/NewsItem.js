import React, { Component } from 'react';
import '../App.css';

export class NewsItem extends Component {
    static defaultProps = {
        title: 'Unknown title',
        desc: 'click on the read more button for the description',
    };

    render() {
        let { title, desc, imageUrl, newsUrl } = this.props;
        return (
            <div className="Newscard">
                <img
                    src={imageUrl === null ? 'https://c8.alamy.com/comp/CTG496/breaking-news-daily-newspaper-headline-CTG496.jpg' : imageUrl }
                    className="card-img-top"
                    style={{ width: '100%', height: '30vh', objectFit: 'cover' }}
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                </div>
                <div className="card-button">
                    <a rel="noreferrer" href={newsUrl} className="btn btn-dark btn-sm" target="_blank">
                        Read more
                    </a>
                </div>
            </div>
        );
    }
}

export default NewsItem;
