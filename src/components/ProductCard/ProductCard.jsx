import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';
import Buttons from "../Buttons/Buttons.jsx";

export default function ProductCard ({ props }) {
    if (!props) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles['product-card']}>
            <div className={styles['product-card-image']}>
                <img className={styles['product-image']} src={props.image_url} alt={`Image of ${props.name}`} />
            </div>
            <div className={styles['product-card-description']}>
                <h2>{props.name}</h2>
                <p>{props.abv}%</p>
                <p>ID = {props.id}</p>

            </div>
            <Link to={`/product/${props.id}`}>
                <Buttons className="button-nav" buttonName={"Meer informatie"}/>
            </Link>
        </div>
    );
}

