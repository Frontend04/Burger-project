import React from "react";

import meatImage from "../../assets/ic-meat.png";
import cheeseImage from "../../assets/ic-sheese.png";
import saladImage from "../../assets/ic-salad.png";
import baconImage from "../../assets/ic-bacon.png";

export const INGREDIENTS = [
  { name: "Meat", price: 80, image: meatImage },
  { name: "Cheese", price: 50, image: cheeseImage },
  { name: "Salad", price: 10, image: saladImage },
  { name: "Bacon", price: 60, image: baconImage },
];

interface IngredientProps {
  name: string;
  index: number;
  count: number;
  addClicked: () => void;
  removeClicked: () => void;
}

const Ingredient: React.FC<IngredientProps> = (props) => (
  <div className="Ingredient">
    <div className="item" key={props.index}>
      <img
        src={INGREDIENTS[props.index].image}
        alt={INGREDIENTS[props.index].name}
      />
      <h4 className={"ing-" + props.name.toLowerCase()}>{props.name}</h4>
      <div className="counter">
        <span className="count">{"x" + props.count}</span>
        <button
          className={props.count ? "btn-remove" : "hidden"}
          onClick={props.removeClicked}
        >
          {" "}
        </button>
        <button className="btn-add" onClick={props.addClicked}>
          {" "}
        </button>
      </div>
    </div>
  </div>
);

export default Ingredient;
