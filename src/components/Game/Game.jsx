import React from 'react';

import { QuestionBox, GameButtons, GameBox, Title, CountBox } from './Game.styles';
import { TextBox, Text } from '../Start/Start.styles';

const Game = (props) => (
  <GameBox>
    <Title>{props.category}</Title>
    <CountBox>Question: {props.number} / {props.count}</CountBox>
    <QuestionBox>
        <Text>{props.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}</Text>
    </QuestionBox>
    <GameButtons select={props.select} number={props.number} count={props.count}/>
  </GameBox>
  // <div>
  //   <GameBox>
  //     <TextBox>
  //       <Title>{props.category}</Title>
  //     </TextBox>
  //     <QuestionBox>
  //       <Text>{props.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}</Text>
  //     </QuestionBox>
  //     <Text>{props.number} / {props.count}</Text>
  //   </GameBox>
  //   <GameButtons select={props.select} />
  // </div>

);


export default Game;
