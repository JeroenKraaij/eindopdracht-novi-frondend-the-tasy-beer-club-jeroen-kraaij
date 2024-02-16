import { useEffect, useState } from 'react';
import { fetchBeerData } from '../api/fetchBeerData.js';

export const useFilterBeers = (likedFlavour) => {
    const { beers: allBeers, isLoading, error } = fetchBeerData();
    const [filteredData, setFilteredData] = useState([]);
    console.log(likedFlavour)
    useEffect(() => {
        if (!isLoading && !error && likedFlavour) {
            const resultArrays = likedFlavour.map((word) => {
                return allBeers
                    .filter((beer) => beer.description.toLowerCase().includes(word.toLowerCase()))
                    .map(({ id, description, image_url }) => ({ id, description, image_url, word }));
            });

            setFilteredData(resultArrays);
        }
    }, [allBeers, isLoading, error, likedFlavour]);

    return { filteredData, targetWords: likedFlavour };
};
