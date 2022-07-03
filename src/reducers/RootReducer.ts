import {combineReducers} from "redux";
import rateReducer from "./RateReducer";

const RootReducer = combineReducers ({
  data: rateReducer
})

export default RootReducer