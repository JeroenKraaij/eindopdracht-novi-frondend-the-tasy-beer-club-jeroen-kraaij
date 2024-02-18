import React, { useState, useEffect } from 'react';
import styles from "./Winkelmandje.module.css";
import { useSelectedBeer } from '../../context/SelectedBeerContext.jsx';
import { useFetchBeerData } from "../../api/useFetchBeerData.js";
import QuantityCounter from '../../components/QuantityCounter/QuantityCounter.jsx';
import Buttons from "../../components/Buttons/Buttons.jsx";
import { Link } from "react-router-dom";

export default function Winkelmandje() {
    const { selectedBeerId } = useSelectedBeer();
    const { fetchAllData, isLoading, error } = useFetchBeerData();
    const [beerProduct, setBeerProduct] = useState(null);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        if (selectedBeerId && fetchAllData && fetchAllData.length > 0) {
            const selectedBeer = fetchAllData.find(beer => beer.id === selectedBeerId);
            setBeerProduct(selectedBeer);
        }
    }, [selectedBeerId, fetchAllData]);

    useEffect(() => {

        console.log("fetchAllData:", fetchAllData);
        console.log("isLoading:", isLoading);
    }, [selectedBeerId, fetchAllData, isLoading]);

    const calculateSubtotal = () => {
        const price = 1.15;
        return (quantity * price).toFixed(2);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <article className={styles['article-winkelmandje']}>
            <h1>Winkelmandje</h1>
            {beerProduct ? (
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
                    <Link to="/webshop/checkout">
                        <Buttons className="button-nav" buttonName="Bestellen"/>
                    </Link>
                </>
            ) : (
                <div>
                    <p>Op dit moment is je winkelmandje leeg</p>
                    <Link to="/webshop">
                        <Buttons className="button-nav" buttonName={"Terug naar Webshop"}/>
                    </Link>
                </div>
            )}
        </article>
    );
}
