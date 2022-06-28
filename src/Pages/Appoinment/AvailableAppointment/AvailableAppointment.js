import { Grid,Container,Alert } from '@mui/material';
import React,{useState} from 'react';
import Booking from './../Booking/Booking';
import Typography from '@mui/material/Typography';


const bookings=[
    {id:1,
    name:'Teeth Orthodonic',
    time:'08.00 AM-09.00 AM',
    price:20,
    space:10,
    },
    {id:2,
    name:'Cosmatic Dentistry',
    time:'09.00 AM-10.00 AM',
    price:15,
    space:8,
    },
    {id:3,
    name:'Teeth Cleaning',
    time:'10.00 AM-11.00 AM',
    price:35,
    space:11,
    },
    {id:4,
    name:'Cavity Protection',
    time:'11.00 AM-12.00 AM',
    price:25,
    space:10,
    },
    {id:5,
    name:'Oral Surgery',
    time:'06.00 AM-07.00 PM',
    price:40,
    space:10,
    },
    {id:6,
    name:'Pediatric Dental',
    time:'07.00 AM-08.00 AM',
    price:45,
    space:10,
    },
]
const AvailableAppointment = ({date}) => {
    const [bookingSuccess,setBookingSuccess]=useState(false);

    return (
        <Container style={{marginBottom:'8rem'}}>
           <Typography variant="h4"  sx={{color:'info.main',fontWeight:600}}>Available appointment {date.toDateString()}</Typography> 
           {bookingSuccess && <Alert severity="success">Appointment Booked successfully!</Alert>}
           <Grid container spacing={2}>
              {
                  bookings.map(booking=><Booking
                  key={booking.id}
                  booking={booking}
                  date={date}
                  setBookingSuccess={setBookingSuccess}
                  >

                  </Booking>)
              }
           </Grid>
        </Container>
    );
};

export default AvailableAppointment;