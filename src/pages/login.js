import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from '../api/user';

const Login = () => {

    const [user, setUser] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleOnClick = () => {
        setError('');
        login(user)
            .then(() => {
                navigate('/');
            })
            .catch(() => {
                setError('Login Failed');
            });
    };
    return (
        <div>
            <div className="page login">
                <div>
                    <label className="error">{error}</label>
                    <input value={user} placeholder="username" onChange={(evt) => setUser(evt.target.value)}/>
                    <input placeholder="password" />
                    <button className="login-button" onClick={handleOnClick}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
