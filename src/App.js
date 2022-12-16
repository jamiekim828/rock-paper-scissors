import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Game from './components/Game/Game';
import BigGame from './components/BigGame/BigGame';

function App() {
  const original = ['rock', 'paper', 'scissors'];
  const biggame = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  const computerChoice = original[Math.floor(Math.random() * 3)];

  const [user, setUser] = useState('');
  const [computer, setComputer] = useState('');
  const [score, setScore] = useState(10);
  const [result, setResult] = useState('');

  const handleRockClick = () => {
    setUser('rock');
    setComputer(computerChoice);
    console.log(user, computer);
  };
  const handlePaperClick = () => {
    setUser('paper');
    setComputer(computerChoice);
    console.log(user, computer);
  };
  const handleScissorsClick = () => {
    setUser('scissors');
    setComputer(computerChoice);
    console.log(user, computer);
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Game
                handleRockClick={handleRockClick}
                handlePaperClick={handlePaperClick}
                handleScissorsClick={handleScissorsClick}
              />
            }
          ></Route>
          <Route path='/biggame' element={<BigGame />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
