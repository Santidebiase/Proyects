import './App.css';
import freeCodeCampLogo from "./images/FreeCodeCamp_logo.png";
import Button from "./components/Button.jsx";
import Contador from './components/Contador';
import { useState } from 'react';



function App() {

  const [numClicks, setNumClicks] = useState(0);
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt="Logo de FreeCodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClicks={numClicks} />
        <Button
          texto="Click"
          esBtnClick={true}
          onClick={() => {
            setNumClicks(numClicks + 1)
          }}
        />
        <Button
          texto="Reiniciar"
          esBtnClick={false}
          onClick={() => {
            setNumClicks(0)
          }}
        />
      </div>
    </div>
  );
}

export default App;
