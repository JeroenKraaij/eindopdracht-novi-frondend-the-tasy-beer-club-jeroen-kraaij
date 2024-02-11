import { useEffect, useState } from 'react';
import { fetchBeerData } from '../api/fetchBeerData.js';

export const useFilterBeers = (ingredient) => {
    const { beers: allBeers, isLoading, error } = fetchBeerData();
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (!isLoading && !error) {
            const resultArrays = ingredient.likedflavor.map((word) => {
                return allBeers
                    .filter((beer) => beer.description.toLowerCase().includes(word.toLowerCase()))
                    .map(({ id, description, image_url }) => ({ id, description, image_url, word }));
            });

            setFilteredData(resultArrays);
        }
    }, [allBeers, isLoading, error]);

    return { filteredData, ingredient };
};