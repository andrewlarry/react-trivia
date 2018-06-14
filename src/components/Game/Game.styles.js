import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

// Style to override MUI components 
const GameStyles = {
  action: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',

  },
  button: {
    margin: '0px 10px',
    backgroundColor: 'blue',
    color: 'white',
  },
  wrapper: {
    position: 'absolute',
    width: '100%',
    margin: 'auto',
    bottom: '20px',
  },
}

export const Title = styled.h1`
  position: absolute;
  top: 3%;
  width: 100%;
  margin: auto;
  text-align: center;
  font-size: 2rem;
`;

export const CountBox = styled.h2`
  position absolute;
  top: 20%;
  width: 100%;
  margin: auto;
  text-align: center;
  font-size: 1.5rem;
`
export const QuestionBox = styled.div`
  position absolute;
  top: 30%;
  width: 80%;
  margin: 50px;
  border: 1px solid black;
`;

export const GameBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

// Game Buttons
const GameButtonsShell = (props) => {
  return (
    <div className={props.classes.wrapper}>
      <CardActions className={props.classes.action}>
        <Button
          id="True"
          size="large"
          onClick={props.select}
          className={props.classes.button}
        >True</Button>
        <Button 
          id="False"
          size="large"
          onClick={props.select}
          className={props.classes.button}
        >False</Button>
      </CardActions>
    </div>
    
  );
};

GameButtonsShell.propTypes = {
  classes: PropTypes.object.isRequired,
};

const GameButtons = withStyles(GameStyles)(GameButtonsShell);

export { GameButtons };