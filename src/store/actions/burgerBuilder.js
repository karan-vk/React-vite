import * as actionTypes from "./actionTypes";
import axios from "../../axios";
export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    indgredientName: name,
  };
};
export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    indgredientName: name,
  };
};
export const setIngredient = (ingredient) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredient: ingredient,
  };
};
export const fetchIngredientFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENT_FAILED,
  };
};
export const initIngredient = () => {
  return (dispatch) => {
    axios
      .get("https://react--burger.firebaseio.com/ingredients.json")
      .then((response) => {
        dispatch(setIngredient(response.data));
      })
      .catch((error) => {
        dispatch(fetchIngredientFailed());
      });
  };
};
