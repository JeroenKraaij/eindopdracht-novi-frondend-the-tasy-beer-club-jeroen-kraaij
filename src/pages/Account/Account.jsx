// Styles
import styles from './Account.module.css';
import { userLogout } from "../../hooks/userLogout.js";
import { useCollection } from "../../hooks/UseCollection.js";
import { useAuthContext } from "../../hooks/UseAuthContext.js";

export default function Account() {
    const { user } = useAuthContext();
    const { documents: users } = useCollection("users", ['uid', '==', user.uid]);
    const { logout } = userLogout();

    return (
        <article className={styles['article-account']}>
            <h1>Account</h1>
            <div>
                {users && users.map(userData => (
                    <div key={userData.id}>
                        <h4>Hello, {userData.FirstName} {userData.Surname}</h4>
                        <p>{userData.Address}</p>
                        <p>{userData.Zipcode}</p>
                        <p>{userData.Place}</p>
                    </div>
                ))}
            </div>
            <button onClick={logout}>Logout</button>
        </article>
    );
}
