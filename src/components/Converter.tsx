import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {RootStore} from "../Store";
import { GetRate } from "../actions/RateActions";
import { useDispatch } from "react-redux";
import { RATE_FAIL, RATE_LOADING, RATE_SUCCESS } from "../actions/ActionTypes";
import '../styles/styles.css'

function Converter() {
  const dispatch = useDispatch<any>();
  const [amount, setAmount] = useState(1)
  const [currencyFrom, setCurrencyFrom] = useState('')
  const [currencyTo, setCurrencyTo] = useState('')
  const dataState = useSelector((state:RootStore) => state.data);
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(String(event.target.value.split(' ', 1))))
    setCurrencyFrom(String(event.target.value.split(' ').slice(1, 2)))
    setCurrencyTo(String(event.target.value.split(' ').slice(-1)))
  }
  const handleSubmit = () => {
    dispatch(GetRate(amount, currencyFrom, currencyTo))
    dispatch(RATE_LOADING);
    console.log(dataState);
    
  }

  return (
    <div className="containers">
      <input className="input" type="text" onChange={handleChange}/>
      <button className="btn" onClick={handleSubmit}>Result</button>
      <div className="result-text">
        {dataState.data?.result.toFixed(2)}
      </div>
    </div>
  )
}

export default Converter