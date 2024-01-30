import React from 'react';
const ChooseCategories = ({ categories }) => {
    if (selectedCategory === 'Technology') {
        return <p>Explore the latest in technology news.</p>;
    } else if (selectedCategory === 'Sports') {
        return <p>Stay updated on your favorite sports events.</p>;
    } else {
        return <p>Select a category to get started.</p>;
    }
};

export default ChooseCategories;