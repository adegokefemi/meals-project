import {useContext} from 'react';

import CartIcon from '../Cart/CartIcon';
import Cartcontext from '../../store/Cart-contex';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const cartCtx = useContext(Cartcontext);

    const numberOfCart = cartCtx.items.reduce((curNumber, item)=> {
        return curNumber + item.amount;
    },0);

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
                <span>Your Cart</span>
                <span className={classes.badge}>
                {numberOfCart}
            </span>
        </button>
     
    );

};

export default HeaderCartButton;