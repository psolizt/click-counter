import { useState } from 'react';
import './App.css';
import Button from './components/button';
import Counter from './components/counter';
import freeCodeCampLogo from './images/freecodecamp-logo.png';

function App() {
  
  const [numCliks, setNumClicks] = useState(0);

  const eventClick = () => {
    setNumClicks(numCliks + 1);
  };

  const countReset = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo'>
        <img className="logo" src={freeCodeCampLogo} alt="Logo de freeCodeCamp"/>
      </div>
      <div className='container'>
        <Counter numCliks={numCliks}/>
        <Button text='Clic' isClickButton={true} eventClick={eventClick}/>
        <Button text='Reiniciar' isClickButton={false} eventClick={countReset}/>
      </div>
    </div>
  );
}

export default App;
