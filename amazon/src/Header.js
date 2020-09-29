import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
            
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
           

            <div className="header__search">
                <input className="header__searchInput" type="text"></input>
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__option1">Bonjour</span>
                    <span className="header__option2">Identifiez-vous</span>
                </div>
                <div className="header__option">
                    <span className="header__option1">Retours</span>
                    <span className="header__option2">et Commandes</span>
                </div>
                <div className="header__option">
                    <span className="header__option1">Tester</span>
                    <span className="header__option2">Prime</span>
                </div>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="hedaer__option2 header__basketCount">0</span>
                </div>
            </div>
            
        </div>
    )
}

export default Header;
