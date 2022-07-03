import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {RootStore} from "./Store";
import { GetRate } from "./actions/RateActions";
import { useDispatch } from "react-redux";
import { RATE_FAIL, RATE_LOADING, RATE_SUCCESS } from "./actions/ActionTypes";
import {Routes, Route, Link} from 'react-router-dom'
import Converter from "./components/Converter";
import CurrentExchangeRates from "./components/CurrentExchangeRates"
import axios from "axios"
import '../src/styles/styles.css'

function App() {

  
  return (
    <>
      <header className="header">
        <Link className="converter-title" to="/">Converter</Link>
        <Link className="rates-title" to="/rates">Current Exchange Rates</Link>
      </header>
      <div className="containers">
        <Routes>
          <Route path="/" element={<Converter/>}></Route>
          <Route 
            path="/rates" 
            element={
              <CurrentExchangeRates/>
            }>
          </Route>
        </Routes>
        </div>
    </>
  )
}

export default App;