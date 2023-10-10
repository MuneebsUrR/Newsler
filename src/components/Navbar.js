

import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const location =  useLocation();

    
  return (
    <>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
        <Link className="navbar-brand font-weight-bold" to="/">Newsler </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ">
                <Link className={`nav-item nav-link mx-3 ${location.pathname==='/'?'active':''}`} to="/">Home <span className="sr-only">(current)</span></Link>
                <Link className={`nav-item nav-link mx-3 ${location.pathname==='/business'?'active':''}`} to="/business">Business</Link>
                <Link className={`nav-item nav-link mx-3 ${location.pathname==='/entertainment'?'active':''}`} to="/entertainment">Entertainment</Link>
                <Link className={`nav-item nav-link mx-3 ${location.pathname==='/general'?'active':''}`} to="/general">General</Link>
                <Link className={`nav-item nav-link mx-3 ${location.pathname==='/health'?'active':''}`} to="/health">Health</Link>
                <Link className={`nav-item nav-link mx-3 ${location.pathname==='/science'?'active':''}`} to="/science">Science</Link>
                <Link className={`nav-item nav-link mx-3 ${location.pathname==='/sports'?'active':''}`} to="/sports">Sports</Link>
                <Link className={`nav-item nav-link mx-3 ${location.pathname==='/technology'?'active':''}`} to="/technology">Technology</Link>

            </div>
        </div>
    </nav>

</>
  )
}


