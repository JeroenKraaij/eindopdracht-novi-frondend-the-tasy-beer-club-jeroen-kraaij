import { useState } from 'react';

import Honey from '../assets/svg/Honey.svg'
import Caramel from '../assets/svg/Caramel.svg'
import Chocola from '../assets/svg/Chocola.svg'
import Citrus from '../assets/svg/Citrus.svg'
import Vanilla from '../assets/svg/Vanilla.svg'
import Mango from '../assets/svg/Mango.svg'
import Spice from '../assets/svg/Spicy Pepper.svg'
import Cinnamon from '../assets/svg/Honey.svg'
import Banana from '../assets/svg/Banana.svg'
import Ginger from '../assets/svg/Ginger.svg'
import Nuts from '../assets/svg/Nutes.svg'
import Coffee from '../assets/svg/Coffee.svg'

export const UseBeerTest = (testResults, setCategoryCounts, statusBarResults) => {
    const [images, setImages] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [likedFlavours, setLikedFlavours] = useState([]);
    const [dislikedFlavours, setDislikedFlavours] = useState([]);
    const imageUrls = [Honey, Caramel, Chocola, Citrus, Vanilla, Mango, Spice, Cinnamon, Banana, Ginger, Nuts,  Coffee];
    const categories = ['Honey', 'Caramel', 'Chocola', 'Citrus', 'Vanilla', 'Mango', 'Spice', 'Cinnamon', 'Banana', 'Ginger', 'Nuts', 'Coffee'];
    const  [categoriesUpOrDown, setCategoriesUpOrDown] = useState([])

    const updateCategoryTrue = (selectedCategory) => {
        setCategoryCounts((prevCounts) => ({
            ...prevCounts,
            [selectedCategory]: 1,
        }));
    };

    const updateCategoryFalse = (selectedCategory) => {
        setCategoriesUpOrDown((prevCounts) => ({
            ...prevCounts,
            [selectedCategory]: 0,
        }));
    };


    const handleButtonClick = (isUp) => {
        const currentCategory = categories[images];

        if (isUp) {
            setLikedFlavours([...likedFlavours, currentCategory]);
            updateCategoryTrue(currentCategory);
        } else {
            setDislikedFlavours([...dislikedFlavours, currentCategory]);
            updateCategoryFalse(currentCategory);
        }
        setImages(images + 1);
        testResults(likedFlavours, dislikedFlavours);
    };

    return { likedFlavours, images, buttonDisabled, imageUrls, handleButtonClick, statusBarResults };

};

