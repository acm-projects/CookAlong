import React from "react";
import SearchResult from "./SearchResult";
import Filter from "./Filter"
import SearchRecipe from "./SearchQuery"
import {Link, Route, Router} from 'react-router-dom'
import { Button } from "react-bulma-components"
import "./Globals";

/*
Props:
    numFound = num of recipes found
    searchResult = what was searched
*/
export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isRenderFilter: false};
        this.state = {searchResults: null};
        this.state = {loading: true};
        this.state = {toSerach: ''};
        this.state = {reloadHelper: this.props.match.params.recipe};
        this.resultsToGet = global.config.RESULTS_PER_CALL;

        this.renderFilter = this.renderFilter.bind(this);
        this.displaySearchResults = this.displaySearchResults.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.searchSubmit = this.searchSubmit.bind(this);
        this.loadMoreResults = this.loadMoreResults.bind(this);
    }
    
    handleSearchChange = (event) => {
        this.setState({toSerach: event.target.value})
    }

    searchSubmit() {
        if(this.state.reloadHelper != this.props.match.params.recipe) {
            this.setState({reloadHelper: this.props.match.params.recipe})
            this.componentDidMount();
        }
    }

    //this needs to be async so I can use asynchronous code for API calls. 
    //If I don't do this the API call wouldn't finish before the method would return
    async componentDidMount() {
        this.resultsToGet = global.config.RESULTS_PER_CALL;
        this.searchObject = new SearchRecipe(this.props.match.params.recipe, global.config.RESULTS_PER_CALL);
        await this.searchObject.getSearchResult();
        const testObj = await this.searchObject.parse();
        const listResults = testObj.map((result) => <SearchResult recipeID={result.recipeID} name={result.name} key={result.name} calories={result.calories} time={result.time} imgUrl={result.imgUrl}/>)
        this.setState({searchResults: listResults});
    }

    async loadMoreResults() {
        this.resultsToGet += global.config.RESULTS_PER_CALL;
        this.searchObject = new SearchRecipe(this.props.match.params.recipe, this.resultsToGet);
        await this.searchObject.getSearchResult();
        const testObj = await this.searchObject.parse();
        var listResults = testObj.map((result) => <SearchResult recipeID={result.recipeID} name={result.name} key={result.name} calories={result.calories} time={result.time} imgUrl={result.imgUrl}/>)
        this.setState({searchResults: listResults});
    }

    render() {
        return (
            <div>
            <nav className="navbar navbar-header" role="navigation" aria-label="main navigation">
                <div className="navbar-brand logo">
                    <Link to="/"><a className="navbar-item is-size-3-desktop is-size-3-tablet is-size-4-mobile">CookAlong</a></Link>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start"></div>
                    <div className="navbar-end">
                        <div className="navbar-item"> 
                            <form className="searchForm" onSubmit={this.searchSubmit()}>
                                <div className="field has-addons">
                                    <div className="control is-expanded has-icons-left">
                                        <input className="input input-search" type="text" placeholder="Search for recipes..." onChange={this.handleSearchChange} value={this.state.toSerach}></input>
                                        <span className="icon is-left">
                                            <i className="fas fa-search"></i>
                                        </span>   
                                    </div>
                                    <div className="control">
                                            <Link to={{pathname: `${this.state.toSerach}`}}>
                                                <button className="button" color="light">Search</button>
                                            </Link>
                                    </div> 
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
                <section className="columns search-page"  style={{paddingLeft: "5vw",paddingRight: "5vw",display: "flex"}}>
                    <div className="column has-text-centered">
                        <div className="filter-bar">
                            <nav className="navbar filter-bar">
                                {/*<div className="navbar-brand">
                                    <a className="navbar-item" onClick={this.renderFilter}>Filter</a>
                                </div>
                                <div className="navbar-end">
                                    <p className="navbar-item"> {this.props.numFound} recipes found relating to: {this.props.match.params.recipe}</p>
                                </div> */}
                            </nav>
                        </div>
                        <div className="container">
                            {this.state.isRenderFilter ? <Filter/> : ''}
                         </div>
                        {/*Shows loading if the api call hasn't finished or if the api returned nothing*/
                        this.state.loading || this.state.searchResults == null ? 
                        <div>loading...</div> : 
                        <this.displaySearchResults />}
                    </div>
                </section>
                <div class="box has-text-centered">
                    <Button className="home-button" color="light" onClick={this.loadMoreResults}>Load More Results</Button>
                </div>
            </div>
        );
    }
    
    displaySearchResults() {
        if(this.state.searchResults == null) {
            return <div>loading...</div>;
        }
        else if(this.state.searchResults.length == 0) {
            return <div>No Results Found</div>;
        }
        else { 
            return (
                <div className="columns is-multiline search-grid">
                    {this.state.searchResults}
                </div>);
        }
    }

    renderFilter(){
        this.setState(state => ({
            isRenderFilter: !state.isRenderFilter
        }));
    }
}