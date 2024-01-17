import { useState } from 'react';
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
import ThumpDown from '../../assets/svg/Icone_thump_down.svg';
import ThumpUp from '../../assets/svg/Icone_thump_up.svg';

export default function ChooseTaste() {
    const [currentImages, setCurrentImages] = useState(0);
    const [selectedImages, setSelectedImages ] = useState([]);
    const [notSelectedImages, setNotSelectedImages] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');
    const [categoryArray, setCategoryArray] = useState([]);
    const [categoryCounts, setCategoryCounts] = useState({});
    const [buttonDisabled, setButtonDisabled] = useState(true);


    const imageUrls = [Banaan, Caramel, Chocola, Citrus, Cinnamon, Coffee, Nuts, Prunes, Sushi];

    const categories = [
        'Fris en licht bier',
        'Fruit en kruidig bier',
        'Bitter en hop-gedomineerd bier',
        'Zoet en mout-gedomineerd bier',
        'Donker, zoet en zwaar bier',
        'De smaaktest is ingevuld',
    ];

    const updateCategory = (index) => {
        let category = '';
        switch (index) {
            case Banaan:
            case Caramel:
            case Nuts:
                category = categories[0];
                break;
            case Chocola:
            case Citrus:
            case Cinnamon:
                category = categories[1];
                break;
            case Coffee:
            case Prunes:
                category = categories[3];
                break;
            case Sushi:
                category = categories[4];
                break;
            default:
                category = categories[5];
        }
        setCurrentCategory(category);
        setCategoryArray([...categoryArray, category]);

        setCategoryCounts((prevCounts) => ({
            ...prevCounts,
            [category]: (prevCounts[category] || 0) + 1,
        }));

        if (category === categories[5] && buttonDisabled) {
            setButtonDisabled(false);
            console.log(buttonDisabled);
        }
    };

    const buttonUp = () => {
        setSelectedImages([...selectedImages, imageUrls[currentImages]]);
        updateCategory(imageUrls[currentImages]);
        setCurrentImages(currentImages + 1);
    };
    const buttonDown = () => {
        setNotSelectedImages([...notSelectedImages, imageUrls[currentImages]]);
        setCurrentImages(currentImages + 1);
    };

    return (
        <div className={styles['main-choose-taste']}>
            <img
                className={styles['main-choose-image']}
                src={imageUrls[currentImages]}
                alt={`Image ${currentImages + 1}`}
            />
            <div>
                <button onClick={buttonUp} >👍🏼
                </button>
                <button onClick={buttonDown} >👎🏼
                </button>
            </div>
            <p>{currentCategory}</p>
            <div>
                <h3>Uitkomst Smaaktest</h3>
                <ul>
                    <li>
                        {Object.entries(categoryCounts).map(([category, count]) => (
                            <div key={category}>
                                {`${category}: ${count}`}
                            </div>
                        ))}
                    </li>
                </ul>
            </div>
        </div>
    );
}