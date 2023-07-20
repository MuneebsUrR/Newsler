import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#e3f2fd'}}>
                    <a className="navbar-brand font-weight-bold" href="/">Newsler</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                            <a className="nav-item nav-link mx-3 active" href="/">Home <span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link mx-3" href="/">Features</a>
                            <a className="nav-item nav-link mx-3" href="/">Pricing</a>
                           
                        </div>
                    </div>
                </nav>

            </>
        )
    }
}
