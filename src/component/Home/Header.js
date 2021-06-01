import React from 'react';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="text-center">
            <img src={logo} alt="" style={{width: '280px'}}/>
        </div>
    );
};

export default Header;