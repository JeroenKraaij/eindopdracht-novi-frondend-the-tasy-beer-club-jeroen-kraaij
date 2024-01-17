import { useForm } from 'react-hook-form';
import ContactForm from "../../components/ContactForm/ContactForm.jsx";

export default function Contact () {

    const { handleSubmit, formState: { errors }, register } = useForm();
    function handleFormSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <main className='main-outer-container'>
                <section className='main-inner-container'>
                    <h1>Contact</h1>
                    <p>vul het onderstaande formulier in voor meer informatie </p>
                    <ContactForm/>
                </section>
            </main>
        </>
    )
}
