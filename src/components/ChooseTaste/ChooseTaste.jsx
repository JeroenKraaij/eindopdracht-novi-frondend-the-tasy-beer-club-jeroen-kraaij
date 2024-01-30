import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './ChooseTase.module.css';
import Banaan from '../../assets/images/Tasty Beer Club Smaaktest image banaan.webp';
import Caramel from '../../assets/images/Tasty Beer Club Smaaktest image caramel.webp';
import Chocola from '../../assets/svg/Chocola.svg';
import Citrus from '../../assets/images/Tasty Beer Club Smaaktest image citrus.webp';
import Cinnamon from '../../assets/images/Tasty Beer Club Smaaktest image kaneel.webp';
import Coffee from '../../assets/images/Tasty Beer Club Smaaktest image koffie.webp';
import Nuts from '../../assets/images/Tasty Beer Club Smaaktest image noten.webp';
import Prunes from '../../assets/svg/Pruimen.svg';
import Sushi from '../../assets/svg/Sushi.svg';

export default function ChooseTaste() {
    const [currentImages, setCurrentImages] = useState(0);
    const [categoryCounts, setCategoryCounts] = useState({});
    const [currentCategory, setCurrentCategory] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const imageUrls = [Banaan, Caramel, Chocola, Citrus, Cinnamon, Coffee, Nuts, Prunes, Sushi];

    const categories = [
        'Fris en licht bier',
        'Fruit en kruidig bier',
        'Bitter en hop-gedomineerd bier',
        'Zoet en mout-gedomineerd bier',
        'Donker, zoet en zwaar bier',
        'Deze smaak vind je niet lekker',
    ];

    const updateCategory = (index) => {
        const selectedCategory = (() => {
            switch (index) {
                case Banaan:
                case Caramel:
                case Nuts:
                    return categories[0];
                case Chocola:
                case Citrus:
                case Cinnamon:
                    return categories[1];
                case Coffee:
                case Prunes:
                    return categories[3];
                case Sushi:
                    return categories[4];
                default:
                    return categories[5];
            }
        })();

        setCurrentCategory(selectedCategory); // Set the current category
        setCategoryCounts((prevCounts) => ({
            ...prevCounts,
            [selectedCategory]: (prevCounts[selectedCategory] || 0) + 1,
        }));

        if (selectedCategory === categories[5] && buttonDisabled) {
            setButtonDisabled(false);
            console.log(buttonDisabled);
        }
    };

    const handleButtonClick = (isUp) => {
        const currentImage = imageUrls[currentImages];

        if (isUp) {
            updateCategory(currentImage);
        } else {
            updateCategory(categories[5]);
        }
        setCurrentImages(currentImages + 1);
    };

    useEffect(() => {
        const apiUrl = '${process.env.PUBLIC_URL}/constants/tasteResults.json';
        const results = {
            currentCategory,
            counts: categoryCounts,
            timestamp: new Date().toISOString(),
        };

        axios.post(apiUrl, results)
            .then(response => {
                console.log('Results sent successfully:', response.data);
            })
            .catch(error => {
                console.error('Error sending results:', error.message);
            });
    }, [currentCategory, categoryCounts]);

    return (
        <>
            <div className={styles['taste-statusbar']}>
                Statusbar: {Object.values(categoryCounts).reduce((sum, count) => sum + count, 0)} choices
            </div>
            <div className={styles['main-choose-taste']}>
                <img
                    className={styles['main-choose-image']}
                    src={imageUrls[currentImages]}
                    alt={`Image ${currentImages + 1}`}
                />
                <div>
                    <button onClick={() => handleButtonClick(true)}>👍🏼</button>
                    <button onClick={() => handleButtonClick(false)}>👎🏼</button>
                </div>
            </div>
        </>
    );
}