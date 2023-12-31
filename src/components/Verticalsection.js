import React, { Component } from 'react'



export class Verticalsection extends Component {
    static defaultProps = {
        title: 'Unknown title',
        desc: 'click on the read more button for the description',

    }
    render() {
        let { title, desc, newsUrl } = this.props;
        return (
            <>

                <div className="card" style={{ width: '18rem' }}>

                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{desc}</p>
                        <a href={newsUrl} className="btn btn-dark btn-sm">Read More</a>
                    </div>

                </div>




            </>
        )
    }
}

export default Verticalsection
