import React from "react";
import Navbar from "./Navbar";
import SearchResult from "./SearchResult";
import Filter from "./Filter"
import {Switch, Link, Route}from "react-router-dom";

export default class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {isRenderFilter: false};

        this.renderFilter = this.renderFilter.bind(this);
    }
    render() {
        return (
            
            <div>
                <Navbar />
                <section className="columns search-page">
                    <div className="column has-text-centered">
                        <div>
                            <nav className="navbar filter-bar">
                                <div className="navbar-brand">
                                    <i class="fas fa-angle-double-down"></i><a className="navbar-item" onClick={this.renderFilter}>Filter</a>
                                </div>
                                <div className="navbar-end">
                                    <p className="navbar-item"> 12,234 recipes found relating to: Pizza</p>
                                </div>
                            </nav>
                        </div>
                        <div className="container">
                            {this.state.isRenderFilter ? <Filter/> : ''}
                        </div>
                        <this.SearchResults />
                    </div>
                </section>
            </div>
        );
    }
    

    
    SearchResults() {
        const testObject = [
            {name: "Pizza", calories: 100, time: 50, imgUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"},
            {name: "Lasagna", calories: 700, time: 66, imgUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"},
            {name: "Pasta", calories: 600, time: 45, imgUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"},
            {name: "Spaghetti", calories: 500, time: 534, imgUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"},
            {name: "Water", calories: 200, time: 346, imgUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"},
            {name: "Salt", calories: 400, time: 346, imgUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"},
            {name: "Air", calories: 0, time: 36, imgUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"}
        ]
        const listResults = testObject.map((result) => <SearchResult name={result.name} key={result.name} calories={result.calories} time={result.time} imgUrl={result.imgUrl}/>)
        return (
            <div className="columns is-multiline search-grid">
                {listResults}
            </div>);
    }

    renderFilter(){
        this.setState(state => ({
            isRenderFilter: !state.isRenderFilter
        }));
    }
}