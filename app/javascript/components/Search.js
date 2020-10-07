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
                            <nav className="navbar">
                                <div className="navbar-brand">
                                    <button className="navbar-item" onClick={this.renderFilter}>Filter</button>
                                </div>
                            </nav>
                        </div>
                        <div className="container">
                            {this.state.isRenderFilter ? <Filter/> : ''}
                        </div>
                        <p>12,234 recipes found relating to: Pizza</p>
                        <this.SearchResults />
                    </div>
                </section>
            </div>
        );
    }
    

    
    SearchResults() {
        const testObject = [
            {name: "Pizza"},
            {name: "Carrot"},
            {name: "Celery"},
            {name: "Soup"},
            {name: "Chocolate"},
            {name: "Coffee"},
            {name: "Hot Pocket"},
            {name: "Water"}
        ]
        const listResults = testObject.map((result) => <SearchResult name={result.name} key={result.name}/>)
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