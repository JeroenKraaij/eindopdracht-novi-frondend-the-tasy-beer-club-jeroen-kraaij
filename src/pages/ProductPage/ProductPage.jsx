import {Link, useNavigate, useParams} from 'react-router-dom';
import styles from './ProductPage.module.css';
import { useProductPage } from '../../hooks/useProductPage.js';
import { findBeerColor } from "../../helpers/findBeerColor.js";
import Buttons from "../../components/Buttons/Buttons.jsx";

export default function ProductPage() {
    const { id } = useParams();
    const { beerProduct, isLoading, error, setSelectedBeerProduct } = useProductPage(id);
    const navigate = useNavigate()

    const handleOrderProduct = (e) => {
        e.preventDefault()
        if (beerProduct) {
            setSelectedBeerProduct(beerProduct);
            navigate('/webshop/winkelmandje')
        } else {
            console.log("No beer product selected.");
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!beerProduct) {
        return <div>Product not found</div>;
    }

    const beerColorStyle = findBeerColor(beerProduct.srm);
    const sortedFoodPairing = beerProduct.food_pairing.sort();

    return (
        <article className={styles["article-product-page"]}>
            <div className="breadcrumb">
                <Link to="/webshop"><p>← Terug naar Webshop</p></Link>
            </div>
            <section className={styles["content-product-page"]}>
                <figure className={styles["image-box"]}>
                    <img className={styles["product-image"]} src={beerProduct.image_url} alt={beerProduct.name}/>
                </figure>
                <div className={styles["content-box"]}>
                    <h1>{beerProduct.name}</h1>
                    <p className={styles.tagline}>{beerProduct.tagline}</p>
                    <p><strong>{beerProduct.abv}%</strong></p>
                    <h2>Omschrijving - {beerProduct.name}</h2>
                    <p>{beerProduct.description}</p>
                    <h3>Biercategorie:</h3>
                    <p>{beerColorStyle.description}</p>
                    <div className={styles["beer-color"]}>
                        <h3>Kleur van het bier:</h3>
                        <p className={`${styles.circle} ${styles[beerColorStyle.className]}`}></p>
                    </div>
                    <h3>Smaakt goed bij:</h3>
                    <ul>
                        {sortedFoodPairing.map((food, index) => (
                            <li key={index}>{food}</li>
                        ))}
                    </ul>
                    <div className={styles["order-beer-buttons"]}>
                            <Buttons
                                className={styles["button-order-product"]}
                                handleButtonClick={(e) => handleOrderProduct(e)}
                                buttonName={"Bestellen"}
                            />
                    </div>
                </div>
            </section>
        </article>
    );
}
