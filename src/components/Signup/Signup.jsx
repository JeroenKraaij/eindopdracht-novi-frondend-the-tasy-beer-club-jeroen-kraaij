import React, { useState } from 'react';
import styles from "./Signup.module.css";
import { useSignUp } from "../../hooks/useSignUp.js";

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { signUp, loading } = useSignUp();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please provide both email and password.');
            return;
        }
        if (password.length < 6) {
            setError('Password should be at least 6 characters long.');
            return;
        }
        signUp(email, password);
    }

    return (
        <form onSubmit={handleSubmit} className={styles['login-form']}>
            <p>Maak een account:</p>
            <label htmlFor="email">
                <span>e-mail:</span>
                <input type='email'
                       id="email"
                       onChange={(e) => setEmail(e.target.value)}
                       value={email}
                />
            </label>
            <label htmlFor="password">
                <span>Wachtwoord:</span>
                <input type='password'
                       id="password"
                       onChange={(e) => setPassword(e.target.value)}
                       value={password}
                />
            </label>
            {loading && <p>Loading...</p>}
            {error && <p className={styles['error-message']}>{error}</p>}
        </form>
    )
}
