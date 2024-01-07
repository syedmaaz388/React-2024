import './App.css';
import Switch from "react-switch";
import { useState } from 'react';




function App() {

  const [Mode,setMode] = useState("LightCard");

  function ChangeMode(){
    setMode(Mode === "LightCard" ? "DarkCard" : "LightCard");
  }

  const getImageSource = () => {
    return Mode === "LightCard"
    ? "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      : "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  };

  return (
    <div className={Mode === "LightCard" ? "App" : "DarkApp"}>
      <div className={Mode}>
        <div className='image'>
        <img src={getImageSource()} alt="" width="100%" height="40%" />
        </div>
        <div className='tech' >
          <span>JavaScript</span>
          <span>React Js</span>
          <span>Redux</span>

        </div>
        <div className='content'>
          <h2>Syed Maaz</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.aliquid, aliquam necessitatibus sint temporibus odit. Similique, maiores iure. Veniam, officiis inventore accusamus facilis fugit doloribus.</p>
        </div>
        <div className='btn' >
          <button className={Mode === "LightCard" ? "lightBtn" : "darkBtn"} >Read More</button>
        </div>
      </div>
<Switch onChange={ChangeMode} checked={Mode === "DarkCard"} ></Switch>
    </div>
  );
}

export default App;
