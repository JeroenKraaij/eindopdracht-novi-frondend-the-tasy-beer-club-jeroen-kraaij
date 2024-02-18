// Webshop.jsx
import { useState } from 'react';
import styles from './Webshop.module.css';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';
import { useFetchFilteredBeerData } from '../../api/useFetchFilteredBeerData.js';
import SearchDropdown from '../../components/SearchDropdown/SearchDropdown.jsx';

export default function Webshop() {
    const [pagePagination, setPagePagination] = useState(1);
    const [perPageCount, setPerPageCount] = useState(10); // Initial per page count
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
                </div>
                <div className={styles['searchDropdown']}>
                    <p>Zoek een biertje op soort:</p>
                    <SearchDropdown />
                </div>
            </div>
            <article className={styles['product-overview']}>
                {isLoading && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
                <div className={styles.pagination}>
                    <button className="button-nav" onClick={handleBackPagination} disabled={pagePagination === 1}>← Terug</button>
                    <button className="button-nav" onClick={handleForwardPagination} disabled={fetchAllData?.length === 0}>Vooruit →</button>
                </div>
                <div className={styles['product-count']}>
                    <select onChange={handlePerPageCountChange} value={perPageCount}>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={80}>80</option>
                    </select>
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
