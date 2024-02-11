import { auth } from "../firebase/config.js";
import { signOut } from 'firebase/auth';
export const userLogout = () => {
    const logout = () => {
        signOut(auth)
            .then(() => {
                console.log('User Signed out')
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
    return { logout }
}