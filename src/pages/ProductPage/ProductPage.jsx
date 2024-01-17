
import React from 'react';
import styles from './ProductPage.module.css/';
import { useParams } from 'react-router-dom';

export default function ProductPage({ beers }) {
    const { id } = useParams();
    const beer = beers.find((beer) => {
        return beer.id === parseInt(id, 10);
    });

    if (!beer) {
        return <div>Product not found</div>;
    }

    return (
        <div className={styles.productPage}>
            <h2>{beer.name}</h2>
            <img className={styles.productImage} src={beer.image_url} alt={beer.name} />
            <p>{beer.description}</p>
        </div>
    );
}