import styles from  './ContactForm.module.css';
import { useForm } from 'react-hook-form';

export default function ContactForm () {

    const { handleSubmit, formState: { errors }, register } = useForm();
    function handleFormSubmit(data) {
        console.log(data);
    }

    return (

        <form onSubmit={handleSubmit(handleFormSubmit)} className={styles ['contact-form']}>
            <label htmlFor="name-field">
                <span>Naam:</span>
                <input
                                type="text"
                                id="name-field"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Naam is verplicht'
                                    }
                                })}
                />
                {errors.name && <p>{errors.name.message}</p>}
            </label>
            <label htmlFor="email-field">
                <span>Email:</span>
                <input
                                type="text"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Dit veld is verplicht',
                                    },
                                })}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </label>
            <label>
                <span>Bericht:</span>
                <textarea
                                id="message-field"
                                rows="5"
                                cols="40"
                                placeholder="Laat een bericht achter"
                                {...register("message", {
                                    required: {
                                        value: true,
                                        message: 'Dit veld is verplicht',
                                    },
                                    minLength: {
                                        value: 10,
                                        message: 'Input moet minstends 10 karakters bevatten',
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: 'Input mag maximaal 50 karakters bevatten',
                                    },
                                })}
                ></textarea>
                {errors.message && <p>{errors.message.message}</p>}
            </label>
            <button type="submit">Versturen</button>
        </form>

    )
}
