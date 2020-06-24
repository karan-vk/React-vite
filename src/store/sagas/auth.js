import { put } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";

export function* logoutSaga(actions) {
  yield localStorage.removeItem("token");
  yield localStorage.removeItem("expirationDate");
  yield localStorage.removeItem("userId");
  yield put({
    type: actionTypes.AUTH_LOGOUT,
  });
}
