import React, {useState} from "react";
import styles from './Login.module.css';

export default function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)

    }

    return (
        <form onSubmit={handleSubmit} className={styles['login-form']}>
            <h4>Inloggen</h4>
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