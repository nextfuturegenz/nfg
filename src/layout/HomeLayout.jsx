/* 
    Author : Ashish
    HomeLayout : This layout contains all the base code like headers and footer
*/
import { useEffect } from 'react';
import { Header, Footer } from '../components';
import { Outlet, useLocation } from 'react-router-dom';

export const HomeLayout = () => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    },[location])
    
    return <div className="main" id="top">
        <Header />
        <Outlet />
        <Footer />
    </div>
}