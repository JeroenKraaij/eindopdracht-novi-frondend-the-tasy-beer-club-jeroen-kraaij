import {useFetchRandomBeerData} from "../../api/useFetchRandomBeerData.js";
import styles from "./RandomBeer.module.css"


export default function RandomBeer  () {

    const { randomBeer, isLoading, error } = useFetchRandomBeerData();

    return (
            <div className={styles["random-beer-list"]}>
                <ul>
                {isLoading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error}</p>
                ) : randomBeer ? (
                        <li>
                            <figure className={styles["random-beer-image-box"]}>
                                <img src={randomBeer.image_url} alt={randomBeer.name}/>
                            </figure>
                            <h3>{randomBeer.name}</h3>
                            <p>ABV: {randomBeer.abv}%</p>
                        </li>

                ) : null}
                </ul>
            </div>
    )
}