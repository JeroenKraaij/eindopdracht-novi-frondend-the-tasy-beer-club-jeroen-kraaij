import { NavLink } from 'react-router-dom';
import Logo from '../../assets/svg/Logo Tasty Beer Club.svg';
import ShoppingBasket from '../../assets/svg/Shoppingbasket.svg';
import styles from './Header.module.css';
import {useState} from "react";


export default function Header() {

    const [hamburgerOpen, setHamburgerOpen] =useState(false)

    return (
        <>
                <div className={styles['logo-header']}>
                <img src={Logo} alt="Logo" />
                </div>
                <nav className={styles['menu']}>
                    <div className={styles['hamburger-menu']}
                        onClick={() => {
                        setHamburgerOpen(!hamburgerOpen)
                            console.log(hamburgerOpen)
                    }} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <ul className={ hamburgerOpen ? 'open-hamburger' : '' }>
                        <li>
                            <NavLink to="/" className={({ isActive}) => isActive === true ? 'active-link' : 'default-link'} >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/smaaktest" className={({ isActive}) => isActive === true ? 'active-link' : 'default-link'} >
                                Smaaktest
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/webshop" className={({ isActive}) => isActive === true ? 'active-link' : 'default-link'} >
                                Webshop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/over-ons" className={({ isActive}) => isActive === true ? 'active-link' : 'default-link'} >
                                Over ons
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/artikelen" className={({ isActive}) => isActive === true ? 'active-link' : 'default-link'} >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive}) => isActive === true ? 'active-link' : 'default-link'} >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/inloggen" className={({ isActive}) => isActive === true ? 'active-link' : 'default-link'} >
                                Inloggen
                            </NavLink>
                        </li>
                    </ul>

                </nav>
                <div className={styles['shopping-basket']}>
                <img src={ShoppingBasket} alt="Winkelmandje" />
                </div>
        </>
    );
}