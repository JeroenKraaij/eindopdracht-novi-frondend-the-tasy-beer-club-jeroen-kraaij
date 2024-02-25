import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './ProductPage.module.css';
import { useProductPage } from '../../hooks/useProductPage.js';
import ProductBeerContent from "../../components/ProductpageContent/ProductBeerContent.jsx";
import Button from "../../components/Button/Button.jsx";

export default function ProductPage() {
    const { id } = useParams();
    const { beerProduct, isLoading, error, setSelectedBeerProduct } = useProductPage(id);
    const navigate = useNavigate();

    const handleOrderProduct = (e) => {
        e.preventDefault();
        if (beerProduct) {
            setSelectedBeerProduct(beerProduct);
            navigate('/webshop/winkelmandje');
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

    return (
        <article className={styles["article-product-page"]}>
            <div className="breadcrumb">
                <Link to="/webshop"><p>← Terug naar Webshop</p></Link>
            </div>
            <section className={styles["content-product-page"]}>
                <ProductBeerContent
                    handleOrder={handleOrderProduct}
                    beerProduct={beerProduct}
                />
            </section>
            <div className={styles["order-beer-buttons"]}>
                <Button
                    className={styles["button-order-product"]}
                    handleButtonClick={handleOrderProduct}
                    buttonName={"Bestellen"}
                />
            </div>
        </article>
    );
}
