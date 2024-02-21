import { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from "./Winkelmandje.module.css";
import { SelectedBeerContext } from '../../context/SelectedBeerContext.jsx';
import { useFetchBeerData } from "../../api/useFetchBeerData.js";
import Buttons from "../../components/Buttons/Buttons.jsx";
import WebShopList from "../../components/WebshopList/WebShopList.jsx";

export default function Winkelmandje() {
    const { selectedBeerProduct }  = useContext(SelectedBeerContext);
    const { fetchData, isLoading, error } = useFetchBeerData();
    const [orderedBeers, setOrderedBeers] = useState([selectedBeerProduct]);
    const [quantity, setQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const price = 2.50;

    useEffect(() => {
        if (selectedBeerProduct && fetchData.length > 0) {
            const beerArray = [];
            for (let i = 0; i < selectedBeerProduct.length; i++) {
                const selected = fetchData.find(beer => beer.id === selectedBeerProduct[i]);
                beerArray.push(selected);
                setOrderedBeers(beerArray);
            }
        }
    }, [selectedBeerProduct, fetchData]);

    useEffect(() => {
        setTotalPrice(quantity * price);
    }, [quantity]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <article className={styles['article-winkelmandje']}>
            <h1>Winkelmandje</h1>
            {orderedBeers[0] !== 0 ? orderedBeers.map((orderedBeer) => {
                return (
                    <ul key={orderedBeer.id}>
                        <li className="webshop-list">
                            <WebShopList
                                orderedBeer={orderedBeer}
                                price={price}
                                totalPrice={totalPrice}
                                quantity={quantity}
                                setQuantity={setQuantity}
                            />
                        </li>
                    </ul>
                );
            }) : (
                <div>
                    <p>Op dit moment is je winkelmandje leeg</p>
                    <Link to="/webshop">
                        <Buttons className="button-nav" buttonName={"Naar Webshop"}/>
                    </Link>
                </div>
            )}
            <Link to="/webshop/checkout">
                <Buttons className="button-nav" buttonName="Bestellen"/>
            </Link>
        </article>
    );
}
