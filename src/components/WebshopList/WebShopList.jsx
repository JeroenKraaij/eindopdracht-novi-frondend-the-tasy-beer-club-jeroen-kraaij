import styles from "../../pages/Winkelmandje/Winkelmandje.module.css";
import QuantityCounter from "../QuantityCounter/QuantityCounter.jsx";
export default function WebShopList ({orderedBeer, price, totalPrice, setQuantity, quantity}) {

    return (
        <>
        <figure className="webshop-image-box">
            <img src={orderedBeer.image_url} alt={orderedBeer.name}/>
        </figure>
            <p>{orderedBeer.name}</p>
            <p className={styles.productPrice}> € {price.toFixed(2)}</p>
            <p className={styles.productQuantity}><QuantityCounter setQuantity={setQuantity} quantity={quantity}/></p>
            <div className={styles["summary-order"]}>
                <p>Totaalbedrag € {totalPrice.toFixed(2)} </p>
            </div>
        </>

    )
}