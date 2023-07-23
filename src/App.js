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
          <Route exact path='/' element={<News key={'/'} topHeading = {'Daily News'} noOfarticles={12} category={'general'} country={'us'} />} />
          <Route exact path='/business' element={<News key={'business'} topHeading = {'Daily News-Business'} noOfarticles={12} category={'business'} country={'us'} />} />
          <Route exact path='/entertainment' element={<News key={'entertainment'} topHeading = {'Daily News-Entertainment'} noOfarticles={12} category={'entertainment'} country={'us'} />} />
          <Route exact path='/general' element={<News key={'general'} topHeading = {'Daily News-General'} noOfarticles={12} category={'general'} country={'us'} />} />
          <Route exact path='/health' element={<News key={'health'} topHeading = {'Daily News-Health'} noOfarticles={12} category={'health'} country={'us'} />} />
          <Route exact path='/science' element={<News key={'science'} topHeading = {'Daily News-Science'} noOfarticles={12} category={'science'} country={'us'} />} />
          <Route exact path='/sports' element={<News key={'sports'} topHeading = {'Daily News-Sports'} noOfarticles={12} category={'sports'} country={'us'} />} />
          <Route exact path='/technology' element={<News key={'technology'} topHeading = {'Daily News-Technology'} noOfarticles={12} category={'technology'} country={'us'} />} />
        </Routes>
      </>
    )
  }
}
