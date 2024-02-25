// CheckOut.jsx
import { useState } from 'react';
import styles from "./CheckOut.module.css";
import Login from "../Login/Login.jsx";
import InvoiceDetails from "../InvoiceDetails/InvoiceDetails.jsx";
import Signup from "../Signup/Signup.jsx";
import { useAuthContext } from "../../hooks/UseAuthContext.js";

export default function CheckOut() {
    const [isOpenLogIn, setIsOpenLogIn] = useState(false);
    const [isOpenLogSignIn, setIsOpenSignIn] = useState(false);
    const { user, authIsReady } = useAuthContext()

    const [signupData, setSignupData] = useState({ email: '', password: '' });

    const toggleAccordionLogin = () => {
        setIsOpenLogIn(!isOpenLogIn);
    };

    const toggleAccordionSignIn = () => {
        setIsOpenSignIn(!isOpenLogSignIn);
    };

    const handleOrderSubmit = () => {
        console.log("Signup form submitted with data:", signupData);
    };

    return (
        <article className={styles['article-checkout']}>
            <section className={styles['login-display']}>
                <h1>Checkout</h1>
                {authIsReady && (
                    <>
                        {!user && (
                            <>
                                <h3>Stap 1:</h3>
                                <p>Ben je al lid of wil je lid worden? Hier kun je lid worden of inloggen op je account: </p>
                                <div className={styles["login-view"]}>
                                    <p onClick={toggleAccordionLogin}><strong>Terugkerende klanten</strong></p>
                                </div>
                                {isOpenLogIn && (
                                    <div className={styles["accordion-content"]}>
                                        <Login />
                                    </div>
                                )}
                                <div className={styles["login-view"]}>
                                    <p onClick={toggleAccordionSignIn}><strong>Lid worden van de Club</strong></p>
                                </div>
                                {isOpenLogSignIn && (
                                    <div className={styles["accordion-content"]}>
                                        <Signup
                                            handleSubmit={handleOrderSubmit} setSignupData={setSignupData}
                                        />
                                    </div>
                                )}
                            </>
                        )}
                        {user && (
                            <>
                                <h3>Je bent ingelogd</h3>
                                <p>Vul stap 2 in en bestel je biertjes</p>
                            </>
                        )}
                    </>
                )}

                <h3>Stap 2:</h3>
                <p>Bestel hier je biertjes ook zonder registratie: </p>
                <div className={styles["accordion-content"]}>
                    <InvoiceDetails />
                </div>
            </section>
        </article>
    );
}
