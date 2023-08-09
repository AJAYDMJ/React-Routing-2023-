import React from 'react';
import {NavLink} from 'react-router-dom';
import './css/header.css';
import LogedInOutlet from './outlets/logedInOutlet';
import { clearUserInfo } from '../utils/common';
import PrivateLink from './links/privateLink';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <PrivateLink to={"/"}><span>Home</span></PrivateLink>
                <PrivateLink to={"Settings"}><span>Settings</span></PrivateLink>
                <PrivateLink to={"Chart"}><span>Chart</span></PrivateLink>
                {/* if we add end then highlight only works if the url is in parant and not work for its child */}
                <PrivateLink to={"Usage"} end><span>User</span></PrivateLink>

                <PrivateLink className="logout" to="/login" onClick={ () => {
                    clearUserInfo();
                }} ><span>LogOut</span></PrivateLink>

            </div>
            <div>
                <LogedInOutlet />
            </div>
        </div>
       
    );
}

export default Header;
