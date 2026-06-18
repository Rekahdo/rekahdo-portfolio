import './Header.css'

import Logo from '../../components/Logo/Logo'
import NavDrawer from '../../components/Drawer/Drawer';
import { useState } from 'react';

function Header({className="", ...props}){

    return(
        <header className={`web-section navigation-header flex block-center sb ${className}`}>
            <Logo/>
            <NavDrawer />
        </header>
    )
}

export default Header;