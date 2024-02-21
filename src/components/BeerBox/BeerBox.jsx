import React from "react";
import styles from "./BeerBox.module.css";
import { useFetchOneBeerData } from "../../api/useFetchOneBeerData.js";

export default function BeerBox({ selectedBeers }) {
    return (
            <div className={styles["order-beer-box-select"]}>
                {selectedBeers.map((beerIndex) => (
                    <BeerItem key={beerIndex} beerIndex={beerIndex} />
                ))}
            </div>
    );
}

function BeerItem ({ beerIndex }) {
    const { singleBeer, isLoading, error } = useFetchOneBeerData(beerIndex);

    return (
        <div className={styles["order-beer-box"]}>
            <ul className="webshop-list">
                {isLoading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {singleBeer && (
                    <>
                        <li >
                            <figure className="webshop-image-box">
                                <img src={singleBeer.image_url} alt={singleBeer.name} />
                            </figure>
                        </li>
                        <li>
                            <strong>{singleBeer.name}</strong>
                        </li>
                        <li>
                            <strong>{singleBeer.abv}%</strong>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
}
