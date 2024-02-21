import { useEffect, useState } from 'react';
import { useFetchBeerData } from "../api/useFetchBeerData.js";
import { useSelectedBeer } from '../context/SelectedBeerContext.jsx';

export const useProductPage = (id) => {
    const { fetchData, isLoading, error } = useFetchBeerData();
    const [beerProduct, setBeerProduct] = useState(null);
    const { setSelectedBeerProduct } = useSelectedBeer();

    useEffect(() => {
        if (!isLoading) {
            const selectedBeer = fetchData.find(beer => beer.id === parseInt(id));
            setBeerProduct(selectedBeer);
        }
    }, [fetchData, isLoading, id]);

    return { beerProduct, isLoading, error, setSelectedBeerProduct };
};
