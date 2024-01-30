import styles from './ProductPage.module.css';
import { Link, useParams } from 'react-router-dom';

export default function ProductPage ( { beer } ) {
    const { id } = useParams();
    const beerProduct = beer.find(beer => beer.id === parseInt(id, 10));

    if (!beerProduct) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <div key={beerProduct.id} className={styles.productPage}>
                <p>{beerProduct.name}</p>
                <p>{beerProduct.description}</p>
            </div>
            <Link to="/webshop">
                <button>Terug naar Webshop</button>
            </Link>
        </>
    );
}