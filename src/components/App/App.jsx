import React, { Component } from 'react';

import { AppBox } from './App.styles';

import Start from '../Start';

class App extends Component {
  constructor() {
    super();
    this.state = {
      started: false,
      index: 0,
      questions: [],
      score: 0,
      gameover: false,
    };

    this.startGame = this.startGame.bind(this);
  }

  startGame() {
    this.setState({ started: true, gameover: false });
  }

  endGame() {
    this.setState({ started: false, gameover: true })
  }
  render() {
    let view = null;
    if (!this.state.started) view = <Start startGame={this.startGame} />
    return (
     <AppBox>
       {view}
     </AppBox>
    );
  }
}

export default App;
