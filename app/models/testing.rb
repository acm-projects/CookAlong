require_relative 'recipe_search'
require_relative 'recipe_instructions'

#Simply used to test recipe and instructions searching / parsing
class Testing
    def test_search
        testing = Recipe_search.new "Taco&number=2"
        testing.test_print
    end
    def test_instructions
        testing = Recipe_instructions.new "324694"
        testing.test_print
    end
end
tester = Testing.new
puts "\n \n"
tester.test_search
puts "\n"
tester.test_instructions