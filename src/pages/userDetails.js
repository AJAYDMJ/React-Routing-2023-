import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import './css/details.css';
import PrivateLink from '../components/links/privateLink';

const UserDetails = () => {
    // Data from the route  from the prev component
    const location  = useLocation();
    const userData = location.state;

    // pass through route
    const {userId} = useParams();

    const [user, setUser] = useState(userData);

    const navigate = useNavigate();


    useEffect(() => {
        // if prev component didnt pass data we will fetch it from the server
        if (!user) {
            axios.get('../data.json')
            .then((response) => {
                const item = response.data.find((userItem) => userItem.id === parseInt(userId));
                setUser(item)
            });
        }
        
    }, [userId, user]);

    if (!user) {
        return null;
    }

    return (
        <div className='page details'>
            <div className='title'>
                {user.name}
            </div>
            <div className='body'>
                Class:{user.class}
            </div>
            <div className='body'>
            Address:{user.address}
            </div>
            <div className='body'>
            Phone:{user.phone}
            </div>
            <div className='body'>
                {user.isActive}
            </div >

            <div className="sub-menu"> 
                {/* end is given because else this marks gets highlighted always */}
                <PrivateLink to="" end><span>Marks </span></PrivateLink>
                <PrivateLink to="sports"><span>Sports </span></PrivateLink>
                <PrivateLink to="remarks"><span>Remarks </span></PrivateLink>
            </div>
            <div className='details-body'>
                <Outlet context={user}/>
            </div>

            <div>
                <button onClick={() => navigate('/Usage')}> Back</button>
            </div>
            
        </div>
    );
}

export default UserDetails;
