import { useState } from 'react';
import styles from './Webshop.module.css';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';
import { useFetchFilteredBeerData } from '../../api/useFetchFilteredBeerData.js';
import Selecter from "../../components/Selecter/Selecter.jsx";
import Button from "../../components/Button/Button.jsx";

export default function Webshop() {
    const [pagePagination, setPagePagination] = useState(1);
    const [perPageCount, setPerPageCount] = useState(10);
    const { beers: fetchAllData, isLoading, error, setSearchQuery, setPageNumber } = useFetchFilteredBeerData(perPageCount, setPerPageCount, pagePagination);

    const handleForwardPagination = () => {
        setPagePagination(prevPageNumber => prevPageNumber + 1);
    };

    const handleBackPagination = () => {
        if (pagePagination > 1) {
            setPagePagination(prevPageNumber => prevPageNumber - 1);
        }
    };
    const handlePerPageCountChange = (e) => {
        const selectedCount = parseInt(e.target.value);
        setPerPageCount(selectedCount);
        setPageNumber(1);
    };

    return (
        <>
            <h1>Webshop</h1>
            <div className={styles.searchbar}>
                <div className={styles.searchField}>
                    <p>Zoek een biertje op naam:</p>
                    <input
                        className={styles.inputField}
                        type="text"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Zoek je bier"
                    />
                    <Selecter
                        onChangeHandle={handlePerPageCountChange}
                        value={perPageCount}
                    />
                </div>
                <div className={styles["product-count"]}></div>
            </div>
            <article className={styles['product-overview']}>
                {isLoading && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
                <div className={styles.pagination}>
                    <Button
                        buttonName={"← Terug"}
                        className="button-nav"
                        handleButtonClick={handleBackPagination}
                        disabled={pagePagination === 1}
                    />
                    <Button
                        buttonName={"Vooruit →"}
                        className="button-nav"
                        handleButtonClick={handleForwardPagination}
                        disabled={fetchAllData?.length === 0}
                    />
                </div>
                <ul>
                    {fetchAllData &&
                        fetchAllData.map((beer) => (
                            <li key={beer.id}>
                                <ProductCard props={beer} />
                            </li>
                        ))}
                </ul>
                {error && <p className="error">{error}</p>}
            </article>
        </>
    );
}
