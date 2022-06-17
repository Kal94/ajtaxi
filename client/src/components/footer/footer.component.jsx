import React from 'react'
import './footer.styles.scss';
import Facebook from '../../iconmonstr-facebook-3.svg'
import Whatsapp from '../../iconmonstr-whatsapp-3.svg'
import Instagram from '../../iconmonstr-instagram-13.svg'
import Logo from '../../aj_logo.svg'

import { airportNames, cityNames, navItems } from '../../data/data';

const FooterComponent = () => {

    return (
        <div className="footer-container">
            <div className="container">

                <div className="contact-container row">

                    <div className="contact-row col-3">
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                            <img src={Logo} className="bi me-2" height="32" />
                            <span id="company-name" className="fs-4">AJ Taxi</span>
                        </a>
                    </div>

                    <div className="contact-row col-3">
                        <a href="/">contact@ajtaxi.co.uk</a>
                    </div>

                    <div className="contact-row col-3">
                        <a href="/">07555 211 211</a>
                    </div>

                    <div className="contact-row col-3 social-media">
                        <ul>
                            <li><img height="40" src={Facebook} /></li>
                            <li><img height="40" src={Whatsapp} /></li>
                            <li><img height="40" src={Instagram} /></li>
                        </ul>
                    </div>
                </div>

                <div className="links-container row">
                    <div className="links-row col-3">
                            {
                                navItems.map(item => <a href="/"><li>{item}</li></a>)
                            }
                    </div>
                    <div className="links-row col-3">
                            {
                                cityNames.map(city => <a href="/"><li>Book Taxi to {city}</li></a>)
                            }
                    </div>
                    <div className="links-row col-3">
                            {
                                airportNames.map(airport => <a href="/"><li>Book Taxi to {airport}</li></a>)
                            }
                    </div>
                    <div className="links-row col-3">
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent