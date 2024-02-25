import {Link, NavLink} from 'react-router-dom';
import {useState} from "react";
import { useAuthContext } from "../../hooks/UseAuthContext.js";
import Logo from '../../assets/svg/Logo Tasty Beer Club.svg';
import ShoppingBasket from '../../assets/svg/Shoppingbasket.svg';
import styles from "./Header.module.css";
import Facebook from "../../assets/svg/facebook.svg"
import Instagram from "../../assets/svg/instagram.svg"
import Youtube from "../../assets/svg/youtube.svg"


export default function Header() {

    const { user, authIsReady } = useAuthContext()
    const [hamburgerOpen, setHamburgerOpen] =useState(false)

    return (
        <>
            <Link to={`/`}>
                <img className={styles.brandlogo} src={Logo} alt="Logo" />
            </Link>
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
                        <NavLink to="/artikelen" className={({ isActive}) => isActive === true ? 'active-link' : 'default-link'} >
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive}) => isActive === true ? 'active-link' : 'default-link'} >
                            Contact
                        </NavLink>
                    </li>
                    {authIsReady && (
                        <>
                            <li>{!user && (
                                <NavLink to="/inloggen" className={({ isActive}) => isActive === true ? 'active-link' : 'default-link'} >
                                    Inloggen
                                </NavLink>)}
                            </li>

                            <li>{user && (
                                <NavLink to="/account" className={({ isActive}) => isActive === true ? 'active-link' : 'default-link'} >
                                    Account
                                </NavLink>)}
                            </li>
                        </> )}
                </ul>
            </nav>
            <figure className={styles["social-media-icons"]}>
                <img src={Facebook} alt="Facebook"/>
                <img src={Instagram} alt="Instagram"/>
                <img src={Youtube} alt="Youtube"/>
            </figure>
            <Link to={`/webshop/winkelmandje`}>
                <img className={styles.shoppingBasket} src={ShoppingBasket} alt="Winkelmandje" />
            </Link>

        </>
    );
}