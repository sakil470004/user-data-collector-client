import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';


const Navigation = () => {
    const [userName, setUserName] = useState('');

    const handleLogOut = () => {
        localStorage.setItem('user-data-collector-user', '')
    }

    useEffect(() => {
        let userName = localStorage.getItem('user-data-collector-user');
        setUserName(userName);

    }, [])


    return (
        <div>
            <div className="nav br3 ">
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className="nav-title  br4 bb bw1">
                        {/* logo */}
                        MI
                        {/* <img src="https://www.thecocktaildb.com/images/logo.png" alt="" /> */}
                    </div>
                </div>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div className="nav-links">
                    <Link to='/home'>Add New User</Link>

                    <Link to="/allUser">All User</Link>

                    <Link onClick={handleLogOut} to='/'>LogOut</Link> :



                </div>
            </div>

        </div>
    );

}
export default Navigation;
