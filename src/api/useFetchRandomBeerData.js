// useFetchRandomBeerData.js
import { useState, useEffect } from "react";
import axios from 'axios';

export const useFetchRandomBeerData = () => {
    const [randomBeer, setRandomBeer] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const abortController = new AbortController();

        const fetchRandomBeer = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://api.punkapi.com/v2/beers/random`, {
                    signal: abortController.signal,
                });
                setRandomBeer(response.data[0]);
            } catch (error) {
                console.error(error);
                setError('An error occurred while fetching beer data.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchRandomBeer();

        return () => {
            console.log('Clean Up');
            abortController.abort();
        };
    }, []);

    return { randomBeer, isLoading, error };
};
