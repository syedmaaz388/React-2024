import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  // const Url = `https://api.adviceslip.com/advice`
  const [Advice,setAdvice] = useState('');
  const [count,setCount] = useState(0);

   function GetAdvice(){
    axios.get('https://api.adviceslip.com/advice')
    .then(response => {
      setAdvice(response.data.slip.advice)
      setCount(count + 1);

    })
   }
   useEffect(() => {
    GetAdvice()
   },[])

  

  return (
    <div className="App">
     <h1>{Advice}</h1>
     <button onClick={GetAdvice} >Get Advice</button>
     <h2>{count}</h2>
    </div>
  );
}

export default App;
