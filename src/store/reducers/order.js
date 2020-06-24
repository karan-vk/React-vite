import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";
const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const purInit = (state) =>
  updateObject(state, { purchased: false, loading: false });
const purBurSt = (state) => updateObject(state, { loading: true });
const purBueSuccess = (state, action) => {
  const newOrder = {
    ...action.orderData,
    id: action.orderId,
  };
  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder),
  });
};
const fetchOrderSuccess = (state, action) =>
  updateObject(state, { orders: action.orders, loading: false });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return purInit(state);

    case actionTypes.PURCHASE_BURGER_START:
      return purBurSt(state);

    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return purBueSuccess(state, action);

    case actionTypes.PURCHASE_BURGER_FAIL:
      return purInit(state);

    case actionTypes.FETCH_ORDERS_START:
      return purBurSt(state);

    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrderSuccess(state, action);

    case actionTypes.FETCH_ORDERS_FAIL:
      return purInit(state);

    default:
      return state;
  }
};
export default reducer;
