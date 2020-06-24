import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
// import Swal from "sweetalert2";

const Burger = (props) => {
  // const Toast = Swal.mixin({
  //   toast: true,
  //   position: "bottom",
  //   showConfirmButton: false,
  //   timer: 3000,
  // });
  let Tingredient = Object.keys(props.ingredient)
    .map((igKey) => {
      return [...Array(props.ingredient[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (Tingredient.length === 0) {
    // Toast.fire({ title: "Add Something to the burger" });
    Tingredient = <p>Please start adding Ingredients !!!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {Tingredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default Burger;
