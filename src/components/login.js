import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, Shape } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    login: {    

  },
  }));
function Login() {
    
  const classes = useStyles();
  const paperStyle={
    padding :20,
    height:'60vh',
    width:400,
    margin:'60px auto'}
    const avatarStyle={backgroundColor:'#31b791'}
    const btnstyle={margin: '20px 0'}
        
  
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><AccountCircleOutlinedIcon/></Avatar>
                <h2>Login here</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                     control={
                        <Checkbox
                          name="checkedB"
                          color="primary"
                        /> 
                     }
                     label='Remember me'
                     />
                     <Button type='submit' color='primary' 
                      variant="contained"  style={btnstyle} fullWidth>Log in</Button>
                     <Typography> 
                       <Link href="#" >
                        Forgot password ?
                        </Link>
                     </Typography>
                     <Typography> Do you have an account ? 
                       <Link href="#" >
                        Sign up
                        </Link>
                     </Typography>
                
        

            </Paper>
        </Grid>
        
            
    
    );
}
export default Login;