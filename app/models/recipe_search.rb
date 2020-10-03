require 'unirest'
require 'json'
require_relative 'recipe_search_result.rb'
require_relative 'globals.rb'

#Stores a number of recipes returned by a search
class Recipe_search
    def initialize(search_term)
        @recipes = Array.new
        #uncomment this to actually use the api
        #response = Unirest.get(("https://api.spoonacular.com/recipes/search?apiKey=#{$api_key}&instructionsRequired=true&query=" + search_term))
        #recipe_hash = JSON.parse!(response.raw_body)

        #uncomment to see the un-parsed json response (if you're replacing test input you'll need to use this)
        #puts response.raw_body

        #uncomment to see the parsed json hash
        #puts recipe_hash

        #uncomment this to test so you don't actually use the api
        testInput = '{"results":[{"id":782600,"title":"Quinoa Salad with Vegetables and Cashews","readyInMinutes":45,"servings":6,"sourceUrl":"http://foodandspice.blogspot.com/2016/02/quinoa-salad-with-vegetables-and-cashews.html","openLicense":2,"image":"quinoa-salad-with-vegetables-and-cashews-782600.jpg"},{"id":639535,"title":"Citrusy Pecan Garbanzo Couscous: A Salad For Cold Weather","readyInMinutes":45,"servings":2,"sourceUrl":"http://www.foodista.com/recipe/W3MZ2T66/citrusy-pecan-garbanzo-couscous-a-salad-for-cold-weather","openLicense":2,"image":"Citrusy-Pecan-Garbanzo-Couscous--A-Salad-For-Cold-Weather-639535.jpg"},{"id":649931,"title":"Lentil Salad With Vegetables","readyInMinutes":45,"servings":4,"sourceUrl":"http://www.foodista.com/recipe/M6VXBPYY/lentil-salad-with-vegetables","openLicense":2,"image":"Lentil-Salad-With-Vegetables-649931.jpg"}],"baseUri":"https://spoonacular.com/recipeImages/","offset":0,"number":3,"totalResults":262,"processingTimeMs":82,"expires":1602016150942,"isStale":false}'
        recipe_hash = JSON.parse!(testInput)

        id = 0
        title = ""
        cook_time = 0
        servings = 0
        image = ""
        recipe_hash["results"].each do |result| #pulls the useful info out of the parsed recipes
            result.each do |key, value|
                if key == "id"
                    id = value
                elsif key == "title"
                    title = value
                elsif key == "image"
                    image = value
                elsif key == "readyInMinutes"
                    cook_time = value
                elsif key == "servings"
                    servings = value
                end
            end
            recipe = Recipe_search_result.new id, title, image, cook_time, servings
            @recipes.push(recipe)
        end
    end

    def get_recipes
        return @recipes
    end
    
    def test_print
        @recipes.each do |element|
            element.printInfo
            puts "\n"
        end
    end
end

