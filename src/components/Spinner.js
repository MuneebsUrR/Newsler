import React, { Component } from 'react'
import loader from './loader.gif'
import '../App.css'
export class Spinner extends Component {
  render() {
    return (
      <div id='spinner'>

        <img src={loader} alt="loader" />
      </div>
    )
  }
}

export default Spinner
