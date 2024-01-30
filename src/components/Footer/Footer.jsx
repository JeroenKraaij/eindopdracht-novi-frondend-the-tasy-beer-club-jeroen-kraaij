import styles from './Footer.module.css';


export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
                <div className={styles ["main-footer-content"]} >
                    Hello, I'm a Footer
                </div>
                <div className={styles ["main-footer-credits"]} >
                    Alle rechten voorbehouden | Tasty Beer Club {currentYear}
                </div>

        </>
    )
}
