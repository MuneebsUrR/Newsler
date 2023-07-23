import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import Verticalsection from './Verticalsection';
import InfiniteScroll from 'react-infinite-scroll-component';
import 'P:\\React Course\\news-app\\src\\App.css'
export class News extends Component {

  Articles = [];
  sideArticles = [];

  constructor() {
    super();
    this.state = {
      Articles: this.Articles,
      sideArticles : this.sideArticles,
      loader: false,
      page: 1,
    }
  }

  async componentDidMount() {
    this.setState({
      loader: true,
    })

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cdbc3077b6b94db89b1fe640f6b2d4a2&pageSize=${this.props.noOfarticles}`;
    let sideArticlesUrl = 'https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=cdbc3077b6b94db89b1fe640f6b2d4a2&pageSize=20';
    let data = await fetch(url);
    let sideData = await fetch(sideArticlesUrl);
    let parsedData = await data.json();
    let sideArticlesParsedData = await sideData.json();
   
    this.setState({
      Articles: parsedData.articles || [],
      sideArticles : sideArticlesParsedData.articles || [],
      totalArticle: parsedData.totalResults || 0,
      loader: false,
    })

  }

  handleonNext = async () => {

    if (this.state.page + 1 > Math.ceil(this.state.totalArticle / this.props.noOfarticles)) {
      // document.getElementById('nextButton').disabled = true;
    }
    else {
      this.setState({
        loader: true,
      })
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cdbc3077b6b94db89b1fe640f6b2d4a2&page=${this.state.page + 1}&pageSize=${this.props.noOfarticles}`;
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        Articles: parsedData.articles,
        page: this.state.page + 1,
        loader: false,
      })

    }

  }
  handleonPrevious = async () => {
    // document.getElementById('nextButton').disabled = false;
    this.setState({
      loader: true,
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cdbc3077b6b94db89b1fe640f6b2d4a2&page=${this.state.page - 1}&pageSize=${this.props.noOfarticles}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      Articles: parsedData.articles,
      page: this.state.page - 1,
      loader: false,
    })
  }

  fetchMoreData =async ()=>{
  
    let sideArticlesUrl = 'https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=cdbc3077b6b94db89b1fe640f6b2d4a2&pageSize=20';
    
    let sideData = await fetch(sideArticlesUrl);
 
    let sideArticlesParsedData = await sideData.json();
   
    this.setState({
      sideArticles : this.state.sideArticles.concat(sideArticlesParsedData.articles) || [],
    })
  }
  render() {
    return (
      <>


        {this.state.loader && <Spinner />}

        <div className="container-fluid my-2" id='container'>
       {!this.state.loader && <>
        <h2 className='  text-center ' style={{marginTop:'65px'}}>{this.props.topHeading} </h2><hr />
       </>} 
          <div className="row">

            {!this.state.loader && this.state.Articles.map
              ((article) => {
                return (<>
                  <div key={article.url} className="col-md-4 d-flex  my-2">
                    <NewsItem title={article.title} desc={article.description} imageUrl={article.urlToImage} newsUrl={article.url} />
                  </div>

                </>
                )

              })
            }

          </div>
          {!this.state.loader &&
          <div className="d-flex justify-content-between m-4 ">
            <button disabled={this.state.page <= 1} onClick={this.handleonPrevious} className="btn btn-dark">&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticle / this.props.noOfarticles)} id='nextButton' className="btn btn-dark" onClick={this.handleonNext}>Next &rarr;</button>
          </div>
        }
        </div>
        
        
       
        {!this.state.loader && 
        <div className="flexBox d-flex flex-column"  >
          <InfiniteScroll
          dataLength={this.state.sideArticles.length}
          next={this.fetchMoreData}
          hasMore={this.state.sideArticles.length!== this.state.totalResults}
          loader={<h4>Loading...</h4>}
        >

           <h4 className=' text-center ' style={{  padding:'10px'}}>Top Picks for you</h4>
          { this.state.sideArticles.map((sidearticle)=>{
              return (
                <Verticalsection title={sidearticle.title} desc={sidearticle.description} newsUrl={sidearticle.url}/>
              )
            } )}
          
            
          </InfiniteScroll>
        </div>}
       
       
      </>
    )
  }
}

export default News
