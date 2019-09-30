import React from 'react';
import {Button, Icon, Popup} from 'semantic-ui-react';

// This is the button displayed on the cards in the Store which the user
// clicks to add an item to cart. It also indicates whether or not an item is
// in the cart already by its color.
function CartButton({id, quantity}){
    return(
        <>
        {localStorage[id] < 1 ?
        // If the item is not yet in the cart, the button is grey and clicking the button
        // prompts the user to confirm adding the item to their cart. If confirmed, the item
        // is added to the cart with a value of 1.
        <Popup 
            content='Add item to cart'
            trigger={
            <Button onClick={function(){
                console.log(id);
                var add = window.confirm("Add to cart?");
                if (add)
                {
                    quantity = 1;
                }
                localStorage[id] = quantity.toString();                
                console.log(localStorage.getItem(id));
                window.location.reload();
            }}>
                <Icon name="cart" fitted/>
            </Button>
            }
        /> :
        // If the item is already in the cart, the button is red and clicking the button
        // prompts the user to confirm removing the item from their cart. If confirmed, the item
        // is removed from the cart with a value of 0.
        <Popup 
            content='Remove item from cart'
            trigger={
            <Button color="red" onClick={function(){
                console.log(id);
                var remove = window.confirm("Are you sure you want to remove this item from your cart?");
                if (remove)
                {
                    quantity = 0;
                }
                localStorage[id] = quantity.toString();                
                console.log(localStorage.getItem(id));
                window.location.reload();
            }}>
                <Icon name="cart" fitted/>
            </Button>
            }
        />
        }
        </>
    )
}

export default CartButton;