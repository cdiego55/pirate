import React from 'react';
import {Button, Icon, Popup} from 'semantic-ui-react';

// This button is shown in the Cart page and it allows the user to add as much of an item
// as they want to their cart. When the button is clicked, they are prompted to type in 
// how many of that item they want to add. If confirmed, the quantity of that item is 
// increased by their inputted amount.
function AddButton({id, quantity}){
    return(
        <Popup 
            content='Add items to cart'
            trigger={
            <Button onClick={function(){
                var num = window.prompt("How many would you like to add?", "Type an integer here");
                while (num > 0)
                {
                    quantity++;
                    num--;
                }
                localStorage[id] = quantity.toString();
                window.location.reload();
            }}>
                <Icon name="plus" fitted/>
            </Button>
            }
        />
    )
}

export default AddButton;