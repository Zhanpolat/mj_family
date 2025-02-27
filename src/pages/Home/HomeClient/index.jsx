import React, { useEffect } from 'react'
import Header from '../../../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../../components/Footer'

const HomeClient = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default HomeClient