import styles from "./SignUp.module.css";
import { useState } from "react";

export default function SignUp() {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [streetAndNumber, setStreetAndNumber] = useState('');
    const [zippCode, setZippCode] = useState('');
    const [city, setCity] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [formError, setFormError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!acceptedTerms) {
            setFormError("Sorry je moet de algemene voorwaarden accepteren.");
            return;
        }

        if (!displayName || !email || !streetAndNumber || !zippCode || !city) {
            setFormError("Vul de verplichte velden in");
            return;
        }

        console.log(displayName, email, password, streetAndNumber, zippCode, city, deliveryDate);
        setFormError('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles['signup-form']}>
            {formError && <p className={styles['error-message']}>{formError}</p>}
            <div>Gegevens:</div>
            <label>
                <span>Naam *:</span>
                <input
                    type='text'
                    onChange={(e) => setDisplayName(e.target.value)}
                    value={displayName}
                    required
                />
            </label>
            <label>
                <span>e-mail *:</span>
                <input
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
            </label>
            <div>Maak account aan:</div>
            <label>
                <span>Kies wachtwoord:</span>
                <input
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <div>Aflever:</div>
            <label>
                <span>Straatnaam & huisnummer *:</span>
                <input
                    type='text'
                    onChange={(e) => setStreetAndNumber(e.target.value)}
                    value={streetAndNumber}
                    required
                />
            </label>
            <label>
                <span>Postcode *:</span>
                <input
                    type='text'
                    onChange={(e) => setZippCode(e.target.value)}
                    value={zippCode}
                    required
                />
            </label>
            <label>
                <span>Plaats *:</span>
                <input
                    type='text'
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                    required
                />
            </label>
            <div>Wanneer wil je het pakket geleverd hebben?:</div>
            <label>
                <span>Datum:</span>
                <input
                    type='date'
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    value={deliveryDate}
                />
            </label>
            <label>
                <input
                    type='checkbox'
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    checked={acceptedTerms}
                    required
                />
                Accepteer de algemene voorwaarden*
            </label>
            <button className='button' type='submit' disabled={!acceptedTerms}>
                Registreren
            </button>
        </form>
    );
}