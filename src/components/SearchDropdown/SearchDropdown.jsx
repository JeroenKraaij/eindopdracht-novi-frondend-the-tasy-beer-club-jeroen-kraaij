import { useState } from 'react';
import styles from './SearchDropdown.module.css';

export default function SearchDropdown() {
    const [selectedOption, setSelectedOption] = useState('option1');
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <select className={styles.searchDropdown} id="searchDropDown" name="myDropdown" value={selectedOption} onChange={handleChange}>
            <option className={styles.option} value="option1">Pilsener</option>
            <option className={styles.option} value="option2">Weisse</option>
            <option className={styles.option} value="option3">Maibock</option>
            <option className={styles.option} value="option4">India Pale Ale</option>
            <option className={styles.option} value="option5">Saison</option>
            <option className={styles.option} value="option6">English Bitter</option>
            <option className={styles.option} value="option7">Double IPA</option>
            <option className={styles.option} value="option8">Amber Ale</option>
            <option className={styles.option} value="option9">Bock</option>
            <option className={styles.option} value="option10">Robust Porter</option>
            <option className={styles.option} value="option11">American Stout</option>
            <option className={styles.option} value="option12">Imperial Stout</option>
        </select>
    );
}
