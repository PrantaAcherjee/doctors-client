import { Grid, container, Container } from '@mui/material';
import React from 'react';
import Booking from './../Booking/Booking';
import Typography from '@mui/material/Typography';


const bookings=[
    {id:1,
    name:'Teeth Orthodonic',
    time:'08.00 AM-09.00 AM',
    space:10,
    },
    {id:2,
    name:'Cosmatic Dentistry',
    time:'09.00 AM-10.00 AM',
    space:8,
    },
    {id:3,
    name:'Teeth Cleaning',
    time:'10.00 AM-11.00 AM',
    space:11,
    },
    {id:4,
    name:'Cavity Protection',
    time:'11.00 AM-12.00 AM',
    space:10,
    },
    {id:5,
    name:'Oral Surgery',
    time:'06.00 AM-07.00 PM',
    space:10,
    },
    {id:6,
    name:'Pediatric Dental',
    time:'07.00 AM-08.00 AM',
    space:10,
    },
]
const AvailableAppointment = ({date}) => {
    return (
        <Container>
           <Typography variant="h4"  sx={{color:'info.main',fontWeight:600,mb:2}}>Available appointment {date.toDateString()}</Typography> 
           <Grid container spacing={2}>
              {
                  bookings.map(booking=><Booking
                  key={booking.id}
                  booking={booking}
                  date={date}
                  >

                  </Booking>)
              }
           </Grid>
        </Container>
    );
};

export default AvailableAppointment;