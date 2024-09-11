import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../page/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;