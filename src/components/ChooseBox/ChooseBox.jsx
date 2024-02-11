import { useFilterBeers } from "../../helpers/filterBeers.js";
import { maximizeWords } from "../../helpers/maximizeWords.js";
import { sliceFilterBeers } from "../../helpers/sliceFilterBeers.js";
import styles from "./ChooseBox.module.css";
import { useEffect } from "react";

export default function ChooseBox(likedFlavour) {
    const { filteredData, targetWords } = useFilterBeers(likedFlavour);
    const slicedData = sliceFilterBeers(filteredData);

    useEffect(() => {}, [targetWords]);

    return (
        <>
            <h1>Stel je box samen</h1>
            <p>Ons advies op basis van jouw smaaktest.</p>
            <ul className={styles.beerList}>
                {slicedData && slicedData.map((resultArray, wordIndex) => (
                    <div key={wordIndex}>
                        <div className={styles.resultsBeerTest}>
                            {resultArray.map(({ id, description, image_url, word }, index) => (
                                <li key={index}>
                                    <p>ID: {id}</p>
                                    <img className={styles.beerImage} src={image_url} alt={`Beer ${id}`} />
                                    <p>Description: {maximizeWords(description, 100)}</p>
                                    <p>Smaaktest result: {word}</p>
                                </li>
                            ))}
                        </div>
                    </div>
                ))}
            </ul>
        </>
    );
}
