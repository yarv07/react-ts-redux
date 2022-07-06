import {combineReducers} from "redux";
import rateReducer from "./rate";


const rootReducer = combineReducers ({
  data: rateReducer,
})

export default rootReducer