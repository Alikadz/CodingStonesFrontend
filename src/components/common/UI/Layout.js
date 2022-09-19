import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../../containers/header/Header'
import Sidebar from '../../../containers/sidebar/Sidebar'

const Layout = () => {
    const location = useLocation();
    return (
        <>
            {!(location.pathname == "/login" || location.pathname== '/google-auth') && (<>
                <Header />
                <Sidebar />
            </>
            )}
        </>
    )
}

export default Layout