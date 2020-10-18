import axios from "axios";

export default class SearchRecipe {
    constructor(query) {
        this.query = query;
        this.response;
        this.parsedValue = [];
    }

    async getSearchResult() {
        await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=0a7373376120478498c58837be29c272&addRecipeInformation=true&addRecipeNutrition=true&instructionsRequired=true&query=" + this.query) 
        .then ( response => {
            this.response = response.data;
        })
    }

    async parse() {
        var result;
        var recipeID;
        var recipeTitle;
        var recipeTime;
        var recipeServings;
        var recipeCalories;
        var recipeImage;
        for(result in this.response["results"]) {

            recipeID = this.response["results"][result]["id"];
            recipeTitle = this.response["results"][result]["title"];
            recipeTime = this.response["results"][result]["readyInMinutes"];
            recipeServings = this.response["results"][result]["servings"];
            recipeCalories = this.response["results"][result]["nutrition"]["nutrients"][0]["amount"];
            recipeImage = this.response["results"][result]["image"];

            this.temp = {name: recipeTitle, calories: recipeCalories, time: recipeTime, imgUrl: recipeImage};
            this.parsedValue.push(this.temp);
        }
        return this.parsedValue;
    }
}