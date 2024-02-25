import styles from "../Selecter/Selecter.module.css";

export default function Selecter ({ onChangeHandle, value}) {

    return(
        <select className={styles.select} onChange={ onChangeHandle } value={value}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={80}>80</option>
        </select>
    )
}