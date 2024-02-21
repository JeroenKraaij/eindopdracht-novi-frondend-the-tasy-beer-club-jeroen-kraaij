import React from "react";

import styles from './Home.module.css';

export default function HomeBanner () {

    return(
        <figure className={styles.homeBanner}>
            <div className={styles.mainBanner}>
                <h1>
                    <span className={styles["text-display-white"]}>Tasty Beer</span>
                    <span className={styles["text-display-pink"]}>Club</span>
                </h1>
                <p>De Tasty Beer Club is een uitzonderlijke leuke club voor bierliefhebber. Met 300 bieren op voorraad zijn wij de grootste bierclub van Nederland.</p>
            </div>
        </figure>
    )
}