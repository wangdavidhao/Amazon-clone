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
                <Product id="1"
                    title="iPhone"
                    price={799}
                    image="https://m.media-amazon.com/images/I/51KgV-OXoVL.__AC_SY200_.jpg"
                    rating={5}></Product>
                <Product id="1"
                    title="iPhone"
                    price={799}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/acs/amazon-designer/2020/09/14/DURM-1A174CB7F55A51E8.__AC_SY200_.jpeg"
                    rating={5}></Product>

                </div>

                <div className="home__row">
                    <Product id="1"
                    title="iPhone"
                    price={799}
                    image="https://images-eu.ssl-images-amazon.com/images/G/08/fr-certifiedrefurbished/AR_GW_SingleCard_Smartphones_379x304_Jan20._SY304_CB426393405_.jpg"
                    rating={5}></Product>
                    <Product id="2"
                    title="iPhone"
                    price={799}
                    image="https://images-na.ssl-images-amazon.com/images/G/08/acs/amazon-designer/2020/07/27/DURM-A8646D41D02EC1UH.__AC_SY200_.jpeg"
                    rating={3}></Product>
                    <Product id="2"
                    title="iPhone"
                    price={799}
                    image="https://images-na.ssl-images-amazon.com/images/I/41ZRPY9k9mL._SCLZZZZZZZ___AC_SY200_.jpg"
                    rating={3}></Product>
                </div>

                <div className="home__row">
                    
                </div>  
            </div>

            
            
        </div>
    )
}

export default Home;
