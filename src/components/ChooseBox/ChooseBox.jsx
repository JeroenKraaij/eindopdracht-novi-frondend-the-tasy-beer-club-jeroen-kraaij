import { useFilterBeers } from "../../helpers/filterBeers.js";
import { maximizeWords } from "../../helpers/maximizeWords";
import { sliceFilterBeers } from "../../helpers/sliceFilterBeers";
import { useProductPage } from '../../hooks/useProductPage.js';
import styles from "./ChooseBox.module.css";
import {Link} from "react-router-dom";

export default function ChooseBox({ likedFlavour }) {
    const { filteredData } = useFilterBeers(likedFlavour);
    const slicedData = sliceFilterBeers(filteredData);
    const { handleOrderProduct } = useProductPage();

    return (
        <>
            <h1>Stel je box samen</h1>
            <p>Ons advies op basis van jouw smaaktest.</p>
            <div className={styles.resultsBeerTest}>
                <ul className={styles.beerList}>
                    {slicedData && slicedData.map((resultArray, wordIndex) => (
                        <li key={wordIndex}>
                            {resultArray.map(({ id, name, description, image_url, word }, index) => (
                                <div key={`${wordIndex}-${index}`} className={styles.beerItem}>
                                    <figure className={styles.beerImageBox}>
                                        <img className={styles.beerImage} src={image_url} alt={`Beer ${id}`} />
                                    </figure>
                                    <div>
                                        <p>ID: {id}</p>
                                        <p>{name}</p>
                                        <p>{maximizeWords(description, 100)}</p>
                                        <p>Smaaktest result: {word}</p>
                                    </div>
                                </div>
                            ))}
                        </li>
                    ))}

                </ul>
                <Link to={`/webshop/winkelmandje`}>
                    <button onClick={handleOrderProduct}>Order product</button>
                </Link>
            </div>
        </>
    );
}
