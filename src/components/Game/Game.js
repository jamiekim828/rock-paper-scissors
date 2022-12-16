import React, { useState, useEffect } from 'react';

import './Game.css';
import Score from '../Score';
import rock from '../../images/icon-rock.svg';
import paper from '../../images/icon-paper.svg';
import scissors from '../../images/icon-scissors.svg';

export default function Game({
  handleRockClick,
  handlePaperClick,
  handleScissorsClick,
  user,
  computer,
  winner,
  replay,
}) {
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (winner !== 'start') {
      setShowResult(true);
    }
  }, [winner]);

  console.log(showResult);

  return (
    <div>
      <div>
        <Score />
      </div>
      {winner === 'start' || showResult === false ? (
        <div className='game-div'>
          <div className='rock' onClick={() => handleRockClick()}>
            <img src={rock} alt='rock' />
          </div>
          <div className='game-div2'>
            <div className='paper' onClick={() => handlePaperClick()}>
              <img src={paper} alt='paper' />
            </div>
            <div className='scissors' onClick={() => handleScissorsClick()}>
              <img src={scissors} alt='scissors' />
            </div>
          </div>
          <div className='after-play-div'>
            <div></div>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <button
              onClick={() => {
                replay();
                setShowResult(false);
              }}
            >
              Play again
            </button>
          </div>
        </div>
      )}

      <div className='buttons'>
        <button>Rule</button>
        <button>Big Game</button>
      </div>
    </div>
  );
}
