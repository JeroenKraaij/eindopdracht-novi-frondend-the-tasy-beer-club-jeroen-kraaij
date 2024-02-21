import React from "react";
import styles from "./Home.module.css";
import SmaaktestImage from "../../assets/images/The Beer Taste Club home smaaktest.webp";
import {Link} from "react-router-dom";
import Buttons from "../../components/Buttons/Buttons.jsx";

export default function SmaaktestContent () {

    return (
        <div className={styles["smaaktest-content"]}>
            <figure className={styles["smaaktest-image"]}>
                <img src={SmaaktestImage} alt="Image smaaktest"/>
            </figure>
            <div className={styles["call-to-action"]}>
                <h3>
                    <span className={styles["text-display-black"]}>Doe de</span>
                    <span className={styles["text-display-pink"]}>Smaaktest</span>
                </h3>
                <p>Wil je weten welke smaken passen binnen jouw bierkeuze?</p>

                <Link to={`/smaaktest`}>
                    <Buttons
                        buttonName={"Doe de smaaktest"}
                        className={"button-nav"}
                    ></Buttons>
                </Link>
            </div>
        </div>

    );
}