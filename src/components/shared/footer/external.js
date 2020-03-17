import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '300px',
    background: '#75B09C',
    textAlign: 'center',
    color: '#FFF',
    display: 'flex',
    alignItems: 'center'
  },
  list: {
    listStyle: 'none'
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
  
        <Grid item xs={4}>
          <h2>MyGoals</h2>
        </Grid>
        <Grid item xs={4}>
          <ul>
            <li className={classes.list}>Sobre</li>
            <li className={classes.list}>Como functiona</li>
            <li className={classes.list}>Trabalhe conosco</li>
          </ul>
        </Grid>
        <Grid item xs={4}>
         
        </Grid>
      </Grid>
    </div>
  );
}
