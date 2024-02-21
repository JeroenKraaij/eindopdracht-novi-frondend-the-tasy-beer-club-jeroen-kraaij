import styles from './Footer.module.css';
import FooterImg from "../../assets/images/The Beer Taste Club footer image.webp"



export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
                <div className={styles ["main-footer-content"]} >
                    <div className={styles ["footer-content"]}>
                        Hello, I'm a Footer
                    </div>
                </div>
                <div className={styles ["main-footer-credits"]} >
                    Alle rechten voorbehouden | Tasty Beer Club {currentYear}
                </div>

        </>
    )
}
