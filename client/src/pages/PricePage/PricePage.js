import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PriceCard from '../../components/PriceList/PriceList';
import styles from './PricePage.module.sass'


const PricePage = (props) => {

    return (
    <>
      <Header />
        <>
          <div className = {styles.between}><p className = {styles.priceFor}>Pricing for Name</p></div>
            <PriceCard />
            <div className = {styles.offer}>All packages include the award</div>
            <button className = {styles.buttonStart}>Get started now</button>
            <Footer />
        </>
    </>
)}






export default PricePage;