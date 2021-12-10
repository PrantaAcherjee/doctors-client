import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email,setEmail]=useState("");
    const [success,setSuccess]=useState(false);
    const {token}=useAuth();

    const handleOnBlur=e=>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit= e =>{
        const user={email};
        e.target.reset();
        fetch('https://floating-reaches-07420.herokuapp.com/users/admin',{
            method:'PUT',
            headers:{
                'authorization':`Bearer ${token}`,
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
      .then(res=>res.json())
      .then(data=>{
          if(data.modifiedCount){
              setSuccess(true);
            //   setEmail('')
          }
      })  
      e.preventDefault(); 
    }
    return (
        <div>
        <h2>Make an Admin</h2>
        <form onSubmit={handleAdminSubmit}>
        <TextField id="standard-basic" label="Email" 
        type="email" variant="standard" sx={{width:'50%'}}
        onBlur={handleOnBlur} />
        <Button type="submit" variant="contained">Make Admin</Button>
        </form>
        {success &&<Alert severity="success">Made an admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;