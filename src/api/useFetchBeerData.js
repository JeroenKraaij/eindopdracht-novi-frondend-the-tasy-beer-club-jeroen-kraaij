import { useState, useEffect } from "react";
import axios from 'axios';

export const useFetchBeerData = () => {
    const [fetchData, setFetchData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [pageNumber, setPageNumber] = useState(1); // Added pagination support

    useEffect(() => {
        const abortController = new AbortController();

        async function fetchBeers() {
            try {
                setIsLoading(true);

                let endpoint = `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=80`;
                if (searchQuery) {
                    endpoint += `&beer_name=${searchQuery}`;
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

        const delayTimer = setTimeout(fetchBeers, 300); // Debouncing input
        return () => {
            clearTimeout(delayTimer);
            abortController.abort();
        };
    }, [searchQuery, pageNumber]); // Added pageNumber dependency

    return { beers: fetchData, isLoading, error, searchQuery, setSearchQuery, setPageNumber };
}
