import React ,{useState} from 'react';
import Footer from '../../Home/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
import AppointmentHeader from './../AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [date, setDate] =useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppointment date={date}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;