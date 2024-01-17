import styles from './Smaaktest.module.css';
import ChooseTaste from "../../components/ChooseTaste/ChooseTaste.jsx";


export default function Smaaktest() {

    return (
        <article className={styles['choose-taste']}>
            <div className={styles['taste-menu']}>

                    <button className={styles['taste-button']}>1. Smaaktest</button>
                    <button className={styles['taste-button']}>2. Kies je box</button>
                    <button className={styles['taste-button']}>3. Bestellen</button>

                <div className={styles['taste-statusbar']}>Statusbar</div>
            </div>
            <ChooseTaste/>
        </article>
    )
}