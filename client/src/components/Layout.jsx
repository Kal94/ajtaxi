import React from 'react'
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

        </>
    )
}

export default Layout