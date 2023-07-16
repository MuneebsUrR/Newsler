import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

 Articles = 
  [
  ]
 
  constructor(){
    super();
    this.state = {
      Articles : this.Articles
    }
  }

  async componentDidMount(){
    let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cdbc3077b6b94db89b1fe640f6b2d4a2';
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      Articles:parsedData.articles
    })
  }
  render() {
    return (
     <>
       <h1 className='my-4 mx-4'>Daily-News </h1>
       <div className="container my-2">
        <div className="row ">
         {  this.state.Articles.map
         ((article) =>{
           return  <div className="col-md-4 d-flex my-4">
          <NewsItem key={article.url} title={article.title} desc={article.description} imageUrl={article.urlToImage} newsUrl={article.url} />
          </div>
         })
        }
        </div>
       </div>
      

     </>
    )
  }
}

export default News
