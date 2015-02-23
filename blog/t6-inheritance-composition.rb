class Menu
  attr_reader :food_items, :meal
  def initialize(args={})
    @meal = args[:meal]
    @food_items = args[:food_items]  
   end
 end

class LunchMenu < Menu
end

# class FoodItems < LunchMenu  #class hierarchy
#   def initialize(args={})
#     @food = args[:food]
#     @price = args[:price] 
#    end
# end
 
class FoodItems < LunchMenu
  def initialize(food_items)
    @food_items = food_items
  end
end
class FoodItem
  def initialize(args)
    @food = args[:food]
    @price = args[:price]
  end
end 
#  monday_menu = Menu.new(
#   meal: "lunch",
#   food_items: FoodItems.new(
#     food: "taco",
#     price: 2))
# p monday_menu.meal
# p monday_menu.food_items
 beef = FoodItem.new(food: "beef", price: 7)
 sandwich = FoodItem.new(food: "sandwich", price: 5)
  
  tuesday_menu = Menu.new(
    meal: "dinner",
    food_items: FoodItems.new([beef, sandwich]))
  p tuesday_menu.meal
  p tuesday_menu.food_items
