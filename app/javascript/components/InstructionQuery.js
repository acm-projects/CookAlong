import axios from "axios";
import "./Globals";

export default class InstructionsQuery {
    constructor(query) {
        this.query = query;
        this.response;
        this.parsedValue = [];
    }

    async getSearchResult() {
        await axios.get(`https://api.spoonacular.com/recipes/${this.query}/information?includeNutrition=true&apiKey=${global.config.API_KEY}`) 
        .then ( response => {
            this.response = response.data;
        })
    }

    async parse() {
        // var testValue = {
        //     image: 'https://spoonacular.com/recipeImages/782600-556x370.jpg',
        //     recipeTitle: 'Quinoa Salad with Vegetables and Cashews',
        //     time: 45,
        //     numIngredients: 15,
        //     numSteps: 6,
        //     numCalories: 1200,
        //     servings: 6,
        //     ingredients: [
        //       'brussels sprouts', 'cherry tomato',
        //       'sunflower seeds',  'pumpkin seeds',
        //       'sesame seeds',     'vegetable',
        //       'olive oil',        'carrot',
        //       'cashews',          'parsnip',
        //       'quinoa',           'spread',
        //       'toast',            'kale',
        //       'seeds'
        //     ],
        //     directions: [
        //       'Line a baking sheet with parchment paper and preheat an oven to 35',
        //       'Toss the parsnip, carrots and Brussels sprouts with 1 tablespoon of the olive oil and spread evenly on the pan. Roast for 30 minutes or until tender, stirring the vegetables half way through the cooking time.Meanwhile, toast the cashews, sunflower seeds, pumpkin seeds and sesame seeds in a dry unoiled skillet over medium-low heat for 10 to 15 minutes, tossing frequently, until the cashews and sesame seeds are lighly browned.Toss the kale with the remaining 3 tablespoons of olive oil in a large salad bowl. Fluff the quinoa and add to the bowl along with the roasted vegetables and cherry tomatoes.',
        //       'Whisk together the dressing ingredients.',
        //       'Pour the dressing over the salad and toss.',
        //       'Serve at room temperature or chilled.',
        //       'Sprinkle each serving with a scattering of toasted cashews and seeds.'
        //     ]
        //   };   
        // return testValue;
        var step;
        var ingredient;
        var image = this.response["image"];
        var recipeTitle = this.response["title"];
        var time = this.response["readyInMinutes"];
        var numIngredients = 0;
        var numSteps = 0;
        var numCalories = this.response["nutrition"]["nutrients"][0]["amount"];
        var servings = this.response["servings"];
        var ingredients = [];
        var directions = [];

        for(step in this.response["analyzedInstructions"][0]["steps"]) {
            directions.push(this.response["analyzedInstructions"][0]["steps"][step]["step"]);
        }

        for(ingredient in this.response["extendedIngredients"]) {
            ingredients.push(this.response["extendedIngredients"][ingredient]["originalString"]);
        }

        numIngredients = ingredients.length;
        numSteps = directions.length;
        this.parsedValue = {image: image, recipeTitle: recipeTitle, time: time, numIngredients: numIngredients, numSteps: numSteps, numCalories: numCalories, servings: servings, ingredients: ingredients, directions: directions}
        return this.parsedValue;
    }
}