import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import styles from './ProductPage.module.css';
import { useSelectedBeer } from '../../context/SelectedBeerContext.jsx';
import {fetchBeerData} from "../../api/fetchBeerData.js";

export default function ProductPage() {
    const { id } = useParams();
    const { beers, isLoading, error } = fetchBeerData();
    const { setSelectedBeerId } = useSelectedBeer();
    const [beerProduct, setBeerProduct] = useState(null);

    useEffect(() => {
        if (!isLoading) {
            const selectedBeer = beers.find(beer => beer.id === parseInt(id));
            setBeerProduct(selectedBeer);
        }
    }, [beers, isLoading, id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!beerProduct) {
        return <div>Product not found</div>;
    }

    const handleOrderProduct = () => {
        setSelectedBeerId(beerProduct.id);
    };

    return (
        <>
            <div className={styles.productPage}>
                <img src={beerProduct.image_url} alt={beerProduct.name}/>
                <p>{beerProduct.name}</p>
                <p>{beerProduct.description}</p>
               <Link to={`/webshop/winkelmandje`} >
                   <button onClick={handleOrderProduct}>Order product</button>
               </Link>
            </div>
            <Link to="/webshop">
                <button>Terug naar Webshop</button>
            </Link>
        </>
    );
}
