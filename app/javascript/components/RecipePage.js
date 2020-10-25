import React from 'react';
import Header from './Header';
import InstructionsQuery from "./InstructionQuery.mjs"
import '../../assets/stylesheets/recipe-page.scss';

export default class RecipePage extends React.Component {

    constructor(props) {
        super(props);
        
        this.image = "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=706&q=80";
        this.recipeTitle = "loading...";
        this.time = "loading...";
        this.numIngredients = "loading...";
        this.numSteps = "loading...";
        this.numCalories = "loading...";
        this.servings = "loading...";

        this.ingredients = ["loading..."];
        this.directions = ["loading..."];

        this.state = {loading: true};
        this.state = {searchResults: null};
        this.recipeID = this.props.match.params.id;
    }

    async componentDidMount() {
        this.searchObject = new InstructionsQuery(this.recipeID);
        await this.searchObject.getSearchResult();

        const recipeInfo = await this.searchObject.parse();
        this.image = recipeInfo["image"];
        this.recipeTitle = recipeInfo["recipeTitle"];
        this.time = recipeInfo["time"];
        this.numIngredients = recipeInfo["numIngredients"];
        this.numSteps = recipeInfo["numSteps"];
        this.numCalories = recipeInfo["numCalories"];
        this.servings = recipeInfo["servings"];

        this.ingredients = recipeInfo["ingredients"];
        this.directions = recipeInfo["directions"];

        this.setState({loading: false});
    }

    render() {

        const listIngredients = this.ingredients.map((ingredient)=>{
            return <li>{ingredient}</li>;
        });

        const listDirections = this.directions.map((direction)=>{
            return <li>{direction}</li>;
        });

        return (
            <div>
                <Header />
                <section class="hero is-fullheight-with-navbar hero-section">
                    <div class="hero-body overview">
                        <div class="container">
                            <div class="columns">
                                <div class="column is-two-fifths picture">
                                    <figure class="image">
                                        <img src={this.image}></img>
                                    </figure>
                                </div>
                                <div class="column is-three-fifths info">
                                    <div class="columns">
                                        <div class="column title">
                                            <h1 class="title is-size-1-desktop is-size-2-tablet is-size-3-mobile recipe-title">{this.recipeTitle}</h1>
                                            <div class="columns is-mobile">
                                                <div class="column is-half begin">
                                                    <button class="button is-rounded begin-button">
                                                        <span class="icon">
                                                            <i class="far fa-play-circle"></i>
                                                        </span>
                                                        <span class="text is-size-5-desktop is-size-5-tablet is-size-5-mobile">BEGIN</span>
                                                    </button>
                                                </div>
                                                <div class="column is-half time">
                                                    <span class="icon is-small clock">
                                                        <i class="far fa-clock"></i>
                                                    </span>
                                                    <span class="is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-weight-normal recipe-time">{this.time}</span>
                                                </div>
                                            </div>
                                            <div class="overview-more-info">
                                                <div class="columns is-size-2-desktop is-size-3-tablet is-size-4-mobile is-mobile has-text-weight-normal overview-numbers">
                                                    <div class="column is-one-third ingredients-number">
                                                        <p>{this.numIngredients}</p>
                                                    </div>
                                                    <div class="column is-one-third steps-number">
                                                        <p>{this.numSteps}</p>
                                                    </div>
                                                    <div class="column is-one-third calories-number">
                                                        <p>{this.numCalories}</p>
                                                    </div>
                                                </div>
                                                <div class="columns is-size-4-desktop is-size-5-tablet is-size-6-mobile is-mobile has-text-weight-normal overview-descriptions">
                                                    <div class="column is-one-third ingredients">
                                                        <p>ingredients</p>
                                                    </div>
                                                    <div class="column is-one-third steps">
                                                        <p>steps</p>
                                                    </div>
                                                    <div class="column is-one-third calories">
                                                        <p>calories</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <section class="content">
                        <div class="container ingredients-container">
                            <div class="columns is-mobile">
                                <div class="column is-three-fifths">
                                    <h2 class="subtitle is-size-3-desktop is-size-3-tablet is-size-4-mobile ingredients-title">Ingredients</h2>
                                </div>
                                <div class="column is-one-fifth">
                                    <div class="columns is-mobile units">
                                        <div class="column is-one-third us">
                                            <a class="is-size-6-desktop is-size-6-tablet is-size-7-mobile has-text-weight-normal" href="javascript:void(0)">US</a>
                                        </div>
                                        <div class="column is-two-thirds metric">
                                            <a class="is-size-6-desktop is-size-6-tablet is-size-7-mobile has-text-weight-normal" href="javascript:void(0)">METRIC</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="column is-one-fifth">
                                    <div class="columns servings">
                                        <div class="column">
                                            <h6 class="is-size-6-desktop is-size-6-tablet is-size-7-mobile has-text-weight-normal servings-text">SERVINGS: {this.servings}</h6>
                                        </div>                                                                           
                                        {/*<div class="column is-one-third servings-input">
                                            <div class="field">
                                                <div class="control"> 
                                                    <input class="input is-size-7-desktop is-size-7-tablet is-size-7-mobile is-small" type="text" placeholder={servings}/>
                                                </div>
                                            </div>
                                        </div>*/}
                                    </div>
                                </div>
                            </div>
                            <div class="content is-size-5-desktop is-size-5-tablet is-size-6-mobile ingredients-list">
                                <ul>
                                    {listIngredients}
                                </ul>
                            </div>
                            <div class="directions">
                                <h2 class="subtitle is-size-3-desktop is-size-3-tablet is-size-4-mobile directions-title">Directions</h2>
                                <div class="content is-size-5-desktop is-size-5-tablet is-size-6-mobile directions-list">
                                    <ol>
                                        {listDirections}
                                    </ol>
                                </div>
                            </div>
                            <button class="button is-rounded begin-button-bottom">
                                <span class="icon">
                                    <i class="far fa-play-circle"></i>
                                        </span>
                                <span class="text is-size-5-desktop is-size-5-tablet is-size-6-mobile">BEGIN</span>
                            </button>
                        </div>
                    </section>
                </section>
            </div>
        );
    }
}
