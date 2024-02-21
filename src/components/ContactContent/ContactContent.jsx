import React from "react";
import {Link} from "react-router-dom";
import styles from "./ContactContent.module.css";
import Buttons from "../Buttons/Buttons.jsx";

import DrinkingBeer from "../../assets/images/The Beer Taste Club drinking beer.webp";


export default function ContactContent () {

    return (
        <div className={styles["contact-content"]}>
            <figure className={styles["contact-image-box"]}>
                <img src={DrinkingBeer} alt="Image smaaktest"/>
            </figure>
            <div className={styles["contact-call-to-action"]}>
                <h3>
                    <span className={styles["text-display-black"]}>Heb je een </span>
                    <span className={styles["text-display-pink"]}>Vraag?</span>
                </h3>
                <p>Neem contact met ons</p>

                <Link to={`/contact`}>
                    <Buttons
                        buttonName={"Naar contact"}
                        className={"button-nav"}
                    ></Buttons>
                </Link>
            </div>
        </div>

    );
}