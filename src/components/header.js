import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './css/header.css';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <NavLink to={"/"}><span>Home</span></NavLink>
                <NavLink to={"Settings"}><span>Settings</span></NavLink>
                <NavLink to={"Chart"}><span>Chart</span></NavLink>
                {/* if we add end then highlight only works if the url is in parant and not work for its child */}
                <NavLink to={"Usage"} end><span>Usage</span></NavLink>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
       
    );
}

export default Header;
