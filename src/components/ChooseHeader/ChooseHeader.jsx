import styles from './ChooseHeader.module.css';

export default function ChooseHeader( {activeStep } ) {

    return (
        <>
            <div className={styles ['choose-header']} >
                <label
                    className={activeStep === 'Smaaktest' ? styles['label-header-active'] : styles['label-header-default']}
                    >1. Smaaktest
                </label>
                <label
                    className={activeStep === 'KiesJeBox' ? styles['label-header-active'] : styles['label-header-default']}
                    >2. Stel je box samen
                </label>
            </div>
        </>
    )
}