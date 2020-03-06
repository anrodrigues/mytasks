import React, { useState } from 'react'
import AppBar from '../shared/navbar/external'
import Background from '../../assets/background.png'
import { makeStyles } from '@material-ui/core/styles';

const useStyles2 = makeStyles(theme => ({
  background: {
    backgroundImage: `${Background}`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
}));


export default function landingPage() {
  const [ classes, setclasses ] = useState('');

  return (
    <div>
      <AppBar></AppBar>
      <div className={classes.background}></div>
   
    </div>
  )
}


