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
                        <figure className="image is-square">
                            <img src="https://hips.hearstapps.com/vidthumb/images/delish-bell-pepper-eggs-still001-1521121242.jpg" alt="main recipe"></img>
                        </figure>
                    </div>
                    <div className="card-content">
                    <div className="media-content">
                        <p className="title food-title has-text-centered">{this.props.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}