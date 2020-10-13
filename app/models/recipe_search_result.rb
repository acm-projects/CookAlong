#Stores the info for a single recipe
class Recipe_search_result
    def initialize(id, title, image, cook_time, servings, calories)
        @recipe_id = id
        @recipe_title = title
        @recipe_cook_time = cook_time
        @recipe_image_url = image
        @recipe_servings = servings
        @recipe_calories = calories
    end

    def get_id
        return @recipe_id
    end

    def get_title
        return @recipe_title
    end

    def get_cook_time
        return @recipe_cook_time
    end

    def get_image
        return @recipe_image_url
    end

    def get_servings
        return @recipe_servings
    end

    def get_calories
        return @recipe_calories
    end

    def printInfo
        puts "ID: #{@recipe_id}\nTitle: #{@recipe_title}\nImage: #{@recipe_image_url}\nServings: #{@recipe_servings}\nCook Time: #{@recipe_cook_time}\nCalories: #{@recipe_calories}"
    end
end