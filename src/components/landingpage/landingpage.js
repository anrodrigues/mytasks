import React from 'react';
import AppBar from '../shared/navbar/external'
import Background from '../../assets/background.png'
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../shared/footer/external'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  background: {
    backgroundImage: "url(" + Background + ")",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '580px'
  },
  title: {
    margin: '130px 180px',
    display: 'inline-block',
    fontWeight: 'bold',
    fontSize: '40px',
    width: '35%'
  }
}));


export default function LandingPage() {

  const classes = useStyles();

  return (
    <div>
      <AppBar/>

      <div className={classes.background}>
        <h1 className={classes.title}>
          Você não precisa mais
          pular sete ondas para
          realizar seus objetivos.
        </h1>
      </div>

      <Footer/>
    </div>
   
  )
}


