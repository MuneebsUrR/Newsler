import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

import {
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {



  render() {
    return (
      <>
      
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News key={'/'} noOfarticles={12} category={'general'} country={'us'} />} />
          <Route exact path='/business' element={<News key={'business'} noOfarticles={12} category={'business'} country={'us'} />} />
          <Route exact path='/entertainment' element={<News key={'entertainment'} noOfarticles={12} category={'entertainment'} country={'us'} />} />
          <Route exact path='/general' element={<News key={'general'} noOfarticles={12} category={'general'} country={'us'} />} />
          <Route exact path='/health' element={<News key={'health'} noOfarticles={12} category={'health'} country={'us'} />} />
          <Route exact path='/science' element={<News key={'science'} noOfarticles={12} category={'science'} country={'us'} />} />
          <Route exact path='/sports' element={<News key={'sports'} noOfarticles={12} category={'sports'} country={'us'} />} />
          <Route exact path='/technology' element={<News key={'technology'} noOfarticles={12} category={'technology'} country={'us'} />} />
        </Routes>
      </>
    )
  }
}
