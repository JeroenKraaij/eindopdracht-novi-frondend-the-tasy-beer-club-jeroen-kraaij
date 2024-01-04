import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Webshop.css';
import ProductArticle from "../../components/ProductArticle/ProductArticle.jsx";

function Webshop() {
    const [beers, setBeers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        getBeers();
    }, []);

    async function getBeers() {
        setError('');
        try {
            const result = await axios.get('https://api.punkapi.com/v2/beers');
            setBeers(result.data);
        } catch (e) {
            console.error(e);
            setError('Error get Beer data');
        }
    }

    return (
        <>
            <main className='main-outer-container'>
                <section className='main-inner-container'>
                    <h1>Webshop</h1>
                        <article className='product-overview'>
                            {beers.length > 0 && (
                                <ul className='test'>
                                    {beers.map((beer) => (
                                        <ProductArticle key={beer.id} beer={beer} />
                                ))}
                                </ul>
                        )}
                        {error && <p className="error">{error}</p>}
                    </article>
                </section>
            </main>
        </>
    );
}

export default Webshop;