import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import CheckCircle from '@material-ui/icons/CheckCircle'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import TextBox from '../Start/Start.styles';

const GameoverStyles = {
  root: {
    width: '100%'
  },
  header: {
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#32CD32',
    color: 'white',
  },
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

const ListShell = (props) => {
  const { classes } = props;
  console.log(props.results);
  let score = 0;
  const summary = props.results.map((result, i)=> {
    if (result.correct) score += 1;
    return (
      <ListItem key={i}>
        <ListItemIcon>
          <CheckCircle />
        </ListItemIcon>
        <ListItemText primary={result.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")} />
      </ListItem>
    )
  });
  return (
    <div className={classes.root}>
      <h1 className={classes.header}>Score: {score} / 10</h1>
      <List dense>
        {summary}
      </List>
    </div>
  )
}

ListShell.propTypes = {
  classes: PropTypes.object.isRequired,
}

export const ResultList = withStyles(GameoverStyles)(ListShell);


