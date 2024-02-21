import React, {useState, useContext, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import styles from "./ChooseBox.module.css";
import { useFilterBeers } from "../../helpers/filterBeers.js";
import { maximizeWords } from "../../helpers/maximizeWords";
import { sliceFilterBeers } from "../../helpers/sliceFilterBeers";
import BeerBox from "../BeerBox/BeerBox.jsx";
import Buttons from "../Buttons/Buttons.jsx";
import { SelectedBeerContext } from "../../context/SelectedBeerContext.jsx"

export default function ChooseBox({ likedFlavour }) {
    const { filteredData } = useFilterBeers(likedFlavour);
    const slicedData = sliceFilterBeers(filteredData);
    const [selectedBeers, setSelectedBeers] = useState([]);
    const { setSelectedBeerProduct } = useContext(SelectedBeerContext);
    const navigate = useNavigate()

    useEffect(() => {
    }, [selectedBeers]);

    const handleCheckboxChange = (id, checked) => {
        if (checked) {
            setSelectedBeers([...selectedBeers, id]);
        } else {
            setSelectedBeers(selectedBeers.filter(beerId => beerId !== id));
        }
    };
    const handleOrder = () => {
        setSelectedBeerProduct(selectedBeers);
        navigate('/webshop/winkelmandje')
    };

    return (
        <section className={styles["section-choose-box"]}>
            <h1>Stel je Bierbox samen</h1>
            <div className={styles["results-beer-test"]}>
                <p>Ons advies op basis van jouw smaaktest.</p>
                <ul className={styles["beer-list"]}>
                    {slicedData && slicedData.map((resultArray, wordIndex) => (
                        <li key={wordIndex}>
                            {resultArray.map(({ id, name, description, image_url, abv, word }, index) => (
                                <div key={`${wordIndex}-${index}`} className={styles["beer-item"]}>
                                    <figure className={styles["beer-image-box"]}>
                                        <img className={styles["beer-image"]} src={image_url} alt={`Beer ${id}`} />
                                    </figure>
                                    <div className={styles["info-beer-content"]}>
                                        <h2>{name}</h2>
                                        <p><strong>{abv}%</strong></p>
                                        <p>{maximizeWords(description, 200)}</p>
                                        <p>Je hebt gekozen voor een biertje met: {word}</p>
                                        <label className={styles["label-select"]} htmlFor={`checkbox-${id}`}>Selecteer in je Bier box:
                                            <input
                                                className={styles["input-select"]}
                                                type="checkbox"
                                                id={`checkbox-${id}`}
                                                name={`checkbox-${id}`}
                                                onChange={e => handleCheckboxChange(id, e.target.checked)}
                                                checked={selectedBeers.includes(id)}
                                            />
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </li>
                    ))}
                </ul>
                <h4>Jouw geselecteerde Bierbox</h4>
                <BeerBox selectedBeers={selectedBeers} />
                    <Buttons
                        buttonName="Bestel deze box"
                        type="button"
                        className="button-nav"
                        handleButtonClick={handleOrder}
                    />
            </div>
        </section>
    );
}
