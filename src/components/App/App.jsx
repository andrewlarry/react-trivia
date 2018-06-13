import React, { Component } from 'react';

import { AppBox } from './App.styles';

import Start from '../Start';
import Game from '../Game';
import Gameover from '../Gameover';
class App extends Component {
  constructor() {
    super();
    this.state = {
      started: false,
      index: 0,
      questions: [],
      score: 0,
      gameover: false,
      results: [],
    };

    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
    this.select = this.select.bind(this);
  }

  componentDidMount() {
    // Prefetch first set of questions
    fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then(res => res.json())
      .then(json => {
        this.setState({ questions: json.results });
      })
      .catch(err => console.log(err))
  }

  startGame() {
    this.setState({ 
      started: true, 
      gameover: false,
      index: 0,
      score: 0,
      results: [],
    });
  }

  endGame() {
    this.setState({ started: false, gameover: true });
    fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then(res => res.json())
      .then(json => {
        console.log(json.results);
        this.setState({ questions: json.results });
      })
      .catch(err => console.log(err))
  }

  select(e) {
    // "True" or "False"
    const choice = e.target.id;
    const questionObj = this.state.questions[this.state.index];

    const newResults = [...this.state.results];
    const result = { question: questionObj.question };

    if (choice === questionObj.correct_answer) result.correct = true;
    else result.correct = false;

    newResults.push(result);

    this.setState({
      index: this.state.index + 1,
      results: newResults,
    })
    
    if (this.state.index + 1 === this.state.questions.length) return this.endGame();
  }

  render() {
    const currQuestion = this.state.questions[this.state.index];
    let view = null;
    if (!this.state.started && !this.state.gameover) {
      view = <Start startGame={this.startGame} ready={this.state.questions.length > 0} />
    } else if (this.state.started && !this.state.gameover) {
      view = (
      <Game 
        category={currQuestion.category}
        question={currQuestion.question}
        number={this.state.index + 1}
        count={this.state.questions.length}
        select={this.select}
      />
      )
    } else {
      view = <Gameover results={this.state.results} startGame={this.startGame} />
    }
    return (
     <AppBox>
       {view}
     </AppBox>
    );
  }
}

export default App;
