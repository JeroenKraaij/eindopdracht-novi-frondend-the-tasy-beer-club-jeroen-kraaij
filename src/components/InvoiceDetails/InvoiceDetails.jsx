import { useBillingDetails } from "../../hooks/userBillingDetails.js";
import Button from "../Button/Button.jsx";
import {useState} from "react";

export default function InvoiceDetails() {
    const {
        displayName, setDisplayName, streetAndNumber, setStreetAndNumber, zipCode, setZipCode,
        city, setCity, deliveryDate, setDeliveryDate, acceptedTerms, setAcceptedTerms, formError, handleSubmit
    } = useBillingDetails();

    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (acceptedTerms) {
            setOrderConfirmed(true);
        } else {
            console.error('Algemene voorwaarden moeten worden geaccepteerd voordat je kunt betalingen');
        }
    };

    return (
            <form onSubmit={handleFormSubmit} className="login-form">
                <p>Gegevens:</p>
                <label htmlFor="name">
                    <span>Naam *:</span>
                    <input
                        type='text'
                        onChange={(e) => setDisplayName(e.target.value)}
                        value={displayName}
                        required
                    />
                </label>
                <div>Aflever:</div>
                <label htmlFor="adress">
                    <span>Straatnaam & huisnummer:</span>
                    <input
                        type='text'
                        onChange={(e) => setStreetAndNumber(e.target.value)}
                        value={streetAndNumber}
                    />
                </label>
                <label htmlFor="zipcode">
                    <span>Postcode *:</span>
                    <input
                        type='text'
                        onChange={(e) => setZipCode(e.target.value)}
                        value={zipCode}
                    />
                </label>
                <label htmlFor="place">
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
                    <span>Accepteer de algemene voorwaarden</span>
                    <input
                        type='checkbox'
                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                        checked={acceptedTerms}
                        required
                    />
                </label>
                <p>{formError && <p className="error-message">{formError}</p>}</p>
                <div>
                    <Button
                        buttonName="Naar betalen"
                        className="button-nav"
                        type="submit"
                    />
                </div>
                {orderConfirmed && <p>Je bestelling is geplaatst</p>}
            </form>
    );
}
