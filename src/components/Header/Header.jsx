import React from "react";
import './Header.css';
import {NavLink} from "react-router-dom";
function Header() {
    return (
        <>
            <header className='main-header'>
                <div className='logo-header'>Logo</div>
                <nav>
                    <ul>
                        <li><NavLink to="/" className={({isActive}) => isActive === true ? 'active-link' : 'default-link' } >Home</NavLink></li>
                        <li><NavLink to="/smaaktest" className={({isActive}) => isActive === true ? 'active-link' : 'default-link' }>Smaaktest</NavLink></li>
                        <li><NavLink to="/webshop" className={({isActive}) => isActive === true ? 'active-link' : 'default-link' }>Webshop</NavLink></li>
                        <li><NavLink to="/over-ons" className={({isActive}) => isActive === true ? 'active-link' : 'default-link' }>Over ons</NavLink></li>
                        <li><NavLink to="/blog" className={({isActive}) => isActive === true ? 'active-link' : 'default-link' }>Blog</NavLink></li>
                        <li><NavLink to="/contact" className={({isActive}) => isActive === true ? 'active-link' : 'default-link' }>Contact</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header