import {IRateLoading, IRateFail, IRateSuccess} from '../models/index'

export const RATE_LOADING = "RATE_LOADING"
export const RATE_FAIL = "RATE_FAIL"
export const RATE_SUCCESS = "RATE_SUCCESS";

export type RateDispatchTypes = IRateLoading | IRateFail | IRateSuccess
