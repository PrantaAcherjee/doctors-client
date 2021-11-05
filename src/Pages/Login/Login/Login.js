import { Container, Grid, Typography,TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from "../../../images/login.png"

const Login = () => {
const [loginData,setLoginData]=useState({});
const handleLoginSubmit=e=>{
alert('submit boss')
        e.preventDefault();
    }

    const handleOnChange=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData}
        newLoginData[field]=value;
        setLoginData(newLoginData);
        // console.log(field,value);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{mt:10}} item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                 Login
                </Typography>
               <form onSubmit={handleLoginSubmit}>
               <TextField
               style={{width:'75%',m:1}}
                 label="Your E-mail"
                 name="Email"
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
            

                <Button variant="contained" type="submit" sx={{width:'75%',m:2}}>Login</Button>
               </form>

               <NavLink
            style={{textDecoration:'none'}}
            to="/register">
            <Button variant="text">
                New USER? Please Register
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

export default Login;