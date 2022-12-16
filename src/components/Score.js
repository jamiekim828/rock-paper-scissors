import React from 'react';

export default function Score({ winner, score }) {
  return (
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
  );
}
