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
  score,
}) {
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (winner !== 'start') {
      setShowResult(true);
    }
  }, [winner]);

  return (
    <div>
      <div>
        <Score winner={winner} score={score} />
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
        </div>
      ) : (
        <div>
          <div className='after-play-div'>
            <div className='result-img'>
              <div>
                <p className='chosen'>You chose {user}</p>
                <div className='user-chosen'>
                  {user === 'rock' && <img src={rock} alt='rock' />}
                  {user === 'paper' && <img src={paper} alt='paper' />}
                  {user === 'scissors' && <img src={scissors} alt='scissors' />}
                </div>
              </div>
              <div>
                <p className='chosen'>Computer chose {computer}</p>
                <div className='computer-chosen'>
                  {computer === 'rock' && <img src={rock} alt='rock' />}
                  {computer === 'paper' && <img src={paper} alt='paper' />}
                  {computer === 'scissors' && (
                    <img src={scissors} alt='scissors' />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              className='replay-btn'
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
