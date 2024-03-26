/* 
    Author : Ashish
    HomeLayout : This layout contains all the base code like headers and footer
*/
import { SidebarHeader } from '../components/common';
import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../hooks';

export const OnboardingLayout = () => {
    const { logout } = useAuth()

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }} >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <SidebarHeader />
                <Link onClick={() => logout("/login")} style={{ display: 'flex', alignItems: 'center', marginRight: '15px', color:'black' }}>Logout</Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' , padding : '20px'}}>
                <Outlet />
            </div>
        </div>
    )
}