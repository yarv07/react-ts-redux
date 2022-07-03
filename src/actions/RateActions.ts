import { Dispatch } from "redux";
import { RateDispatchTypes, RATE_LOADING, RATE_FAIL, RATE_SUCCESS } from "./ActionTypes";
import axios from "axios";

export const GetRate = (amount:number, currencyFrom:string, currencyTo:string) => async (dispatch: Dispatch<RateDispatchTypes>) => {
  try {
    dispatch({
      type: RATE_LOADING
    })
    const res = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${currencyTo}&from=${currencyFrom}&amount=${amount}&apikey=hPDnxRazWejf4dPC3PcoGtdFwbQ7a74x`)
    dispatch({
      type: RATE_SUCCESS,
      payload: res.data
    })

  } catch (error) {
    dispatch({
      type: RATE_FAIL
    })
    
  }
}