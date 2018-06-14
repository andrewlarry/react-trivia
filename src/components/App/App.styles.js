import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

// Style to override MUI components 
const AppStyles = {
  card: {
    height: '85vh',
    width: '40vw',
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'gainsboro'
  }
}


// App Card
const AppBoxShell = (props) => {
  return (
    <Card className={props.classes.card}>
      {props.children}
    </Card>
  );
};

AppBoxShell.propTypes = {
  classes: PropTypes.object.isRequired,
};

const AppBox = withStyles(AppStyles)(AppBoxShell);

export { AppBox };

