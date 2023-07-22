import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{backgroundColor:'#e3f2fd'}}>
                    <Link className="navbar-brand font-weight-bold" to="/">Newsler</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                            <Link className="nav-item nav-link mx-3 active" to="/">Home <span className="sr-only">(current)</span></Link>
                            <Link className="nav-item nav-link mx-3" to="/business">Business</Link>
                            <Link className="nav-item nav-link mx-3" to="/entertainment">Entertainment</Link>
                            <Link className="nav-item nav-link mx-3" to="/general">General</Link>
                            <Link className="nav-item nav-link mx-3" to="/health">Health</Link>
                            <Link className="nav-item nav-link mx-3" to="/science">Science</Link>
                            <Link className="nav-item nav-link mx-3" to="/sports">Sports</Link>
                            <Link className="nav-item nav-link mx-3" to="/technology">Technology</Link>
                           
                        </div>
                    </div>
                </nav>

            </>
        )
    }
}


