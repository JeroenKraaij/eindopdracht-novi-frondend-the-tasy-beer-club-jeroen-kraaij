

import { createContext, useState, useContext } from 'react';

// Create a context for the selected beer ID
const SelectedBeerContext = createContext();

// Create a provider component to wrap your application
export const SelectedBeerProvider = ({ children }) => {
    const [selectedBeerId, setSelectedBeerId] = useState(null);

    return (
        <SelectedBeerContext.Provider value={{ selectedBeerId, setSelectedBeerId }}>
            {children}
        </SelectedBeerContext.Provider>
    );
};
export const useSelectedBeer = () => useContext(SelectedBeerContext);