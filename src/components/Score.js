import React, { useState, useEffect } from 'react';

export default function Score({ winner, score, replay }) {
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    if (score === 0 || score === 6) {
      setFinish(true);
    }
  }, [score]);

  return (
    <div>
      <div className='score-div'>
        <div>
          {winner === 'start' && <p>Click your choice!</p>}
          {winner !== 'start' && winner === 'tie' && (
            <p>
              Tie! Your score is <span>{score}</span>
            </p>
          )}
          {winner !== 'start' && winner !== 'tie' && (
            <p>
              Winner is the {winner}! Your score is <span>{score}</span>
            </p>
          )}
        </div>
      </div>
      <div className='finish'>
        {finish && score === 0 && (
          <div
            onClick={() => {
              replay();
            }}
          >
            <p className='lost'>GAME OVER.</p>
            <p className='lost'>YOU LOST.</p>
          </div>
        )}
        {finish && score === 6 && (
          <div
            onClick={() => {
              replay();
            }}
          >
            <p>YOU WON !!</p>
          </div>
        )}
      </div>
    </div>
  );
}
