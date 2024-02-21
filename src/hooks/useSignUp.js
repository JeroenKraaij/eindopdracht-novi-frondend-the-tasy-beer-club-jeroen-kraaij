import { useState} from "react";

//firebase
import { auth } from "../firebase/config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthContext} from "./UseAuthContext.js";


export const useSignUp = () => {
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext()
    const signUp = (email, password) => {
        setError(null)
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
               dispatch({type: 'LOGIN', payload: res.user})
            })
            .catch((err) => {
                setError(err.message)
            })
    }
    return { error, signUp }
}