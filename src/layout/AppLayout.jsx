/* 
    Author : Ashish
    AppLayout : This layout contains all the base code like Side Navbar, header and footer for app
*/
import { AppFooter, SideBar } from '../components';
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
    
    return <div className="App-layout">
        <SideBar children={<Outlet />} footer={<AppFooter />} >
        
        </SideBar>
        
    </div>
}