import { createSlice } from "@reduxjs/toolkit";
import { RateType } from "../models";


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

const ratesSlice = createSlice({
  name: "rates",
  initialState: initialState,
  reducers: {
    getRates(state, action) {
      /* console.log("getRates", action, state) */
      state.error = 'id:11231'
    }
  }
})

export const { actions, reducer } = ratesSlice;
export const { getRates } = actions;
export default reducer;

