import { Container, Grid, Typography,TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from "../../../images/login.png"

const Register = () => {
    const [loginData,setLoginData]=useState({});
const handleLoginSubmit=e=>{
alert('submit boss')
        e.preventDefault();
        if(loginData.password !==loginData.password2){
            alert('your password did not match');
            return;
        }
    }

    const handleOnChange=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData}
        newLoginData[field]=value;
        setLoginData(newLoginData);
    
    }

    return (
        <Container>
        <Grid container spacing={2}>
            <Grid sx={{mt:10}} item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
            Register
            </Typography>
           <form onSubmit={handleLoginSubmit}>
           <TextField
           style={{width:'75%',m:1}}
             label="Your E-mail"
             name="email"
             type="email"
             onChange={handleOnChange}
            variant="standard" />
            <br />
           <TextField
           style={{width:'75%',m:1}}
             label="Your Password"
             name="password"
             onChange={handleOnChange}
            variant="standard" 
            type="password" />
           <TextField
           style={{width:'75%',m:1}}
             label="Re-Type Password"
             name="password2"
             onChange={handleOnChange}
            variant="standard" 
            type="password" />
        

            <Button variant="contained" type="submit" sx={{width:'75%',m:2}}>Register</Button>
           </form>

           <NavLink
        style={{textDecoration:'none'}}
        to="/register">
        <Button variant="text">
            Already registered? Please Login
        </Button>
        </NavLink>
            </Grid>
            <Grid item xs={4} md={6}>
                <img style={{width:'100%'}} src={login} alt="" />
            </Grid>
        </Grid>
    </Container>

    );
};

export default Register;