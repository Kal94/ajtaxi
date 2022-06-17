import React from 'react'
import FooterComponent from './footer/footer.component'
import Footer from './footer/footer.component'
import HeaderComponent from './header/header.component'
import Header from './header/header.component'


const Layout = ({ children }) => {

    return (
        <>
            <HeaderComponent />
            <main>
                {children}
            </main>
            <FooterComponent />
        </>
    )
}

export default Layout