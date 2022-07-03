import { RateDispatchTypes, RateType, RATE_LOADING,RATE_FAIL,RATE_SUCCESS } from "../actions/ActionTypes"

interface DefaultStateI {
  loading: boolean,
  data?: RateType

}


const defaultState:DefaultStateI = {
  loading: false
}


const rateReducer = (state: DefaultStateI = defaultState, action: RateDispatchTypes): DefaultStateI => {
  switch(action.type){
    case RATE_FAIL:
      return {
        loading:false
      }
    case RATE_LOADING:
      return {
        loading:true
      }
    case RATE_SUCCESS:
      return {
        loading: true,
        data: action.payload
      }
    default:
      return state
      
  }
}

export default rateReducer