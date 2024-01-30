
import styles from "./Winkelmandje.module.css";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import SignUp from "../../components/SignUp/SignUp.jsx";

export default function Winkelmandje () {

    return (
        <>
            <article className={styles ['article-winkelmandje']}>
                <h1>Winkelmandje</h1>
                <section className={styles ['product-view']}>

                    Hier komen bierproducten

                </section>
                <section className={styles ['login-view']}>
                    <div className={styles.subscription}>
                        <h3>Verzendgegevens</h3>
                        <SignUp/>
                    </div>
                    <div className={styles.login}>
                        <h3>Login op je account</h3>
                       <LoginForm/>
                    </div>

                </section>


            </article>
        </>

    )

}
