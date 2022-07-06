import { RATE_LOADING, RATE_FAIL, RATE_SUCCESS } from "../actionTypes/rate";

export type RateType = {
  rates: {
    UAH: number;
    EUR: number;
    GBP: number;
    USD: number;
  },
  base: string,
  result: number,
  query: {
    from: string,
    to: string,
    amount: number
  }
}

export interface IRateLoading {
  type: typeof RATE_LOADING
}

export interface IRateFail {
  type: typeof RATE_FAIL,
  payload: string
}

export interface IRateSuccess {
  type: typeof RATE_SUCCESS,
  payload: Record<string, RateType>
}

export type UseStateType = {
  symbol: string, 
  rate: number
}