import React, { useState } from 'react';
import Logo from './logo';
import NavLinks from './nav';
import './header.css'
const Header = ()=>{
    return(
        <div className='headerOuter'>
            <div className='LogoCon'>
                <Logo/>
            </div>
            <div className='NavCon'>
                <NavLinks/>
            </div>
        </div>
    )
}

export default Header;