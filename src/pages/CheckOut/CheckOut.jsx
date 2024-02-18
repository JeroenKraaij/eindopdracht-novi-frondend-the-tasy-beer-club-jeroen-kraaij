// CheckOut.jsx
import { useState } from 'react';
import styles from "./CheckOut.module.css";
import Login from "../../components/Login/Login.jsx";
import InvoiceDetails from "../../components/InvoiceDetails/InvoiceDetails.jsx";
import Signup from "../../components/Signup/Signup.jsx";
import Buttons from "../../components/Buttons/Buttons.jsx";

export default function CheckOut() {
    const [isOpen, setIsOpen] = useState(false);
    const [signupData, setSignupData] = useState({ email: '', password: '' });

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const handleSignupSubmit = () => {
        console.log("Signup form submitted with data:", signupData);
    };

    return (
        <article className={styles['article-checkout']}>
            <section className={styles['login-view']}>
                <h1>Checkout</h1>
                <div className={styles.login}>
                    <p>Terugkerende klanten</p>
                    <button className={styles.accordionBtn} onClick={toggleAccordion}>
                        Login op je account:
                    </button>
                </div>
                {isOpen && (
                    <div className={styles.accordionContent}>
                        <Login />
                    </div>
                )}
                <div className={styles.login}>
                    <div className={styles.subscription}>
                        <h3>User signup</h3>
                        <Signup handleSubmit={handleSignupSubmit} setSignupData={setSignupData}/>
                        <h3>Factuurgegevens:</h3>
                        <InvoiceDetails/>
                    </div>
                </div>
                <Buttons name="Bestellen" onClick={handleSignupSubmit}/>
            </section>
        </article>
    );
}
