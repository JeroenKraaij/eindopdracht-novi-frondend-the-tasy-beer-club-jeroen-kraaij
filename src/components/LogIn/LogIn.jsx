
import styles from "./LogIn.module.css";
import { useState } from "react";
import { userLogin } from "../../hooks/userLogin.js";

export default function LogIn () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {error, login} = userLogin()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)

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
            {error && <p>{error}</p>}
        </form>
    )

}

