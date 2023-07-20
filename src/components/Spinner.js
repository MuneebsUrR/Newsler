import React, { Component } from 'react'
import loader from './loader.gif'
import 'P:\\React Course\\news-app\\src\\App.css'
export class Spinner extends Component {
  render() {
    return (
      <div id='flexbox'>
       
        <img src={loader} alt="loader" />
      </div>
    )
  }
}

export default Spinner
