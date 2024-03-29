import {useContext} from 'react';

import classes from './Cart.module.css';
import CartItem from './CartItem';
import Modal from '../../Components/UI/Modal';

import Cartcontext from '../../store/Cart-contex';

const Cart = (props) => {
    const cartCtx = useContext(Cartcontext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemAddHandler = (item) => {
        cartCtx.addItem(item);
    };

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const CartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item)=> (
               <CartItem 
               key={item.id} 
               name={item.name} 
               amount={item.amount} 
               price={item.price}
            //.bind allow to pass the id of the item to remove and,  item to be added.
               onAdd={cartItemAddHandler.bind(null, item.id)}
               onRemove={cartItemRemoveHandler.bind(null, item)}
               />
            ))}
        </ul>
    )

    return (
        <Modal onClose={props.onClose}>
            {CartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>    
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>


    )
}

export default Cart;