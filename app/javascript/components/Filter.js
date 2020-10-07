import React from "react";
export default class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "diets": false,
            "allergies": false,
            "cuisines": false,
            "time": false
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
                <div className="tabs is-centered">
                    <ul>
                        <li><a onClick={() => this.hideFilters("diets")}>Diets</a></li>
                        <li><a onClick={() => this.hideFilters("allergies")}>Allergies</a></li>
                        <li><a onClick={() => this.hideFilters("cuisines")}>Cuisines</a></li>
                        <li><a onClick={() => this.hideFilters("time")}>Time</a></li>
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
        return (
            <div>
                <label className="checkbox">
                    <input type="checkbox"></input>
                        DIETS HERE
                    </label>
            </div>
        )
    }
    Allergies() {
        return (
            <div>
                <label className="checkbox">
                    <input type="checkbox"></input>
                        ALLERGIES HERE
                    </label>
            </div>
        )
    }
    Cuisines() {
        return (
            <div>
                <label className="checkbox">
                    <input type="checkbox"></input>
                        CUISINES HERE
                    </label>
            </div>
        )
    }
    Time() {
        return (
            <div>
                <label className="checkbox">
                    <input type="checkbox"></input>
                        TIMES HERE
                    </label>
            </div>
        )
      }
      
    


}

