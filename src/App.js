import React, { useState, useEffect } from 'react';
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
  const [winner, setWinner] = useState('start');
  const [score, setScore] = useState(10);
  const [result, setResult] = useState('');

  useEffect(() => {
    if (user === 'rock') {
      if (computer === 'scissors') {
        return setWinner('user');
      } else if (computer === 'paper') {
        return setWinner('computer');
      } else if (computer === 'rock') {
        return setWinner('tie');
      }
    }
    if (user === 'paper') {
      if (computer === 'rock') {
        return setWinner('user');
      } else if (computer === 'paper') {
        return setWinner('tie');
      } else if (computer === 'scissors') {
        return setWinner('computer');
      }
    }
    if (user === 'scissors') {
      if (computer === 'rock') {
        return setWinner('computer');
      } else if (computer === 'paper') {
        return setWinner('user');
      } else if (computer === 'scissors') {
        return setWinner('tie');
      }
    }
  }, [user, computer]);

  const handleRockClick = () => {
    setUser('rock');
    setComputer(computerChoice);
    setWinner('');
  };
  const handlePaperClick = () => {
    setUser('paper');
    setComputer(computerChoice);
    setWinner('');
  };
  const handleScissorsClick = () => {
    setUser('scissors');
    setComputer(computerChoice);
    setWinner('');
  };

  console.log(winner);
  const replay = () => {
    setUser('');
    setComputer('');
    setWinner('start');
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
                user={user}
                computer={computer}
                winner={winner}
                replay={replay}
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
