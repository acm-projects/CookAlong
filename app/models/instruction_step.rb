#A single step in a chain of instructions
class Instruction_step
    def initialize(number, instructions, ingrediants, equipment)
        @step_number = number
        @step_instructions = instructions
        @step_ingrediants = ingrediants
        @step_equipment = equipment
    end
    def print_info
        puts "Step Number: #{@step_number}\nInstructions: #{@step_instructions}\nIngrediants: #{@step_ingrediants}\nEquipment: #{@step_equipment}\n \n"
    end
end