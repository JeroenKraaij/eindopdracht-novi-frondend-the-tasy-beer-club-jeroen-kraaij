import { useState } from "react";
import { userLogin } from "../../hooks/userLogin.js";
import Button from "../Button/Button.jsx";

export default function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {login, loading } = userLogin()

    const handleOnClick = (e) => {
        e.preventDefault()

        if (!email || !password) {
            setError('Geef zowel het e-mailadres als het wachtwoord op.');
            return;
        }
        if (password.length < 6) {
            setError('Het wachtwoord moet minimaal 6 tekens lang zijn.');
            return;
        }
        login(email, password)
    }

    return (
        <form onSubmit={handleOnClick} className="login-form">
            <p>Heb je al eerder bij ons gewinkeld, vul dan hieronder uw gegevens in:</p>
            <label>
                <span>e-mail:</span>
                <input
                    type='email'
                    onChange={(e) => setEmail(e.target.value) }
                    value={email}
                />
            </label>
            <label>
                <span>Wachtwoord:</span>
                <input
                    type='password'
                    onChange={(e) => setPassword(e.target.value) }
                    value={password}
                />
            </label>
            {loading && <p>Loading...</p>}
            {error && <p className="error-message">{error}</p>}
            <div className="form-button">
                <Button
                    buttonName="Login op je account:"
                    className="button-nav"
                />
            </div>
        </form>
    )
}

