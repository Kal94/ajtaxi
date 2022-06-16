import React from 'react'
import Footer from './footer/footer.component'
import Header from './header/header.component'


const Layout = ({ children }) => {

    return (
        <>

            <main>
                {children}
            </main>

        </>
    )
}

export default Layout