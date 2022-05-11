import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import OurDoctor from '../OurDoctors/OurDoctor';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <div style={{overflow:'hidden'}}>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Treatment></Treatment>
            <AppointmentBanner></AppointmentBanner>
            <Testimonial></Testimonial>
            <OurDoctor></OurDoctor>
            <Footer></Footer>
        </div>
    );
};

export default Home;