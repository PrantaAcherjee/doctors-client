import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography ,Container} from '@mui/material';
import { Link} from 'react-router-dom';
import "./Banner.css";

const bannerBg={
    background:`url(${bg})`,   
}
const verticalCenter={
    display:'flex',
    alignItems:'center',
    height:450
}
const Banner = () => {
    return (
         <Container style={bannerBg} sx={{flexGrow:1}}>
             <Grid container spacing={2}>
                 <Grid item style={{...verticalCenter,textAlign:'left'}} xs={12} md={6}>
                  <Box>
                  <Typography className='head-title' variant="h3">
                       Your New Smile <br />
                       Starts Here
                       </Typography> 
                       <Typography variant='h6' sx={{fontSize:13,color:'gray',fontWeight:300,my:3}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione odit sed a quam laudantium debitis aliquid iste provident animi tempore, doloribus possimus itaque officiis!
                       </Typography>
                       <Link style={{textDecoration:'none',color:'white'}} to="/appointment">
                       <Button variant="contained" style={{backgroundColor:"#5CE7ED"}}>Get appointment</Button>
                       </Link>
                  </Box>
                 </Grid>
                 <Grid item xs={12} md={6} style={verticalCenter}>
                     <img className="image" style={{width:'100%'}} src={chair} alt="" />
                 </Grid>
             </Grid>
         </Container>
    );
};

export default Banner;