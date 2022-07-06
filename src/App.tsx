import {Routes, Route, Link} from 'react-router-dom'
import Converter from "./routes/converter";
import CurrentExchangeRates from "./routes/currentExchangeRates"
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
          <Route path="/rates" element={<CurrentExchangeRates/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App;