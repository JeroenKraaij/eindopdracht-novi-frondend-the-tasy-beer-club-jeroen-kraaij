import './Webshop.css';
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import { fetchBeerData } from "../../api/fetchBeerData.js";
export default function Webshop() {
    const { beers, isLoading, error,searchQuery,  setSearchQuery } = fetchBeerData();

    return (
        <>
            <h1>Webshop</h1>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder='Zoek je bier'
            />
            <article className='product-overview'>
                {isLoading && <h2>Is Loading...</h2>}
                {error && <h2>{error}</h2>}
                <ul>{beers?.map((jeroen) => (
                    <li key={jeroen.id}>
                        <ProductCard
                            beer={jeroen} />
                    </li>
                ))}
                </ul>
                {error && <p className="error">{error}</p>}
            </article>
        </>
    );
}