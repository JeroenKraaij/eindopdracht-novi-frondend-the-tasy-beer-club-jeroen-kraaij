import { useState } from 'react';
import { useSignUp } from "../../hooks/useSignUp.js";
import Button from "../Button/Button.jsx";

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { signUp, loading } = useSignUp();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Geef zowel het e-mailadres als het wachtwoord op.');
            return;
        }
        if (password.length < 6) {
            setError('Het wachtwoord moet minimaal 6 tekens lang zijn.');
            return;
        }
        signUp(email, password);
    }

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <p>Maak een account:</p>
            <label htmlFor="email">
                <span>E-mail:</span>
                <input
                    type='email'
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label htmlFor="password">
                <span>Wachtwoord:</span>
                <input
                    type='password'
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            {loading && <p>Loading...</p>}
            {error && <p className="error-message">{error}</p>}
            <div className="form-button">
                <Button
                    buttonName="Registreer je account:"
                    className="button-nav"
                />
            </div>
        </form>
    )
}
