import {Link} from "react-router-dom";
import styles from "./Home.module.css";
import Button from "../../components/Button/Button.jsx";
import SmaaktestImage from "../../assets/images/The Beer Taste Club home smaaktest.webp";
export default function  SmaaktestContent () {

    return (
        <div className={styles["smaaktest-content"]}>
            <figure className={styles["smaaktest-image"]}>
                <img src={SmaaktestImage} alt="Image smaaktest"/>
            </figure>
            <div className={styles["call-to-action"]}>
                <h3>
                    <span className={styles["text-display-black"]}>Doe de </span>
                    <span className={styles["text-display-pink"]}>Smaaktest</span>
                </h3>
                <p>Wil je weten welke smaken passen binnen jouw bierkeuze?</p>

                <Link to={`/smaaktest`}>
                    <Button
                        buttonName={"Doe de smaaktest"}
                        className={"button-nav"}
                    ></Button>
                </Link>
            </div>
        </div>

    );
}