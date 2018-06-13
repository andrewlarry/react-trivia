import React from 'react';

import { Title, TextBox, Text, StartButton } from './Start.styles';

const Start = (props) => (
  <div>
    <TextBox>
      <Title>Welcome to the Trivia Challenge!</Title>
    </TextBox>
    <TextBox>
      <Text>
        You will be presented with 10 True or False Questions.
        <br />
        <br />
        Can you score 100%?
      </Text>
    </TextBox>
    <StartButton startGame={props.startGame} ready={props.ready} />
  </div>

);


export default Start;
