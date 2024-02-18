import { useState, useEffect } from "react";
import axios from 'axios';

export const useFetchBeerData = () => {
    const [fetchData, setFetchData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const abortController = new AbortController();

        async function fetchBeers() {
            try {
                setIsLoading(true);

                const response = await axios.get(`https://api.punkapi.com/v2/beers?page=1&per_page=80`);

                setFetchData(response.data);
            } catch (error) {
                console.error(error);
                setError('An error occurred while fetching beer data.');
            } finally {
                setIsLoading(false);
            }
        }

        fetchBeers(); // No dependencies, fetch data on component mount

        return () => {
            abortController.abort();
        };
    }, []); // Empty dependency array, runs once on component mount

    return { beers: fetchData, isLoading, error };
}
