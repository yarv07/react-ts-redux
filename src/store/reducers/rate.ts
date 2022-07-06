import { RateDispatchTypes, RATE_LOADING,RATE_FAIL,RATE_SUCCESS } from "../actionTypes/rate"
import { RateType } from "../models/index"

interface InitialStateI {
  loading: boolean,
  data: Record<string, RateType>,
  error: string | null
}

const initialState:InitialStateI = {
  loading: false,
  data: {},
  error: null
}

const rateReducer = (state: InitialStateI = initialState, action: RateDispatchTypes): InitialStateI => {
  switch(action.type){
    case RATE_FAIL:
      return {
        ...state,
        loading:false,
        error: action.payload
      }
    case RATE_LOADING:
      return {
        ...state,
        loading:true
      }
    case RATE_SUCCESS:
      return {
        ...state,
        loading: true,
        data: action.payload
      }
    default:
      return state
  }
}

export default rateReducer