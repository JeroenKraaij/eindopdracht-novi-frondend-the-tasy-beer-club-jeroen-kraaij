import { useState } from "react";
import {auth} from "../firebase/config.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./UseAuthContext.js";

export const userLogin = () => {
    const [error, setError] = useState (null);

    const { dispatch } = useAuthContext
    const login = (email, password) => {
        setError(null)
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
               dispatch({ type: 'LOGIN', payload: res.user})
            })
            .catch((err) => {
                setError(err.message)
            })
    }
    return {error, login}
}
