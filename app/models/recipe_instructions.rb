require 'unirest'
require 'json'
require_relative 'instruction_step.rb'
require_relative 'globals.rb'

#Holds the instructions for a specific recipe
class Recipe_instructions
    def initialize(id)
        @recipes = Array.new
        #uncomment this to actually use the api
        #response = Unirest.get(("https://api.spoonacular.com/recipes/#{id}/analyzedInstructions?apiKey=#{$api_key}"))
        #recipe_hash = JSON.parse!(response.raw_body)

        #uncomment to see the un-parsed json response (if you're replacing test input you'll need to use this)
        #puts response.raw_body

        #uncomment to see the parsed json hash
        #puts recipe_hash

        #uncomment this to test so you don't actually use the api
        testInput = '[{"name":"","steps":[{"number":1,"step":"Pat the chickpeas dry with a paper towel and throw them into a food processor along with the garlic.","ingredients":[{"id":16057,"name":"chickpeas","localizedName":"chickpeas","image":"chickpeas.png"},{"id":11215,"name":"garlic","localizedName":"garlic","image":"garlic.png"}],"equipment":[{"id":404771,"name":"food processor","localizedName":"food processor","image":"food-processor.png"},{"id":405895,"name":"paper towels","localizedName":"paper towels","image":"paper-towels.jpg"}]},{"number":2,"step":"Puree until smooth.","ingredients":[],"equipment":[]},{"number":3,"step":"Using your clean hands incorporate tahini, sriracha, parsley and onion into the chickpea mixture.","ingredients":[{"id":16057,"name":"chickpeas","localizedName":"chickpeas","image":"chickpeas.png"},{"id":1016168,"name":"sriracha","localizedName":"sriracha","image":"hot-sauce-or-tabasco.png"},{"id":11297,"name":"parsley","localizedName":"parsley","image":"parsley.jpg"},{"id":12698,"name":"tahini","localizedName":"tahini","image":"tahini-paste.png"},{"id":11282,"name":"onion","localizedName":"onion","image":"brown-onion.png"}],"equipment":[]},{"number":4,"step":"Form mixture into four patties and set aside.","ingredients":[],"equipment":[]},{"number":5,"step":"Heat peanut oil in a large skillet over medium heat.","ingredients":[{"id":4042,"name":"peanut oil","localizedName":"peanut oil","image":"peanut-oil.jpg"}],"equipment":[{"id":404645,"name":"frying pan","localizedName":"frying pan","image":"pan.png"}]},{"number":6,"step":"Once the oil begins to shimmer add the patties and cook for three minutes per side or until golden brown.","ingredients":[{"id":4582,"name":"cooking oil","localizedName":"cooking oil","image":"vegetable-oil.jpg"}],"equipment":[],"length":{"number":3,"unit":"minutes"}},{"number":7,"step":"Remove from and place in a hamburger bun.","ingredients":[{"id":18350,"name":"hamburger bun","localizedName":"hamburger bun","image":"hamburger-bun.jpg"}],"equipment":[]},{"number":8,"step":"Top each burger with 2 slices of tomato, 2 slices of cucumber and a dollop of tzatziki.","ingredients":[{"id":11206,"name":"cucumber","localizedName":"cucumber","image":"cucumber.jpg"},{"id":93777,"name":"tzatziki","localizedName":"tzatziki","image":"raita-or-tzaziki.png"},{"id":11529,"name":"tomato","localizedName":"tomato","image":"tomato.png"}],"equipment":[]},{"number":9,"step":"Serve immediately.","ingredients":[],"equipment":[]}]}]'
        recipe_hash = JSON.parse!(testInput)
        
        step_number = 0
        step_instructions = ""
        step_ingrediants = Array.new
        step_equipment = Array.new

        @temp_recipe = Array.new

        recipe_hash.each do |recipe| #Pulls the useful info out of the parsed instructions
            @temp_recipe = Array.new

            recipe["steps"].each do |step|
                step_number = step["number"]
                step_instructions = step["step"]
                step["equipment"].each do |equipment_piece|
                    step_equipment.push(equipment_piece["name"])
                end
                step["ingredients"].each do |ingrediant|
                    step_ingrediants.push(ingrediant["name"])
                end

                step = Instruction_step.new step_number, step_instructions, step_ingrediants, step_equipment

                @temp_recipe.push(step)
            end
            @recipes.push(@temp_recipe)
        end
    end

    def get_recipes
        return @recipes
    end

    def test_print
        @recipes.each do |recipe|
            recipe.each do |step|
                step.print_info
            end
        end
    end
end
