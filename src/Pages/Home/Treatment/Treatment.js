import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import treatment from "../../../images/treatment.png";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Treatment = () => {
  return (
    <div>
       <Container style={{marginTop:'5rem'}}>
        <Box sx={{ width: '100%' }}>
      <Grid style={{display:'flex',justifyContent:"center",alignItems:'center'}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={12} md={6}>
        <img style={{height:'90%',width:'90%',borderRadius:'20px'}} src={treatment} alt="" />  
        </Grid>
        <Grid xs={12} md={6}>
        <Typography variant='h3' style={{margin:'4rem 0'}}>
          Exceptional Dental Care,<br/> On Your Terms
        </Typography>
        <p style={{letterSpacing:'0.3px',textAlign:'justify',paddingLeft:'1rem',color:'gray',lineHeight:'28px'}}>
        Description of the eight EQF levels. Each of the 8 levels of the EQF is defined by a set of descriptors indicating the learning outcomes relevant to.Description of the eight EQF levels. Each of the 8 levels of the EQF is defined by a set of descriptors indicating the learning outcomes relevant to.Description of the eight EQF levels. Each of the 8 levels of the EQF is defined by a set of descriptors indicating the learning outcomes relevant to.Description of the eight EQF levels. Each of the 8 levels of the EQF is defined by a set of descriptors indicating the learning outcomes relevant to.
        </p>
        <br/>
        <Button style={{background:'cyan',marginTop:'4rem'}} variant='contained'>Learn More</Button>
        </Grid>        
      </Grid>
     </Box>
     </Container>
    </div>
  )
}

export default Treatment