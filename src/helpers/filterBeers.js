import { useEffect, useState } from 'react';
import { useFetchBeerData } from '../api/useFetchBeerData.js';

export const useFilterBeers = (likedFlavours) => {
    const { fetchData, isLoading, error } = useFetchBeerData();
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (!isLoading && !error && likedFlavours && fetchData) {
            const resultArrays = likedFlavours.map((word) => {
                return fetchData
                    .filter((beer) => beer.description.toLowerCase().includes(word.toLowerCase()))
                    .map(({ id, name, description, image_url, abv }) => ({ id, name, description, image_url, abv, word }));
            });

            setFilteredData(resultArrays);
        }
    }, [fetchData, likedFlavours, error]);
    return { filteredData };

};
