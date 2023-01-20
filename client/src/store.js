import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { businessLoginReducer } from "./reducers/businessReducer";

const reducer = combineReducers({
  business: businessLoginReducer,
});

const BusinessFromStorage = localStorage.getItem("business")
  ? JSON.parse(localStorage.getItem("business"))
  : null;

const initialState = {
  business: { BusinessFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
