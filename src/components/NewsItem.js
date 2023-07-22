import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, desc, imageUrl, newsUrl } = this.props;
        return (
            <>
                <div className="card " >
                    <img src={imageUrl === null ? 'https://c8.alamy.com/comp/CTG496/breaking-news-daily-newspaper-headline-CTG496.jpg' : imageUrl} className="card-img-top " style={{ width: '100%', height: '30vh' }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <a rel='noreferrer' href={newsUrl} className='btn btn-dark btn-sm' target='_blank'>Read more</a>
                    </div>
                </div>

            </>
        )
    }
}

export default NewsItem
