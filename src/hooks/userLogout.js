import { auth } from "../firebase/config.js";
import { signOut } from 'firebase/auth';
import { useAuthContext } from "./UseAuthContext.js";

export const userLogout = () => {
    const { dispatch } = useAuthContext
    const logout = () => {
        signOut(auth)
            .then(() => {
                dispatch ({type: 'LOGOUT' })
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
    return { logout }
}