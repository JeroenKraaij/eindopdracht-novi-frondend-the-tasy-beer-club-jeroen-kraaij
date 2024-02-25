import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';
import Button from "../Button/Button.jsx";

export default function ProductCard ({ props }) {
    if (!props) {
        return <div>Loading...</div>;
    }

    return (
        <section className={styles["product-card"]}>
            <figure className={styles["product-card-image"]}>
                <img className={styles["product-image"]} src={props.image_url} alt={`Image of ${props.name}`} />
            </figure>
            <div className={styles["product-card-content"]}>
                <div className={styles["product-card-description"]}>
                    <h2>{props.name}</h2>
                    <p>{props.abv}%</p>
                </div>
                <div className={styles['product-card-link']}>
                    <Link to={`/product/${props.id}`}>
                        <Button
                            className="button-nav"
                            buttonName={"+"}
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}

