import React, { Component } from 'react'



export class Verticalsection extends Component {
    render() {
        let { title, desc, newsUrl } = this.props;
        return (
            <>
                 
                    <div className="card" style={{ width: '18rem' }}>
                      
                        <div className="card-body">
                            <h5 className="card-title">{title} </h5>
                            <p className="card-text">{desc}</p>
                            <a href={newsUrl} className="btn btn-primary">Read More</a>
                        </div>

                    </div>

                


            </>
        )
    }
}

export default Verticalsection
