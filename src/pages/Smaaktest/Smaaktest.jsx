import {useState} from 'react';
import styles from './Smaaktest.module.css';
import ChooseTaste from "../../components/ChooseTaste/ChooseTaste.jsx";
import ChooseBox from "../../components/ChooseBox/ChooseBox.jsx";
import ChooseHeader from "../../components/ChooseHeader/ChooseHeader.jsx";
import { Link } from "react-router-dom";

export default function Smaaktest() {
    const [step, setStep] = useState("Smaaktest");
    const [likeCategory, setLikeCategory] = useState([]);
    const [DislikeCategory, setDislikeCategory] = useState([]);
    const [categoryCounts, setCategoryCounts] = useState({});
    console.log(categoryCounts)

    const order = ["Smaaktest", "KiesJeBox"];
    const handleTasteTestResultChange = (likeCategories, dislikeCategories) => {
        setLikeCategory(likeCategories);
        setDislikeCategory(dislikeCategories);
    };
    const handleStepChange = () => {
         const currentIndex = order.indexOf(step);
        const nextIndex = (currentIndex + 1) % order.length;
        setStep(order[nextIndex]);
    };

    return (
        <article className={styles['choose-taste']}>
            <div className={styles ['main-taste-comp']}>
                {step === "Smaaktest" && (
                    <>
                    <div className={styles['header.comp']}><ChooseHeader activeStep='Smaaktest'  /></div>
                        <ChooseTaste
                            categoryCounts={categoryCounts}
                            setCategoryCounts={setCategoryCounts}
                            testResults={handleTasteTestResultChange}
                            upDateLikeCategory={likeCategory}
                            upDateDislikeCategory={DislikeCategory}/>
                    </>
                )}

            </div>
            <div className={styles ['main-taste-comp']}>
                {step === "KiesJeBox" && (
                    <>
                    <div className={styles['header.comp']}><ChooseHeader activeStep='KiesJeBox' /></div>
                        <ChooseBox
                        likedflavor={likeCategory}/>
                    </>
                )}
            </div>

            <button className={styles['taste-button']} onClick={handleStepChange}>
                {step === "Smaaktest" ? "Kies je Box" : <Link to={`/webshop/winkelmandje`}>Bestellen</Link>}
            </button>
        </article>
    );
}