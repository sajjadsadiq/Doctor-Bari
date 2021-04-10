import React from 'react';
import './Header.css'
import Navbar from '../Navbar/Navbar';
import HeaderContent from '../HeaderContent/HeaderContent';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const Header = () => {
    return (
        <div className="header">
           <Navbar/> 
           <HeaderContent/>
           <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;