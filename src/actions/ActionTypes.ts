/* export interface ICurrenciesRates {
  UAH: number;
  EUR: number;
  GBP: number;
  USD: number;
}


export interface IRatesData {
  success: boolean,
  timestamp: number,
  base: string,
  date: string,
  rates: ICurrenciesRates

} */
export const RATE_LOADING = "RATE_LOADING"
export const RATE_FAIL = "RATE_FAIL"
export const RATE_SUCCESS = "RATE_SUCCESS";

export type RateType = {
  success: boolean,
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


export interface RateLoading {
  type: typeof RATE_LOADING
}

export interface RateFail {
  type: typeof RATE_FAIL
}

export interface RateSuccess {
  type: typeof RATE_SUCCESS,
  payload: RateType
}

export type RateDispatchTypes = RateLoading | RateFail | RateSuccess
