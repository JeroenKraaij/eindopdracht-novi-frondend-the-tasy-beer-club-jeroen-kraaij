import { useState, useEffect } from "react";
import axios from 'axios';

export const useFetchBeerData = () => {
    const [fetchData, setFetchData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // useEffect(() => {
    //     console.log("This is fetchData", fetchData)
    // }, [fetchData])

    useEffect(() => {
        // const abortController = new AbortController();

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

        void fetchBeers();

        // return () => {
        //     abortController.abort();
        // };
    }, []);

    return { fetchData, isLoading, error };
    // return { fetchData, isLoading, error };

}
