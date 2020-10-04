import React from "react";

export default class SearchResult extends React.Component {
    
    render() {
        return (
            <div className="column is-2">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                        <img src="https://hips.hearstapps.com/vidthumb/images/delish-bell-pepper-eggs-still001-1521121242.jpg" alt="main recipe"></img>
                        </figure>
                    </div>
                    <div className="card-content">
                    <div className="media-content">
                        <p className="title has-text-centered">Recipe Name</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}