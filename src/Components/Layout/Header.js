import React,  { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import logo from '../../../src/assets/meals.png';

import classes from './Header.module.css';

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>FAGMeals</h1>
               <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={logo} alt='A table full of delicious food!'/>
            </div>
        </Fragment>
    );
}

export default Header;