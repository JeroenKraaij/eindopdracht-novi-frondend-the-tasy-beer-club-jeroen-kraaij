import { useState } from 'react';
import styles from './Smaaktest.module.css';
import ChooseTaste from "../../components/ChooseTaste/ChooseTaste.jsx";
import ChooseOrderBox from "../../components/ChooseOrderBox/ChooseOrderBox.jsx";
import ChooseBox from "../../components/ChooseBox/ChooseBox.jsx";
import ChooseHeader from "../../components/ChooseHeader/ChooseHeader.jsx";
import {Link} from "react-router-dom";

export default function Smaaktest() {

    const [step, setStep] = useState("Smaaktest");
    const order = ["Smaaktest", "KiesJeBox"];


    const handleStepChange = () => {
        const currentIndex = order.indexOf(step);
        const nextIndex = (currentIndex + 1) % order.length;
        setStep(order[nextIndex]);
    };

    return (
        <article className={styles['choose-taste']}>
            <h1>Doe de smaaktest en kies je box</h1>
                <div>
                    {step === "Smaaktest" && (
                        <>
                            <ChooseHeader activeStep ='Smaaktest' />
                            <ChooseTaste />
                        </>
                    )}
                    {step === "KiesJeBox" && (
                        <>
                            <ChooseHeader activeStep ='KiesJeBox' />
                            <ChooseBox />
                        </>
                    )}

                </div>
                <button className={styles['taste-button']} onClick={handleStepChange}>
                    {step === "Smaaktest" ? "Kies je Box" : <Link to={`/webshop/winkelmandje`}>Bestellen</Link>}
                </button>
        </article>
    );
}