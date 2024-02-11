export const barResults = (categoryCounts) => {
    return Object.values(categoryCounts).reduce((sum, count) => sum + count, 0);
};
