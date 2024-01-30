import { useState, useEffect } from "react";
import axios from 'axios';
import './Webshop.css';
import ProductArticle from "../../components/ProductArticle/ProductArticle.jsx";


export default function Webshop() {
    const [beers, setBeers] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('');
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
    const abortController = new AbortController()
    async function fetchBeers () {
        try {
            setIsLoading(true)

            let endpoint = 'https://api.punkapi.com/v2/beers?page=1&per_page=80';
            if (searchQuery) {
                endpoint = `https://api.punkapi.com/v2/beers/${searchQuery}`
            }
            const response = await axios.get(endpoint,{

                signal: abortController.signal,
            });
            console.log(response)
            setBeers(response.data);
        } catch (e) {
            console.error(e);
            setError('');
        } finally {
            setIsLoading(false)
        }
    }

    fetchBeers ()

        return () => {
        console.log('Clean Up');
            abortController.abort();
        }
    }, [searchQuery]);

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

                            <ul>
                                <li>
                                    {beers?.map((beer) => (
                                        <ProductArticle key={beer.id} beer={beer} />
                                ))}
                                </li>
                            </ul>
                        {error && <p className="error">{error}</p>}
                    </article>
        </>
    );
}
