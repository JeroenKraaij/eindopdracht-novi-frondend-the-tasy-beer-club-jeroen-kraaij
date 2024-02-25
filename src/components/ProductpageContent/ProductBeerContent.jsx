import styles from "../../pages/ProductPage/ProductPage.module.css";
import { findBeerColor } from "../../helpers/findBeerColor.js";

export default function ProductBeerContent ({ beerProduct }) {
    if (!beerProduct) {
        return <div>Product not found</div>;
    }

    const beerColorStyle = findBeerColor(beerProduct.srm);
    const sortedFoodPairing = beerProduct.food_pairing.sort();

    return (
        <>
            <figure className={styles["image-box"]}>
                <img className={styles["product-image"]} src={beerProduct.image_url} alt={beerProduct.name}/>
            </figure>
            <div className={styles["content-box"]}>
                <h2>{beerProduct.name}</h2>
                <p className={styles.tagline}>{beerProduct.tagline}</p>
                <p><strong>{beerProduct.abv}%</strong></p>
                <h3>Omschrijving</h3>
                <p>{beerProduct.description}</p>
                <h3>Biercategorie:</h3>
                <p>{beerColorStyle.description}</p>
                <div className={styles["beer-color"]}>
                    <h3>Kleur van het bier:</h3>
                    <div className={`${styles.circle} ${styles[beerColorStyle.className]}`}></div>
                </div>
                <h3>Smaakt goed bij:</h3>
                <ul>
                    {sortedFoodPairing.map((food, index) => (
                        <li key={index}>{food}</li>
                    ))}
                </ul>
                <h3>Tip van de brouwer</h3>
                <p>{beerProduct.brewers_tips}</p>
            </div>
        </>
    );
}
