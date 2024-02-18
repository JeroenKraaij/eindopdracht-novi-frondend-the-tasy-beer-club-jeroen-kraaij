import { useState } from "react";
import { db } from "../firebase/config.js";
import { collection, addDoc } from 'firebase/firestore';
import { useAuthContext} from "./UseAuthContext.js";


export const useBillingDetails = () => {
    const [displayName, setDisplayName] = useState('');
    const [streetAndNumber, setStreetAndNumber] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [formError, setFormError] = useState('');
    const { user } = useAuthContext()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!acceptedTerms) {
            setFormError("Sorry, je moet de algemene voorwaarden accepteren.");
            return;
        }

        if (!displayName || !streetAndNumber || !zipCode || !city) {
            setFormError("Vul de verplichte velden in.");
            return;
        }

        try {
            await addDoc(collection(db, "users"), {
                displayName, streetAndNumber, zipCode, city, deliveryDate, userId: user.uid
            });
                setDisplayName('');
                setStreetAndNumber('');
                setZipCode('');
                setCity('');
                setDeliveryDate('');
                setAcceptedTerms(false);
                setFormError('');
        } catch (error) {
            console.error("Error adding document: ", error);
            setFormError('Error submitting form. Please try again later.');
        }
    };

    return {
        displayName, setDisplayName, streetAndNumber, setStreetAndNumber, zipCode, setZipCode,
        city, setCity, deliveryDate, setDeliveryDate, acceptedTerms, setAcceptedTerms, formError,
        handleSubmit
    };
};


