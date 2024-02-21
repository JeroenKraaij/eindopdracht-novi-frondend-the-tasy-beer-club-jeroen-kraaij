export const BarResults = (categoryCounts) => {
    return Object.values(categoryCounts).reduce((sum, count) => sum + count, 0);
};
