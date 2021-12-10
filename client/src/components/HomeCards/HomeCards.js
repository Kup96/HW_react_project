import React from 'react';
import CONSTANTS from '../../constants';
import styles from '../HomeCards/HomeCard.module.sass'

const HomeCards = () => {
    return (
        <div className={styles.cards}>
            {CONSTANTS.CARDS_HOME.map((card, i) => (
            <div key={i} className = {styles.card}>
                <img src={card.img_src} alt = {card.img_alt} className = {styles.photo}></img>
                <h3 className = {styles.title}>{card.header}</h3>
                <p className = {styles.text}>{card.main}</p>
            </div>
            ))}
        </div>
            )}


export default HomeCards;