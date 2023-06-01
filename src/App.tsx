import React, { useState } from "react";
import "./App.css";

import Burger from "./components/Burger/Burger";
import Ingredient from "./components/Ingredient/Ingredient";

interface Ingredient {
  name: string;
  count: number;
}

const App = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { name: "Meat", count: 0 },
    { name: "Cheese", count: 0 },
    { name: "Salad", count: 0 },
    { name: "Bacon", count: 0 },
  ]);

  const increaseIngr = (index: number) => {
    setIngredients((prevIngredients) => {
      const updatedIngredients = [...prevIngredients];
      updatedIngredients[index].count++;
      return updatedIngredients;
    });
  };

  const decreaseIngr = (index: number) => {
    setIngredients((prevIngredients) => {
      if (prevIngredients[index].count > 0) {
        const updatedIngredients = [...prevIngredients];
        updatedIngredients[index].count--;
        return updatedIngredients;
      }
      return prevIngredients;
    });
  };

  return (
    <div className="App burgerInfo">
      <div className="col">
        <h2>Ingredients</h2>
        <div className="col-1">
          {ingredients.map((item, index) => (
            <Ingredient
              name={item.name}
              index={index}
              count={item.count}
              key={index}
              addClicked={() => increaseIngr(index)}
              removeClicked={() => decreaseIngr(index)}
            />
          ))}
        </div>
      </div>
      <div className="col">
        <h2>Burger</h2>
        <Burger data={ingredients} />
      </div>
    </div>
  );
};

export default App;
