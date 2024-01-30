
import styles from "./LoginForm.module.css";
import {useState} from "react";


export default function LoginForm () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)

    }

    return (

        <form onSubmit={handleSubmit} className={styles['login-form']}>
            <label>
                <span>e-mail:</span>
                <input type='email'
                       onChange={(e) => setEmail(e.target.value) }
                       value={email}
                />
            </label>
            <label>
                <span>Wachtwoord:</span>
                <input type='password'
                       onChange={(e) => setPassword(e.target.value) }
                       value={password}
                />
                <button className='button'>Inloggen</button>
            </label>
        </form>
    )

}

