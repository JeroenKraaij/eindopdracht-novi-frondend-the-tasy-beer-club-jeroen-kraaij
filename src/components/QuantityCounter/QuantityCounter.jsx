import { useState } from 'react';
import styles from"./QuantityCounter.module.css"

export default function QuantityCounter() {
    const [quantity, setQuantity] = useState(0);

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className={styles.quantityCounter}>
            <button onClick={decrementQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>+</button>
        </div>
    );
}