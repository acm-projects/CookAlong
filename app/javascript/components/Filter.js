import React from "react";
export default class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "diets": false,
            "allergies": false,
            "cuisines": false,
            "time": false,
        }
        this.hideFilters = this.hideFilters.bind(this);
        this.filterToRender;
        this.defaultStates = {
            "diets": false,
            "allergies": false,
            "cuisines": false,
            "time": false
        }
    }
    render() {
        return (
            <div>
                <div className="tabs is-centered filter-tabs">
                    <ul>
                        <li><a onClick={() => this.hideFilters("diets")}>Diets</a></li>
                        <li><a onClick={() => this.hideFilters("allergies")}>Allergies</a></li>
                        <li><a onClick={() => this.hideFilters("cuisines")}>Cuisines</a></li>
                        {/*<li><a onClick={() => this.hideFilters("time")}>Time</a></li>*/}
                    </ul>
                </div>
                    {this.filterToRender}
            </div>
        )
    }

    hideFilters(clickedFilter) {
        this.setState({
            ...this.defaultStates,
            [clickedFilter.toLowerCase()]: !this.state[clickedFilter.toLowerCase()]
          }, () => this.renderFilter())
    }

    renderFilter() {
        console.log(this.state)
        if(this.state['diets']) {
            this.filterToRender = <this.Diets/>
        }
        else if(this.state['allergies']) {
            this.filterToRender = <this.Allergies/>
        }
        else if(this.state['cuisines']) {
            this.filterToRender = <this.Cuisines/>
        }
        else if(this.state['time']) {
            this.filterToRender = <this.Time/>
        }
        else {
            this.filterToRender = null;
        }
        this.forceUpdate();
    }

    Diets() {
        let dietFilters = ["Gluten Free","Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan", "Pescetarian", "Paleo", "Primal", "Whole30"]
        const filterButtons = dietFilters.map((filter) => { return <p className="control" key={filter}><a className="button">{filter}</a></p> })
        return (
            <div className="field is-grouped is-grouped-multiline is-grouped-centered filter-button-grid" id="diets">
                {filterButtons}
            </div>
        )
        
    }
    Allergies() {
        let allergyFilters = ["Dairy","Egg","Gluten","Grain","Peanut","Seafood","Sesame","Shellfish","Soy","Sulfite","Tree Nut","Wheat"]
        const filterButtons = allergyFilters.map((filter) => { return <p className="control" key={filter}><a className="button" >{filter}</a></p> })
        return (
            <div>
            <div className="field is-grouped is-grouped-multiline is-grouped-centered filter-button-grid" id="diets">
                {filterButtons}
            </div>
            </div>
        )
    }
    Cuisines() {
        let cuisineFilters = ["African", "American", "British", "Cajun", "Caribbean","Chinese","Eastern European","European","French","German","Greek","Indian","Irish","Italian","Japanese",
                               "Jewish", "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic","Southern","Spanish","Thai","Vietnamese"];

        const filterButtons = cuisineFilters.map((filter) => { return <p className="control" key={filter}><a className="button">{filter}</a></p> })
        return (
            <div className="field is-grouped is-grouped-multiline is-grouped-centered filter-button-grid" id="cuisines">
                {filterButtons}
            </div>
        )
    }
    Time() {
        return (
            <div>

            </div>
        )
      }
      
    


}

