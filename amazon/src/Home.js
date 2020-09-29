import React from 'react'
import './Home.css';
import Product from './Product';



function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/08/sm/Evergreen_Shared/RebrandAssets/Phase2/FR_GW_1500x600_Apex_Roblox_LoL_FR_1x._CB403706036_.jpg" 
                alt="image"
                ></img>

                <div className="home__row">
                <Product></Product>
                <Product></Product>

                </div>

                <div className="home__row">
                    <Product title="iPhone"
                    price={799}
                    image="https://images-eu.ssl-images-amazon.com/images/G/08/fr-certifiedrefurbished/AR_GW_SingleCard_Smartphones_379x304_Jan20._SY304_CB426393405_.jpg"
                    rating={5}></Product>
                    <Product></Product>
                    <Product></Product>
                </div>

                <div className="home__row">
                    
                </div>  
            </div>

            
            
        </div>
    )
}

export default Home;
