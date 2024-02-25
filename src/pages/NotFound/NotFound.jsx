import styles from './NotFound.module.css';
import {Link} from "react-router-dom";


function NotFound() {
    return (
        <div className={styles["not-found"]}>
            <h1>Helaas deze pagina is niet <br/>gevonden of bestaat niet</h1>
            <Link to="/">
                <p>Ga terug naar Home</p>
            </Link>
        </div>
    )
}

export default NotFound