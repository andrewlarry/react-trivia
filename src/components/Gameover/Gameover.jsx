import React from 'react';

import { Title } from '../Game/Game.styles';
import { ResultList } from './Gameover.styles';

const Gameover = (props) => {
  return <ResultList results={props.results} startGame={props.startGame} />;
}


export default Gameover;
