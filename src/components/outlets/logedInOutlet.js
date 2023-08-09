import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { isLoggedIn, isPathAllowed} from '../../utils/common';



export default function LogedInOutlet() {
// here the mathname is the url of the current position
    const {pathname} = useLocation();
    const isAllowed = isPathAllowed(pathname);

    // if the user is logged in then only the route get ativated
    
    if(isLoggedIn() && isAllowed) {
        return <Outlet />;
    } else {
        return <Navigate to="/login" />
    }
    
}

