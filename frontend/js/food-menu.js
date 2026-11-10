
const foodMenu = {
    breakfast: ["Breakfast sandwich - $5.00", "Bagel with Cream Cheese - $2.50", "Fruit Cup - $3.00"],
    lunch: ["Cheeseburger - $7.00", "Chicken Rice Bowl - $8.00", "Veggie Wrap - $6.50"],
    drinks: ["Coffee - $2.00", "Iced Tea - $2.00", "Boba Tea - $4.50"]
};

const foodList = document.getElementById("food-list");
const mealButtons = document.querySelectorAll(".meal-button");

function showFood(meal) {
    foodList.innerHTML = "";

    for (let i = 0; i < foodMenu[meal].length; i++) {
        const item = document.createElement("li");
        item.textContent = foodMenu[meal][i];
        foodList.appendChild(item);
    }
}

for (let i = 0; i < mealButtons.length; i++) {
    mealButtons[i].addEventListener("click", function () {
        showFood(mealButtons[i].value);
    });
}

showFood("breakfast");
