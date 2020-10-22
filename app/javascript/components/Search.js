import React from "react";
import SearchResult from "./SearchResult";
import Filter from "./Filter"
import Header from "./Header"
import SearchRecipe from "./SearchQuery"
import { withRouter } from "react-router-dom"

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isRenderFilter: false};
        this.state = {loading: true};
        this.state = {searchResults: null};

        console.log(this.props.match.params.recipe);

        this.renderFilter = this.renderFilter.bind(this);
        this.displaySearchResults = this.displaySearchResults.bind(this);
    }

    //this needs to be async so I can use asynchronous code for API calls. 
    //If I don't do this the API call wouldn't finish before the method would return
    async componentDidMount() {
        console.log("Creating new search");
        this.searchObject = new SearchRecipe(this.props.match.params.recipe);
        await this.searchObject.getSearchResult();
        const testObj = await this.searchObject.parse();
        const listResults = testObj.map((result) => <SearchResult name={result.name} key={result.name} calories={result.calories} time={result.time} imgUrl={result.imgUrl}/>)
        this.setState({searchResults: listResults});
    }

    render() {
        return (
            <div>
                <Header />
                <section className="columns search-page"  style={{paddingLeft: "5vw",paddingRight: "5vw"}}>
                    <div className="column has-text-centered">
                        <div className="filter-bar">
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
                        {/*Shows loading if the api call hasn't finished or if the api returned nothing*/
                        this.state.loading || this.state.searchResults == null ? 
                        <div>loading...</div> : 
                        <this.displaySearchResults />}
                    </div>
                </section>
            </div>
        );
    }
    
    displaySearchResults() {
        return (
            <div className="columns is-multiline search-grid">
                {this.state.searchResults}
            </div>);
    }

    renderFilter(){
        this.setState(state => ({
            isRenderFilter: !state.isRenderFilter
        }));
    }
}