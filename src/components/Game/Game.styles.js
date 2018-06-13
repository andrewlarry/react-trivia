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
    paddingTop: '100px'
  }
}

export const QuestionBox = styled.div`
  max-width: 80%;
  margin: 50px;
  border: 1px solid black;
`;

// Game Buttons
const GameButtonsShell = (props) => {
  return (
    <div className={props.classes.wrapper}>
      <CardActions className={props.classes.action}>
        <Button
          id="True"
          size="medium"
          onClick={props.select}
          className={props.classes.button}
        >True</Button>
        <Button 
          id="False"
          size="medium"
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