import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withStyles } from '@material-ui/core/styles';
import Check from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import TextBox from '../Start/Start.styles';


// Style for to override MUI
const GameoverStyles = {
  root: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  button: {
    backgroundColor: '#32CD32',
    color: 'white',
  },
  buttonBox: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    margin: 'auto',
    bottom: '15px',
  },
  list: {
    position: 'absolute',
    top: '10%',
  }
}



// Play Again Button
const PlayAgainButtonShell = (props) => (
  <TextBox>
    <Button 
      size="large"
      className={props.classes.button} 
      onClick={props.startGame}
    >Play Again</Button>
  </TextBox>
);

PlayAgainButtonShell.propTypes = {
  classes: PropTypes.object.isRequired,
}

export const PlayAgainButton = withStyles(GameoverStyles)(PlayAgainButtonShell);


const Title = styled.h1`
  position: absolute;
  top: 3%;
  width: 100%;
  margin: auto;
  text-align: center;
  font-size: 2rem;
`;

const ListShell = (props) => {
  const { classes } = props;
  let score = 0;
  const summary = props.results.map((result, i)=> {
    let icon = <Clear />
    if (result.correct) {
      score += 1;
      icon = <Check />
    };
    return (
      <ListItem key={i}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={result.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")} />
      </ListItem>
    )
  });
  return (
    <div className={classes.root}>
      <Title> Score: {score} / 10</Title>
      <List className={classes.list} dense>
        {summary}
      </List>
      <div className={classes.buttonBox}>
        <Button 
          size="large"
          className={props.classes.button} 
          onClick={props.startGame}
        >
          Play Again
        </Button>
        </div>
    </div>
  )
}

ListShell.propTypes = {
  classes: PropTypes.object.isRequired,
}

export const ResultList = withStyles(GameoverStyles)(ListShell);


