import React, { useState, useEffect } from 'react';
import styles from "./Winkelmandje.module.css";
import { useSelectedBeer } from '../../context/SelectedBeerContext.jsx';
import { fetchBeerData } from "../../api/fetchBeerData.js";
import SignUp from "../../components/SignUp/SignUp.jsx";
import LogIn from "../../components/LogIn/LogIn.jsx";
import QuantityCounter from '../../components/QuantityCounter/QuantityCounter.jsx';

export default function Winkelmandje() {
    const { selectedBeerId } = useSelectedBeer();
    const { beers } = fetchBeerData();
    const [beerProduct, setBeerProduct] = useState(null);
    const [quantity, setQuantity] = useState(0); // State to hold the quantity

    useEffect(() => {
        if (selectedBeerId) {
            const selectedBeer = beers.find(beer => beer.id === selectedBeerId);
            setBeerProduct(selectedBeer);
        }
    }, [selectedBeerId, beers]);

    const calculateSubtotal = () => {
        const price = 1.15;
        return (quantity * price).toFixed(2);
    };

    return (
        <>
            <article className={styles['article-winkelmandje']}>
                <h1>Winkelmandje</h1>
                    {beerProduct && (
                        <>
                            <table>
                                <thead>
                                    <tr>
                                        <th>delete</th>
                                        <th>image</th>
                                        <th>Product</th>
                                        <th>Prijs</th>
                                        <th>Aantal</th>
                                        <th>Subtotaal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className={styles.productRemove}>X</td>
                                        <td className={styles.productThumbnail}><img src={beerProduct.image_url} alt={beerProduct.name}/> </td>
                                        <td className={styles.productName}>{beerProduct.name}</td>
                                        <td className={styles.productPrice}> € 1,15</td>
                                        <td className={styles.productQuantity}><QuantityCounter setQuantity={setQuantity} /></td>
                                        <td className={styles.subtotal}> € {calculateSubtotal()}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
                    )}
                <section className={styles['login-view']}>
                    <div className={styles.subscription}>
                        <h3>Verzendgegevens</h3>
                        <SignUp/>
                    </div>
                    <div className={styles.login}>
                        <h3>Login op je account</h3>
                        <LogIn/>
                    </div>
                </section>
            </article>
        </>
    );
}
