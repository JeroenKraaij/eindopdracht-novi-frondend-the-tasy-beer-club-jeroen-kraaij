import { useState, useEffect } from "react";
import axios from 'axios';

export const fetchBeerData = () => {
    const [fetchData, setFetchData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const abortController = new AbortController();

        async function fetchBeers() {
            try {
                setIsLoading(true);

                let endpoint = 'https://api.punkapi.com/v2/beers?page=1&per_page=80';
                if (searchQuery) {
                    endpoint = `https://api.punkapi.com/v2/beers?beer_name=${searchQuery}`;
                }

                const response = await axios.get(endpoint, {
                    signal: abortController.signal,
                });

                setFetchData(response.data);
            } catch (error) {
                console.error(error);
                setError('An error occurred while fetching beer data.');
            } finally {
                setIsLoading(false);
            }
        }

        fetchBeers();

        return () => {
            console.log('Clean Up');
            abortController.abort();
        };
    }, [searchQuery]);

    return { beers: fetchData, isLoading, error, searchQuery , setSearchQuery };
}