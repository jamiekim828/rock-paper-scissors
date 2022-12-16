import React, { useState, useEffect } from 'react';

import './Game.css';
import Score from '../Score';
import rock from '../../images/icon-rock.svg';
import paper from '../../images/icon-paper.svg';
import scissors from '../../images/icon-scissors.svg';
import rule from '../../images/image-rules.svg';

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
  const [ruleOpen, setRuleOpen] = useState(false);

  useEffect(() => {
    if (winner !== 'start') {
      setShowResult(true);
    }
  }, [winner]);

  const handleShowRule = () => {
    setRuleOpen(!ruleOpen);
  };

  return (
    <div>
      <div>
        <Score winner={winner} score={score} replay={replay} />
      </div>
      {ruleOpen && (
        <dialog
          className='rule-pop-div'
          style={{ position: 'absolute', zIndex: '10', marginTop: '130px' }}
          open
          onClick={handleShowRule}
        >
          <img className='rule-pop' src={rule} alt='rule' />
        </dialog>
      )}
      {winner === 'start' || showResult === false ? (
        <div className='game-div'>
          <div className='game-div2'>
            <div className='paper' onClick={() => handlePaperClick()}>
              <img src={paper} alt='paper' />
            </div>
            <div className='scissors' onClick={() => handleScissorsClick()}>
              <img src={scissors} alt='scissors' />
            </div>
          </div>
          <div className='rock' onClick={() => handleRockClick()}>
            <img src={rock} alt='rock' />
          </div>
        </div>
      ) : (
        <div>
          <div className='after-play-div'>
            <div className='result-img'>
              <div>
                <p className='chosen'>YOUR PICK {user.toUpperCase()}</p>
                <div className='user-chosen'>
                  {user === 'rock' && <img src={rock} alt='rock' />}
                  {user === 'paper' && <img src={paper} alt='paper' />}
                  {user === 'scissors' && <img src={scissors} alt='scissors' />}
                </div>
              </div>
              <div>
                <p className='chosen'>COMPUTER PICK {computer.toUpperCase()}</p>
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
        <button onClick={handleShowRule}>Rule</button>
        <button>Big Game</button>
      </div>
    </div>
  );
}
