import React from 'react';
import {Button, Icon, Popup} from 'semantic-ui-react';

// This button is shown in the Cart page and it allows the user to remove as much of an item
// as they want from their cart. When the button is clicked, they are prompted to type in 
// how many of that item they want to remove. If confirmed, the quantity of that item is 
// decreased by their inputted amount. If the quantity of an item reaches zero, that item is removed from the
// cart. If the user inputs a number greater than the quantity in the cart, the item is removed from the cart.
function DeleteButton({id, quantity}){
    return(
        <Popup 
            content='Delete items from cart'
            trigger={
            <Button onClick={function(){
                console.log(id);
                quantity = localStorage.getItem(id);
                var num = window.prompt("How many would you like to remove?", "Type an integer here");
                while (num > 0 && quantity > 0)
                {
                    quantity--;
                    num--;
                }
                localStorage[id] = quantity.toString();                
                console.log(localStorage.getItem(id));
                window.location.reload();
            }}>
                <Icon name="minus" fitted/>
            </Button>
            }
        />
    )
}

export default DeleteButton;