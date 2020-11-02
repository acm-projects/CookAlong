import React from "react";
import { Link } from "react-router-dom"
import { Button } from "react-bulma-components"

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {toSerach: ''}

        console.log(global.config.API_KEY);
    }

    handleSearchChange = (event) => {
        this.setState({toSerach: event.target.value})
    }

    render() {
        return (
            <section className="hero is-dark is-fullheight hero-parent">
                <div className="bg"></div>
                <div className="hero-body mx-0 my-0 px-0 py-0">
                    <div className="container columns is-fluid is-centered is-multiline mx-0 my-0 px-0 py-0 ">
                        <div className="column is-full has-text-justified mx-0 my-0 px-0 py-0">
                            <p className="title-home">CookAlong</p>
                        </div>
                        <form> 
                            <div className="column is-full field has-addons has-addons-centered">
                                <input className="input is-rounded" type="text" placeholder="Search for a recipe" 
                                onChange={this.handleSearchChange} value={this.state.toSerach} style={{ width: "70vw" }}></input>
                            </div>
                            <div className="column is-full field has-addons has-addons-centered">
                                <Link to={{pathname: `search/${this.state.toSerach}`}}><Button className="home-button" color="light">Search</Button></Link>
                                <button className="home-button button is-light is-normal">Random Recipe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}