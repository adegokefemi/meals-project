import { useContext } from 'react';

import classes from './MealItem.module.css';
import MealItemForm from './MealItemform';
import CartContext from '../../../store/Cart-contex';

const MealItem = props => {
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return (
        <l1 className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div classes={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
            <MealItemForm onAddToCart={addToCartHandler} />
            </div>
        </l1>
    );
};

export default MealItem;