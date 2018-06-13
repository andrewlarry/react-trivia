import React from 'react';

import { QuestionBox, GameButtons } from './Game.styles';
import { Title, TextBox, Text } from '../Start/Start.styles';

const Game = (props) => (
  <div>
    <TextBox>
      <Title>{props.category}</Title>
    </TextBox>
    <QuestionBox>
      <Text>{props.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}</Text>
    </QuestionBox>
    <Text>{props.number} / {props.count}</Text>
    <GameButtons select={props.select} />
  </div>

);


export default Game;
