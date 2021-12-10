import React from 'react';
import CONSTANTS from '../../constants'
import styles from '../../components/PayInfo/PayInfo.module.sass'

const PayInfo = () => {
    return (
        <div className = {styles.payContainer}>
            <div className={styles.leftSide}>
                {CONSTANTS.PAY_INFO.map((pay, i) => (
                    <div key={i} className={styles.column}>
                        <h2 className = {styles.leftTitle}>{pay.title}</h2>
                        <p className = {styles.leftP}>{pay.text}</p>
                    </div>
            ))}
            </div>   
            <div className = {styles.rightSide}>
                <h2 className = {styles.rightTitle}>Questions?</h2>
                <p className = {styles.rightP}>Speak with a Squadhelp platform expert to learn more and get your questions answered.</p>
                <button>Schedule Consultation</button>
                <a href={`tel:${CONSTANTS.CONTACTS.TEL}`}>{CONSTANTS.CONTACTS.TEL}</a>
                <p className = {styles.rightP}>Call us for assistance</p>
            </div>  
        </div>

    )
}


export default PayInfo;