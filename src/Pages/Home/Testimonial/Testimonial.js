import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import people1 from "../../../images/people-1.png";
import people2 from "../../../images/people-2.png";
import people3 from "../../../images/people-3.png";


const Testimonial = () => {
  return (
        
      <Container style={{marginBottom:'3rem'}}>
      <Typography style={{color:'cyan',fontSize:'20px',margin:'20px 0px',textAlign:'left'}}>
        TESTIMONIAL
      </Typography>
      <Typography variant='h4' style={{marginBottom:'40px',textAlign:'left'}}>
         What's Our Patients Says !
      </Typography>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={12} md={4}>
           <Paper style={{padding:'1.5rem'}}>
            
            <Typography>
             Get unbiased ratings and reviews for 8500+ products and services from Consumer Reports, plus trusted advice and in-depth reporting on what matters most.
            </Typography>
            <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',marginTop:'1.5rem'}}>
              <div><img src={people1}/></div>
               <div>
               <Typography>Henry Ford</Typography>
               <Typography>California</Typography>
                </div>
              </div>
            
            
           </Paper>
        </Grid>
        <Grid xs={12} md={4}>
        <Paper style={{padding:'1.5rem'}}>
        
        <Typography>
         Get unbiased ratings and reviews for 8500+ products and services from Consumer Reports, plus trusted advice and in-depth reporting on what matters most.
        </Typography>
        <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',marginTop:'1.5rem'}}>
              <div><img src={people2}/></div>
               <div>
               <Typography>Angel Ford</Typography>
               <Typography>California</Typography>
                </div>
              </div>
        </Paper>
        </Grid>
        <Grid xs={12} md={4}>
        <Paper style={{padding:'1.5rem'}}>
        
         <Typography>
         Get unbiased ratings and reviews for 8500+ products and services from Consumer Reports, plus trusted advice and in-depth reporting on what matters most.
         </Typography>
         <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',marginTop:'1.5rem'}}>
              <div><img src={people3}/></div>
               <div>
               <Typography>Somalia Ford</Typography>
               <Typography>California</Typography>
                </div>
              </div>
        </Paper>
        </Grid>
      </Grid>
    </Box>
      </Container>   
    
  )
}

export default Testimonial