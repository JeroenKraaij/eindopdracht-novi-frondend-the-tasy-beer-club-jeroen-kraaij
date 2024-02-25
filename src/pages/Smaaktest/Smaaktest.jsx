import {useEffect, useState} from 'react';
import styles from './Smaaktest.module.css';
import ChooseTaste from "../../components/ChooseTaste/ChooseTaste.jsx";
import ChooseBox from "../../components/ChooseBox/ChooseBox.jsx";
import ChooseHeader from "../../components/ChooseHeader/ChooseHeader.jsx";
import { Link } from "react-router-dom";
import PageBanner from "../../components/PageHero/PageBanner.jsx";

export default function Smaaktest() {
    const [step, setStep] = useState("Smaaktest");
    const [likeCategory, setLikeCategory] = useState([]);
    const [DislikeCategory, setDislikeCategory] = useState([]);
    const [categoryCounts, setCategoryCounts] = useState({});
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

    useEffect(() => {
    }, [categoryCounts]);
    return (
        <article className={styles['choose-taste']}>
            <div className={styles ['main-taste-comp']}>
                {step === "Smaaktest" && (
                    <>
                        <ChooseHeader activeStep='Smaaktest'  />
                        <ChooseTaste
                            categoryCounts={categoryCounts}
                            setCategoryCounts={setCategoryCounts}
                            testResults={handleTasteTestResultChange}
                            upDateLikeCategory={likeCategory}
                            upDateDislikeCategory={DislikeCategory}
                            handleStepChange={handleStepChange}
                            step={step}
                        />
                    </>
                )}
            </div>
            <div className={styles ['main-taste-comp']}>
                {step === "KiesJeBox" && (
                    <>
                        <div className={styles['header.comp']}><ChooseHeader activeStep='KiesJeBox' /></div>
                        <ChooseBox
                        likedFlavour={likeCategory}
                        />
                    </>
                )}
            </div>
        </article>
    );
}