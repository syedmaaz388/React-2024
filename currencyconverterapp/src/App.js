import React, { useEffect } from 'react';
import './App.css';
import CurrencyInput from './CurrencyInput';
import { useState } from 'react';
import axios from 'axios';

function App() {



  const [amount1,setAmount1] = useState(1);
  const [amount2,setAmount2] = useState(1);
  const [currency1,setCurrency1] = useState('USD')
  const [currency2,setCurrency2] = useState('USD')
  const[rates,setRates] = useState([]);

useEffect(() => {
axios.get(`http://api.exchangeratesapi.io/v1/latest?access_key=084868b2b570c12a6aa407a22a79c308`)
.then(response => {
setRates(response.data.rates);
})
},[]);

function format(number){
  return number.toFixed(4);
}

function handleAmount1chnage(amount1){
   setAmount2(format(amount1 * rates[currency2] / rates[currency1]))
   setAmount1(amount1);
}

function handleCurrency1Change(currency1){
  setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
  setCurrency1(currency1)
}

function handleAmount2chnage(amount2){
  setAmount1(format(amount2 * rates[currency1] / rates[currency2]))
  setAmount1(amount2);
}

function handleCurrency2Change(currency2){
 setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
 setCurrency2(currency2)
}

console.log(rates)


  return (
   <div>
  <CurrencyInput 
  onAmountChange = {handleAmount1chnage}
  onCurrencyChange={handleCurrency1Change}
  currencies={Object.keys(rates)}
   amount={amount1}
    currency={currency1} />
  <CurrencyInput
  onAmountChange={handleAmount2chnage}
  onCurrencyChange={handleCurrency2Change}
   currencies={Object.keys(rates)} 
   amount={amount2} 
    currency={currency2} />
   </div>
  );
}

export default App;