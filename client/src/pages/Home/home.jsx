import React from 'react'
import HeaderComponent from '../../components/header/header.component'
import ImageSliderComponent from '../../components/image-slider/image-slider.component';
import Layout from '../../components/Layout'
import './home.scss';

import Superb from '../../superb.jpeg'

const carImages = [
    {
        url: '../../superb.jpeg',
        caption: 'Slide 1'
    },
    {
        url: 'images/slide_3.jpg',
        caption: 'Slide 2'
    },
    {
        url: 'images/slide_4.jpg',
        caption: 'Slide 3'
    },
];

const Homepage = () => {

    return (
        <Layout>
            <div className="home-container">
                <div className="container">

                    <div className="hero-container">
                        <h1 className="heading">The most trusted cab company in Sheffield</h1>
                    </div>

                </div>
            </div>
            <div className="container">
                <ImageSliderComponent slideImages={carImages} />
            </div>
        </Layout>
    )
}

export default Homepage