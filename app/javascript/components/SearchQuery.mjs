import axios from "axios";

export default class SearchRecipe {
    constructor(query) {
        this.query = query;
        this.response;
        this.parsedValue = [];
    }

    async getSearchResult() {
        this.query.replace(" ", "+"); //The API needs multiple word search in the [word1]+[word2]+[word...] format

        await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=0a7373376120478498c58837be29c272&number=20&addRecipeInformation=true&addRecipeNutrition=true&instructionsRequired=true&query=" + this.query) 
        .then ( response => {
            this.response = response.data;
        })
    }

    async parse() {
        // const testObject = [
        //     {name: "Pizza", calories: 100, time: 50, imgUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"},
        //     {name: "Lasagna", calories: 700, time: 66, imgUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"},
        //     {name: "Pasta", calories: 600, time: 45, imgUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"},
        //     {name: "Spaghetti", calories: 500, time: 534, imgUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"},
        //     {name: "Water", calories: 200, time: 346, imgUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"},
        //     {name: "Salt", calories: 400, time: 346, imgUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"},
        //     {name: "Air", calories: 0, time: 36, imgUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"}
        // ]
        // return testObject;
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