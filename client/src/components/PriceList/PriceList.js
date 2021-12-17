import React from 'react'
import prices from './PriceList.json'
import styles from './PriceList.module.sass'


const PriceCard = () => {
    let colorClass = 'colorClass';
    return (
        <div className = {styles.cardContainer}> 
            {prices.map((price, i) => (
                <div key = {i} className = {styles.card}>
                    <div className = {(price.title == "Gold") ? styles.topBoxGold : (price.title == "Platinum") ? styles.topBoxPlatinum : (price.title == "Managed") ? styles.topBoxManaged : styles.topBoxBronze}>
                        <h4 className = {(price.title == "Gold") ? styles.titleHeadGold : (price.title == "Platinum") ? styles.titleHeadPlatinum : (price.title == "Managed") ? styles.titleHeadManaged : styles.titleHeadBronze}>{price.title}</h4>
                        <p className = {styles.textHeadCard}>{price.body}</p>
                        <p className = {(price.title == "Gold") ? styles.priceGold : (price.title == "Platinum") ? styles.pricePlatinum : (price.title == "Managed") ? styles.priceManaged : styles.priceBronze}>US${price.price}</p>
                    </div>
                       <ul className={styles.footCard}>
                            {price.footer.map((foot, ind) => (
                                <li  key = {ind} className={styles.lish}>{foot}</li>
                            ))}
                            <li className={(price.title == "Gold") ? styles.selectBoxGold : (price.title == "Platinum") ? styles.selectBoxPlatinum : (price.title == "Managed") ? styles.selectBoxManaged : styles.selectBoxBronze}><a className = {styles.link} href="/statcontest?type=1"><i class="fa fa-check"></i><span className={styles.textLink}> Start</span></a></li>
                        </ul>
                        
                    </div>
            ))}  
        </div>
    )

}


export default PriceCard;











//Array in array for json

//["Instant Trademark Check (One Database) ", "NDA and More Privacy", "Project Promotion (Basic)", "Comprehensive Trademark Research"]