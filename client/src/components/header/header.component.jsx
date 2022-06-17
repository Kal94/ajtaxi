import React from 'react'
import './header.styles.scss';
import Logo from '../../aj_logo.svg'
import { navItems } from '../../data/data';

const HeaderComponent = () => {

    return (
        <div className="header-container">
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 pb-4">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <img src={Logo} className="bi me-2" height="32" />
                        <span id="company-name" className="fs-4">AJ Taxi</span>
                    </a>

                    <ul className="nav nav-pills">
                        {
                            navItems.map((item, key) => {
                                if (item === 'Home') {
                                    return (
                                        <li key={key} className="nav-item"><a href="/" className="nav-link active" aria-current="page">{item}</a></li>
                                    )
                                } else if (item !== 'Home') {
                                    return (
                                        <li key={key} className="nav-item"><a href={`/${item}`} className="nav-link">{item}</a></li>

                                    )
                                }
                            })
                        }
                    </ul>
                </header>
            </div>
        </div>

    )
}

export default HeaderComponent