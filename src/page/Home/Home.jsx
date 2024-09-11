import React from 'react';
import Project from '../Project/Project';
import Contactus from '../share/ContactUs/Contactus';
import Experiences from '../share/Experiences/Experiences';
import Footer from '../share/Footer/Footer';
import Service from '../share/Service/Service';
import BannerSlider from './BannerSlider';

const Home = () => {
    return (
        <div className=''>
            <BannerSlider></BannerSlider>
            <Experiences></Experiences>
            {/* <Skills /> */}
            <Service></Service>
            <Project />
            <Contactus></Contactus>
            <Footer></Footer>
        </div>
    );
};

export default Home;