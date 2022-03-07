import {useReducer} from 'react';

import Cartcontext from './Cart-contex';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = 
        // React give initialState(state.totalAmount),which is updated on as shown below
        state.totalAmount + action.item.price * action.item.amount;
        
        // This check if item already exist in the cart and then get the index of the item(s) if it exit.
        // The findIndex then return the index of the item if it exist.
        const existingCartItemIndex = state.items.findIndex(
        // This check if the item of the id in the array has the same item id added in the action dispatch,
        // and return the index of the item if it exist.
            (item) => item.id === action.item.id
        );

        // This will work if the item already exit otherwise it output null.
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
        
        //if items(say sushi)already exist in the cart,this update the item and the amount instead of list same items.
        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem, amount:existingCartItem.amount + action.item.amount
            };
        // updatedItems is the new array where the existing item is copy and updated.
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;

            // But when adding new item(say green bowl),the new item is created and updated. 
        }   else {
            // React give initialState(state.items),which is updated to get the new items using concat method.
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if(existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = {...existingItem, amount:existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount:updatedTotalAmount
        };
    }

    return defaultCartState;
};

const CartProvider = (props) => {
   const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type:'REMOVE', id: id});
    };

    const CartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return <Cartcontext.Provider value={CartContext}>
        {props.children}
    </Cartcontext.Provider>

};

export default CartProvider;