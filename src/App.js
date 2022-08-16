import './App.css';
import Home from './components/home';
import Quiz from './components/quiz';
import Score from './components/score';
import { useState } from 'react';

function App() {
  const [modal, setModal] = useState(true);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [score, getScore] = useState(0);
  return (
    <div className="App">
      {
        modal &&
        <div className='welcome'>
          <Home setModal={setModal} setModal1={setModal1} />
        </div>
      }

      {
        modal1 &&
        <div className='welcome'>
          <Quiz setModal1={setModal1} setModal2={setModal2} getScore={getScore} />
        </div>
      }
      {
        modal2 &&
        <div className='welcome'>
          <Score score={score} />
        </div>
      }
    </div>
  );
}

export default App;
