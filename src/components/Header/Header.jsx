import {Link, NavLink} from 'react-router-dom';
import {useState} from "react";
import Logo from '../../assets/svg/Logo Tasty Beer Club.svg';
import ShoppingBasket from '../../assets/svg/Shoppingbasket.svg';
import styles from './Header.module.css';
import { userLogout } from "../../hooks/userLogout.js";

export default function Header() {

    const { logout } = userLogout()
    const [hamburgerOpen, setHamburgerOpen] =useState(false)

    return (
        <>
            <img className={styles.brandlogo} src={Logo} alt="Logo" />
            <nav className={styles.navbar}>
                    <div className={styles['hamburger-menu']}
                        onClick={() => {
                        setHamburgerOpen(prev => !prev)
                            console.log(hamburgerOpen)
                    }} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={ hamburgerOpen ? styles['open-hamburger'] : styles['close-hamburger'] }>
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
                        <li onClick={logout}>
                            Uitloggen
                        </li>
                    </ul>
                </nav>
            <Link to={`/webshop/winkelmandje`}>
                <img className={styles.shoppingbasket} src={ShoppingBasket} alt="Winkelmandje" />
            </Link>

        </>
    );
}