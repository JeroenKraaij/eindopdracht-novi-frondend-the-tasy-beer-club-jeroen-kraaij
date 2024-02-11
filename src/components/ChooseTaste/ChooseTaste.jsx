import {useEffect, useState} from 'react';
import styles from './ChooseTaste.module.css';
import Banaan from '../../assets/images/Tasty Beer Club Smaaktest image banaan.webp';
import Caramel from '../../assets/images/Tasty Beer Club Smaaktest image caramel.webp';
import Chocola from '../../assets/svg/Chocola.svg';
import Citrus from '../../assets/images/Tasty Beer Club Smaaktest image citrus.webp';
import Cinnamon from '../../assets/images/Tasty Beer Club Smaaktest image kaneel.webp';
import Coffee from '../../assets/images/Tasty Beer Club Smaaktest image koffie.webp';
import Nuts from '../../assets/images/Tasty Beer Club Smaaktest image noten.webp';
import Prunes from '../../assets/svg/Pruimen.svg';
import Sushi from '../../assets/svg/Sushi.svg';
import { barResults } from '../../helpers/statusBarResults.js';

export default function ChooseTaste({ testResults,setCategoryCounts, categoryCounts }) {
    const [images, setImages] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [likedFlavours, setLikedFlavours] = useState([]);
    const [dislikedFlavours, setDislikedFlavours] = useState([]);

    const imageUrls = [Banaan, Caramel, Chocola, Citrus, Cinnamon, Coffee, Nuts, Prunes, Sushi];
    const categories = ['Banana', 'Caramel', 'Chocola', 'Citrus', 'Cinnamon', 'Coffee', 'Nuts', 'Prunes', 'Sushi'];

    const updateCategory = (selectedCategory) => {
        setCategoryCounts((prevCounts) => ({
            ...prevCounts,
            [selectedCategory]: (prevCounts[selectedCategory] || 0) + 1,
        }));

        if (selectedCategory === categories[5] && buttonDisabled) {
            setButtonDisabled(false);
        }
    };

    const handleButtonClick = (isUp) => {
        const currentCategory = categories[images];

        if (isUp) {
            setLikedFlavours([...likedFlavours, currentCategory]);
            updateCategory(currentCategory);
        } else {
            setDislikedFlavours([...dislikedFlavours, currentCategory]);
            updateCategory(categories[5]);
        }
        setImages(images + 1);
        testResults(likedFlavours, dislikedFlavours);
    };

    const statusBarResults = barResults(categoryCounts);

    return (
        <>
            <h1>Doe de smaaktest</h1>
            <div className={styles['taste-statusbar']}>
                Statusbar: {statusBarResults} van 12 keuzes
            </div>
            <div className={styles['taste-component']}>
                <img
                    className={styles['main-choose-image']}
                    src={imageUrls[images]}
                    alt={`Image ${images + 1}`}
                />
                <div>
                    <button className={styles['btn-taste-test']} onClick={() => handleButtonClick(true)}>👍🏼</button>
                    <button className={styles['btn-taste-test']} onClick={() => handleButtonClick(false)}>👎🏼</button>
                </div>
            </div>
        </>
    );
}
