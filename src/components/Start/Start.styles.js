import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// Style to override MUI components 
const StartStyles = {
  button: {
    backgroundColor: '#32CD32',
    color: 'white',
  },
}

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
`;

export const TextBox = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: normal;
`;

// Start Button
const StartButtonShell = (props) => {
  return (
    <TextBox>
      <Button 
        size="large"
        disabled={!props.ready}
        className={props.classes.button} 
        onClick={props.startGame}
      >Start</Button>
    </TextBox>
  );
}

StartButtonShell.propTypes = {
  classes: PropTypes.object.isRequired,
}

export const StartButton = withStyles(StartStyles)(StartButtonShell);

