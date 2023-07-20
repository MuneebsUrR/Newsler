import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

 Articles = 
  [
  ]
 
  constructor(){
    super();
    this.state = {
      Articles : this.Articles,
      loader:false,
      page : 1,
    }
  }

  async componentDidMount(){
    this.setState({
      loader:true,
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cdbc3077b6b94db89b1fe640f6b2d4a2&pageSize=${this.props.noOfarticles}`;
    let data = await fetch(url);
    let parsedData = await data.json();
 
    this.setState({
      Articles:parsedData.articles,
      totalArticle : parsedData.totalResults,
      loader:false,
    })
  
  }

  handleonNext = async()=>{
  
    if(this.state.page + 1 > Math.ceil(this.state.totalArticle / this.props.noOfarticles)){
     // document.getElementById('nextButton').disabled = true;
    }
    else{
      this.setState({
        loader:true,
      })
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cdbc3077b6b94db89b1fe640f6b2d4a2&page=${this.state.page + 1}&pageSize=${this.props.noOfarticles}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      
      this.setState({
        Articles:parsedData.articles,
        page:this.state.page +1,
        loader:false,
      })
      
    }
   
  }
  handleonPrevious = async() =>{
   // document.getElementById('nextButton').disabled = false;
   this.setState({
    loader:true,
  })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cdbc3077b6b94db89b1fe640f6b2d4a2&page=${this.state.page -1}&pageSize=${this.props.noOfarticles}`;
    let data = await fetch(url);
    let parsedData = await data.json();
  
    this.setState({
      Articles:parsedData.articles,
      page:this.state.page -1,
      loader:false,
    })
  }
  render() {
    return (
     <>
       <h1 className='my-4 mx-4'>Daily-News </h1>
      { this.state.loader && <Spinner/>}
       <div className="container my-2">
        <div className="row ">
         {!this.state.loader &&  this.state.Articles.map
         ((article) =>{
           return  <div className="col-md-4 d-flex my-4">
          <NewsItem key={article.url} title={article.title} desc={article.description} imageUrl={article.urlToImage} newsUrl={article.url} />
          </div>
         })
        }
        </div>
       </div> 
      { !this.state.loader &&
     <div className="d-flex justify-content-between m-4 ">
       <button disabled={this.state.page<=1} onClick={this.handleonPrevious} className="btn btn-dark">&larr; Previous</button>
       <button  disabled={this.state.page + 1 > Math.ceil(this.state.totalArticle / this.props.noOfarticles)} id='nextButton' className="btn btn-dark" onClick={this.handleonNext}>Next &rarr;</button>
      </div>
  }
     </>
    )
  }
}

export default News
