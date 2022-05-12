import React, { useState } from 'react';
import Logo from './logo';
import NavLinks from './nav';

const Header = ()=>{
    return(
        <div>
            <div>
                <Logo/>
            </div>
            <div>
                <NavLinks/>
            </div>
        </div>
    )
}

export default Header;