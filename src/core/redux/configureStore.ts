import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import reducer from "./reducers";
import {
  composeWithDevTools,
} from "@redux-devtools/extension";

const composeEnhancers = composeWithDevTools({
  trace: true,
});
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
