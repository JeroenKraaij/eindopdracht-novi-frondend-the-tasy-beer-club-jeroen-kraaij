import styles from "./PageBanner.module.css"

export default function PageBanner ({bannerTitleWhite, bannerTitleColor, bannerDescription, className } ) {

    return(
        <figure className={className}>
            <div className={styles["main-banner"]}>
                <h1>
                    <span className={styles["text-display-white"]}>{bannerTitleWhite}</span>
                    <span className={styles["text-display-pink"]}>{bannerTitleColor}</span>
                </h1>
                <p>{bannerDescription}</p>
            </div>
        </figure>
    )
}