import { useForm } from 'react-hook-form';
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import styles from "./Contact.module.css"

export default function Contact () {

    const { handleSubmit, formState: { errors }, register } = useForm();
    function handleFormSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <article className={styles ['article-contact']}>
                <h1>Contact</h1>
                <p>vul het onderstaande formulier in voor meer informatie </p>
                <ContactForm/>
            </article>
        </>
    )
}
