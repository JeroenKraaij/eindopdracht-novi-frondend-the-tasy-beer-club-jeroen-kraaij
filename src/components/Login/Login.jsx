
import styles from "./Login.module.css";
import { useState } from "react";
import { userLogin } from "../../hooks/userLogin.js";
import Buttons from "../Buttons/Buttons.jsx";

export default function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {error, login} = userLogin()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)

    }

    return (
        <form onSubmit={handleSubmit} className={styles['login-form']}>
            <p>Heb je al eerder bij ons gewinkeld, vul dan hieronder uw gegevens in:</p>
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
                <Buttons name="Inloggen"/>
            </label>
            {error && <p>{error}</p>}
        </form>
    )

}

