import { useState } from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../store/store";
import { getRate } from "../store/actions/rate";
import { useDispatch } from "react-redux";
import '../styles/styles.css'

function Converter() {
  const dispatch = useDispatch<any>();

  const [amount, setAmount] = useState<number>(1)
  const [currencyFrom, setCurrencyFrom] = useState<string>('')
  const [currencyTo, setCurrencyTo] = useState<string>('')

  const dataState = useSelector((state:RootStore) => state.data);

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const sliceValue = String(event.target.value.split(' '))
    setAmount(parseInt(String(event.target.value.split(' ', 1))))
    setCurrencyFrom(sliceValue.slice(1, 2))
    setCurrencyTo(sliceValue.slice(-1))
  }

  const handleSubmit = () => {
    dispatch(getRate(amount, currencyFrom, currencyTo))
  }

  return (
    <div className="containers">
      <input className="input" type="text" onChange={handleChange}/>
      <button className="btn" onClick={handleSubmit}>Result</button>
      <div className="result-text">
        {Number(dataState.data?.result || 0).toFixed(2)}
      </div>
    </div>
  )
}

export default Converter