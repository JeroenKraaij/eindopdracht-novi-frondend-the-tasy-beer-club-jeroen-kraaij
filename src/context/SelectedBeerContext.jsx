import {createContext, useState, useContext, useEffect} from 'react';

export const SelectedBeerContext = createContext({});

export default function  SelectedBeerProvider ({ children }) {
    const [selectedBeerProduct, setSelectedBeerProduct] = useState(0);

    useEffect(() => {
    }, [selectedBeerProduct]);

    return (
        <SelectedBeerContext.Provider value={{ selectedBeerProduct, setSelectedBeerProduct }}>
            {children}
        </SelectedBeerContext.Provider>
    );
}

export const useSelectedBeer = () => useContext(SelectedBeerContext);
