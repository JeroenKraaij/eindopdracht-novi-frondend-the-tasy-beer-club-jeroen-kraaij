import { useEffect, useState } from 'react';
import { useFetchBeerData } from '../api/useFetchBeerData.js';

export const useFilterBeers = (likedFlavours) => {
    const { beers: allFetchedBeers, isLoading, error } = useFetchBeerData();
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (!isLoading && !error && likedFlavours && allFetchedBeers) {
            const resultArrays = likedFlavours.map((word) => {
                return allFetchedBeers
                    .filter((beer) => beer.description.toLowerCase().includes(word.toLowerCase()))
                    .map(({ id, description, image_url }) => ({ id, description, image_url, word }));
            });

            setFilteredData(resultArrays);
        }
    }, [allFetchedBeers, likedFlavours, error]);
    return { filteredData };

};
