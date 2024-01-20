import {
  applyMiddleware,
  legacy_createStore,
  combineReducers,
  compose,
} from "redux";
import {thunk} from "redux-thunk";
import reducer from "./AuthContext/reducer";
 import { reducer as AppReducer } from "./AuthContext/reducer";
 import { reducer as dataReducer } from "./AppContext/reducer";

 const rootRuducer = combineReducers({ AppReducer , dataReducer });

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = legacy_createStore(
  rootRuducer,
  composeEnhancers(applyMiddleware(thunk))
);