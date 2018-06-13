import React from 'react';

import { ResultList, PlayAgainButton } from './Gameover.styles';

const Gameover = (props) => {
  console.log(PlayAgainButton);
  return (
    <div>
      <ResultList results={props.results} />
      <PlayAgainButton startGame={props.startGame} />
    </div>
  );
}


export default Gameover;
