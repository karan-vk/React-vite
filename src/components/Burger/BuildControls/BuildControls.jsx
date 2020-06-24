import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/Buildcontrol";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p className={classes.Para}>
        Burger Price : <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            removed={() => props.ingredientRemoved(ctrl.type)}
            added={() => props.ingredientAdded(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        onClick={props.ordered}
        disabled={!props.purchasable}
      >
        {" "}
        {props.isAuth ? "ORDER NOW" : "Signup To order"}
      </button>
    </div>
  );
};
export default BuildControls;
