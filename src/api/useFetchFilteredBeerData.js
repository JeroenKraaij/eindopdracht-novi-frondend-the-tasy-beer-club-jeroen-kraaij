import { useState, useEffect } from "react";
import axios from 'axios';

export const useFetchFilteredBeerData = (perPageCount, setPerPageCount, pagePagination) => {
    const [fetchAllData, setFetchAllData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [pageNumber, setPageNumber] = useState('')

    useEffect(() => {
        const abortController = new AbortController();

        async function fetchBeers() {
            try {
                setIsLoading(true);

                let endpoint = `https://api.punkapi.com/v2/beers?page=${pagePagination}&per_page=${perPageCount}`;

                if (searchQuery) {
                    endpoint += `&beer_name=${searchQuery}`;
                }

                const response = await axios.get(endpoint, {
                    signal: abortController.signal,
                });

                setFetchAllData(response.data);

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
    }, [searchQuery, perPageCount, pagePagination]);

    return { beers: fetchAllData, isLoading, error, searchQuery, setSearchQuery, perPageCount, setPerPageCount, setPageNumber, pageNumber };

}