import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51KIFsQKWnfV6DXSxkdtlNUc0lYBCpmMok91Ef8cCqljvsbKbeOBl9uAIQEZ0u6rfU0Jz4ocMokJqx2AkCTAYqMYi00yvSztWws');

const Payment = () => {
const {appointmentId}=useParams()
const [appointment,setAppointment]=useState({});
useEffect(()=>{
    fetch(`http://localhost:5000/appointments/${appointmentId}`)
    .then(res=>res.json())
    .then(data=>setAppointment(data));
},[appointmentId])
    return (
        <div>
            <h2>Please pay for: {appointment.serviceName}</h2>
            <h4>Price: ${appointment.price}</h4>
            {appointment?.price && <Elements stripe={stripePromise}>
              <CheckoutForm 
              appointment={appointment}
              />
            </Elements>}
        </div>
    );
};

export default Payment;