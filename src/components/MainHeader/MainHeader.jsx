import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

function MainHeader() {
    return (
        <>
            <Header/>
            {/* MainHeader page will now act as a navbar -->Outlet allows the child components to render their data along with the parent componet */}
            <Outlet/>
        </>
    )
}

export default MainHeader;