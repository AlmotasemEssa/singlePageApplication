import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import userList from "./reducers/reducer";
import { combineReducers } from "redux";
export default function configureStore(initialState = {}) {
  let reducer = combineReducers({ userList });
  return createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
}
