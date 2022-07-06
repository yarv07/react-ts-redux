import { useEffect, useState } from "react";
import axios from "axios";
import '../styles/styles.css'
import { UseStateType } from "../store/models";



function CurrentExchangeRates() {
  const [base, setBase] = useState('UAH');
  const [ratesList, setRatesList] = useState<UseStateType[]>([]); 

  useEffect(() => {
    getRates('UAH');
  }, []);

  const getRates = async (base:string) => {
    try {
      const res = await axios.get(`https://api.apilayer.com/exchangerates_data/latest?symbols=UAH,EUR,GBP,USD&base=${base}&apikey=hPDnxRazWejf4dPC3PcoGtdFwbQ7a74x`);
      const { rates } = res.data;

      const ratesTemp:any = [] //  insert useState type
      for (const [symbol, rate] of Object.entries(rates)) {
        ratesTemp.push({symbol, rate});
      }

      setRatesList(ratesTemp)
    } catch (error) {
      console.log(error)
    }
  };

  const handleOnChange = (e:any) => {
    const value = e.target.value
    getRates(value)
    setBase(value)
  };

  const selectRatesList = () => {
    return ratesList.map((d:any) => {
      const currency = d.symbol;
      return <option value={currency} key={currency}>{currency}
      </option>
      })
  };

  const ulRatesList = () => 
    ratesList.map((d:any) => 
      (<li  className="li" key={d.symbol}>to {d.symbol} = {d.rate.toFixed(2)}</li>)
    )

  return (
    <div>
      <select className="select" value={base} onChange={handleOnChange}>{selectRatesList()}</select>
      <ul>{ulRatesList()}</ul>
    </div>
  )
}

export default CurrentExchangeRates