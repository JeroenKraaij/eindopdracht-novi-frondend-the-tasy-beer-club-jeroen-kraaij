import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelectedBeer } from '../context/SelectedBeerContext.jsx';
import { useFetchBeerData } from "../api/useFetchBeerData.js";

export const useProductPage = () => {
    const { id } = useParams();
    const { beers: allFetchedBeers, isLoading, error } = useFetchBeerData();
    const { setSelectedBeerId } = useSelectedBeer();
    const [beerProduct, setBeerProduct] = useState(null);

    useEffect(() => {
        if (!isLoading) {
            const selectedBeer = allFetchedBeers.find(beer => beer.id === parseInt(id));
            setBeerProduct(selectedBeer);
        }
    }, [allFetchedBeers, isLoading, id]);

    const handleOrderProduct = () => {
        setSelectedBeerId(beerProduct.id);
    };

    return { beerProduct, isLoading, error, handleOrderProduct };
};

