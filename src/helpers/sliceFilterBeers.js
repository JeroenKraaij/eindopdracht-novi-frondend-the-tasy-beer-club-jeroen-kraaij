export const sliceFilterBeers = (filteredData) => {
    return filteredData.map(resultArray => resultArray.slice(0, 1));
};