import React from "react";

export default class SearchResult extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="column is-2 is-touch">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-square image-div">
                            <img src={this.props.imgUrl} alt="main recipe"></img>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media-content search-content">
                            <p className="food-title has-text-centered">{this.props.name}</p>
                        </div>
                    </div>
                    <div className="card-footer">
                        <p className="card-footer-item">{this.props.calories} cals</p>
                        <p className="card-footer-item">{Math.floor(this.props.time/60) > 0 ? `${Math.floor(this.props.time/60)} hrs` : ''} {this.props.time % 60} mins</p>
                    </div>
                </div>
            </div>
        )
    }
    
}