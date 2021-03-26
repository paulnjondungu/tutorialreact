import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Login from './components/login';
import { Route, BrowserRouter,Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  root: {
  minHeight: '100vh',
},
}));
export default function App() {
  const classes = useStyles();
  
  return (
  <div className={classes.root}>

  <BrowserRouter>
     <CssBaseline />
     <Route exact path='/' component={Header} />
     <Route exact path='/login' component={Login} />
     </BrowserRouter>
  </div>
  );
} 



