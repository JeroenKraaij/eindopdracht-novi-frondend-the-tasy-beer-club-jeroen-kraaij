import styles from './ChooseTaste.module.css';
import {UseBeerTest} from '../../hooks/UseBeerTest.js';
import {Link} from "react-router-dom";

export default function ChooseTaste({ testResults, setCategoryCounts, statusBarResults, handleStepChange, step }) {
    const { images, imageUrls,
        handleButtonClick } = UseBeerTest(testResults, setCategoryCounts, statusBarResults);

    return (
        <>
            <div className={styles["taste-statusbar"]}>
                {images < imageUrls.length ? <p>Keuze {images + 1} van 12</p> : <p>Statusbar: 12 van 12 keuzes</p>}
            </div>
            <div className={styles["taste-component"]}>
                {images < imageUrls.length ?
                    <img
                        className={styles["main-choose-image"]}
                        src={imageUrls[images]}
                        alt={`Image ${images + 1}`}
                    />
                    :
                    <p>Je bent geslaagd voor de test</p>

                }
                <div>
                    {images === imageUrls.length  ?
                        <button className="button-nav" onClick={handleStepChange}>
                            {step === "Smaaktest" ? "Kies je Box" : <Link to={`/webshop/winkelmandje`}>Bestellen</Link>}
                        </button>
                        :
                        <>
                            <button className={styles['btn-taste-test']} onClick={() => handleButtonClick(true)}>👍🏼</button>
                            <button className={styles['btn-taste-test']} onClick={() => handleButtonClick(false)}>👎🏼</button>
                        </>
                    }
                </div>
            </div>
        </>
    );
}
