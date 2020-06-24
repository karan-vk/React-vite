import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const inittalState = {
  ingredient: null,
  totalPrice: 5,
  error: false,
  building: false,
};
const IGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};
const addIngs = (state, action) => {
  const updatedIngtrdemt = {
    [action.indgredientName]: state.ingredient[action.indgredientName] + 1,
  };
  const updatedIngredients = updateObject(state.ingredient, updatedIngtrdemt);
  const updatedstate = {
    ingredient: updatedIngredients,
    totalPrice: state.totalPrice + IGREDIENT_PRICES[action.indgredientName],
    building: true,
  };
  return updateObject(state, updatedstate);
};
const removeIngs = (state, action) => {
  const updatedIng = {
    [action.indgredientName]: state.ingredient[action.indgredientName] - 1,
  };
  const updatedIngs = updateObject(state.ingredient, updatedIng);
  const updatedState = {
    ingredient: updatedIngs,
    totalPrice: state.totalPrice - IGREDIENT_PRICES[action.indgredientName],
    building: true,
  };
  return updateObject(state, updatedState);
};
const setIngs = (state, action) => {
  return updateObject(state, {
    ingredient: action.ingredient,
    totalPrice: 5,
    error: false,
    building: false,
  });
};
const fetch = (state, action) => updateObject(state, { error: true });

const reducer = (state = inittalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngs(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngs(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngs(state, action);
    case actionTypes.FETCH_INGREDIENT_FAILED:
      return fetch(state, action);
    default:
      return state;
  }
};
export default reducer;
