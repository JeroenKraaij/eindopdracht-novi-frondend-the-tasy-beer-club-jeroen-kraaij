import { useState, useEffect } from "react";
import axios from 'axios';

export const useFetchOneBeerData = (beerIndex) => {
    const [singleBeer, setSingleBeer] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const abortController = new AbortController();

        const fetchSingleBeer = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://api.punkapi.com/v2/beers/${beerIndex}`, {
                    signal: abortController.signal,
                });
                setSingleBeer(response.data[0]);
            } catch (error) {
                console.error(error);
                setError('An error occurred while fetching beer data.');
            } finally {
                setIsLoading(false);
            }
        };

        if (beerIndex !== '') {
            fetchSingleBeer();
        }

        return () => {
            console.log('Clean Up');
            abortController.abort();
        };
    }, [beerIndex]);

    return { singleBeer, isLoading, error };
};
