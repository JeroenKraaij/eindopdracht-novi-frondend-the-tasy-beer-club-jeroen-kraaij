import React, { createContext, useState, useContext } from 'react';

export const SelectedBeerContext = createContext();

export function SelectedBeerProvider ({ children })  {
    const [selectedBeerId, setSelectedBeerId] = useState(null);
    return (
        <SelectedBeerContext.Provider value={{ selectedBeerId, setSelectedBeerId }}>
            {children}
        </SelectedBeerContext.Provider>
    );
};

export const useSelectedBeer = () => useContext(SelectedBeerContext);
