import React, { Component } from 'react';

import { AppBox } from './App.styles';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
     <AppBox>
       <h1>Hello World</h1>
     </AppBox>
    );
  }
}

export default App;
