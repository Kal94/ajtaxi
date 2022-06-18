import React, { useEffect } from 'react'
import HeaderComponent from '../../components/header/header.component'
import Layout from '../../components/Layout'
import './home.scss';
import AOS from 'aos';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import Image1 from '../../images/superb.png'
import Image2 from '../../images/s-class.png'
import Image3 from '../../images/s-max.avif'

import 'aos/dist/aos.css';

const slideImages = [
    {
        image: Image1,
        passengers: 4,
        luggage: 2,
    },
    {
        image: Image2,
        passengers: 6,
        luggage: 3,
    },
    {
        image: Image3,
        passengers: 8,
        luggage: 4,
    }
];

const properties = {
    duration: 3000,
    autoplay: true,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
};

const Homepage = () => {

    useEffect(() => {
        console.log(window.location.pathname); //yields: "/js" (where snippets run)
        console.log(window.location.href);
        AOS.init();
    }, [])

    return (
        <Layout>
            <div className="home-container">
                <div className="container">

                    <div data-aos="fade-right" data-aos-offset="300"
                        data-aos-easing="ease-in-sine" data-aos-duration="2000" className="hero-container">
                        <h1 className="heading"><span>Fast</span> and<br /><span>Reliable</span><br /> Sheffield Taxis</h1>
                    </div>

                </div>
            </div>
            <div className="slider-container">
                <div className="container vehicles">
                    <div className="row">
                        <h1>Our Vehicles</h1>
                        <Slide {...properties}>
                            {slideImages.map((vehicle, index) => (
                                <>
                                    <div className="each-slide" key={index}>
                                        <div className="image-slider" style={{ 'backgroundImage': `url(${vehicle.image})` }}>

                                        </div>
                                    </div>
                                    <p className='vehicle-caption'><span>Passengers: </span>{vehicle.passengers}</p>
                                    <p className='vehicle-caption'><span>Luggage:</span> {vehicle.luggage}</p>
                                </>
                            ))}
                        </Slide>
                    </div>
                </div>
            </div>
            <div className="reviews-container">
                <div className="container">
                    <h1>The reviews will go here</h1>
                </div>
            </div>
        </Layout>
    )
}

export default Homepage