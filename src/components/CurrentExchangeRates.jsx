import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {RootStore} from "../Store";
import { GetRate } from "../actions/RateActions";
import { useDispatch } from "react-redux";
import { RATE_FAIL, RATE_LOADING, RATE_SUCCESS } from "../actions/ActionTypes";
import PropTypes from "prop-types"
import axios from "axios";
import CurrencyItem from "./CurrencyItem";
import '../styles/styles.css'



function CurrentExchangeRates() {
  const [base, setBase] = useState('UAH');
  const [ratesList, setRatesList] = useState([]);

  useEffect(() => {
    getRates('UAH');
  }, []);
  const getRates = async (base) => {
    const res = await axios.get(`https://api.apilayer.com/exchangerates_data/latest?symbols=UAH,EUR,GBP,USD&base=${base}&apikey=hPDnxRazWejf4dPC3PcoGtdFwbQ7a74x`);
    const { rates } = res.data;
    const ratesTemp = []
    for (const [symbol, rate] of Object.entries(rates)) {
      ratesTemp.push({symbol, rate});
    }
    setRatesList(ratesTemp)
  };

  return (
    <div>
      <select
        className="select"
        value={base}
        onChange={(e) => {
          const value = e.target.value
          getRates(value)
          setBase(value)
          }}>
        {ratesList.map((d) => <option value={d.symbol} key={d.symbol}>{d.symbol}</option>)}
      </select>
      <ul>
      {ratesList.map((d)=> (<li className="li" key={d.symbol}>to {d.symbol} = {d.rate.toFixed(2)}</li>))}
      </ul>
      
    </div>
  )
}


export default CurrentExchangeRates