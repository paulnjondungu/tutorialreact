import React, {useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import LockOpenTwoToneIcon from '@material-ui/icons/LockOpenTwoTone';

import { Route, Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/welcome4.jpeg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },

    appbar: {
        background: 'none',
        
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },  
    colorText: {
        color: '#5AFF3D',
    }, 
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '3.5rem',
    },
    login: {
       color: '#5AFF3D',
       fontSize: '4rem',

    },
}));
    export default function Header() {
      const classes = useStyles();
      const [checked,setChecked] = useState(false);
      useEffect(() => {
          setChecked(true);
      },[])

      return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTitle}>
                    Green<span className={classes.colorText}>Leaf.</span>
                </h1>
                <IconButton>
                    <SortIcon className={classes.icon} />
                </IconButton>
                </Toolbar>
            </AppBar>

            <Collapse in={checked} {...(true ? { timeout: 1000 } : {})} 
            collapsedHeight={50}>
            <div className={classes.container}>
                <h1 className={classes.title}>
                    Welcome to<br/> Ad<span className={classes.colorText}>venture.</span>
                </h1>
                <IconButton>
                    <Link to="/login"><LockOpenTwoToneIcon className={classes.login}/></Link>
                
                </IconButton>
            </div>
            </Collapse>
            
        </div>


      );
    }        