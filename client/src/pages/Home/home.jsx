import React, {useEffect} from 'react'
import HeaderComponent from '../../components/header/header.component'
import Layout from '../../components/Layout'
import './home.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Homepage = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Layout>
            <div className="home-container">
                <div className="container">

                    <div data-aos="fade-right" data-aos-offset="300"
                        data-aos-easing="ease-in-sine" data-aos-duration="2000" className="hero-container">
                        <h1  className="heading"><span>Fast</span> and<br /><span>Reliable</span><br /> Sheffield Taxis</h1>
                    </div>

                </div>
            </div>
            <div className="container">
                
            </div>
        </Layout>
    )
}

export default Homepage