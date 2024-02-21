import styles from "./InvoiceDetails.module.css";
import { useBillingDetails } from "../../hooks/userBillingDetails.js";

export default function InvoiceDetails() {
    const {
        displayName, setDisplayName, streetAndNumber, setStreetAndNumber, zipCode, setZipCode,
        city, setCity, deliveryDate, setDeliveryDate, acceptedTerms, setAcceptedTerms, formError, handleSubmit
    } = useBillingDetails();

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
            <div>Aflever:</div>
            <label>
                <span>Straatnaam & huisnummer:</span>
                <input
                    type='text'
                    onChange={(e) => setStreetAndNumber(e.target.value)}
                    value={streetAndNumber}
                />
            </label>
            <label>
                <span>Postcode *:</span>
                <input
                    type='text'
                    onChange={(e) => setZipCode(e.target.value)}
                    value={zipCode}
                />
            </label>
            <label>
                <span>Plaats *:</span>
                <input
                    type='text'
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
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
