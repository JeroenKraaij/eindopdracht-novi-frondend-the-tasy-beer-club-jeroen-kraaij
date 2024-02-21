
import { useState } from 'react';

export function useSelectedBeers(initialState = []) {
    const [selectedBeers, setSelectedBeers] = useState(initialState);

    const handleCheckboxChange = (beerId, checked) => {
        if (checked) {
            setSelectedBeers(prevSelectedBeers => [...prevSelectedBeers, beerId]);
        } else {
            setSelectedBeers(prevSelectedBeers =>
                prevSelectedBeers.filter(id => id !== beerId)
            );
        }
    };

    return { selectedBeers, handleCheckboxChange };
}
