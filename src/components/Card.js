import React from 'react';
import {Card, Image} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import CartButton from '../buttons/CartButton';

// This function defines the item cards displayed on the Store page.
// The cards contain an image of the item, the movie's name, its price, and whether or not it is alrady in the cart.
function MyCard({item: {id, name, price, format, img, quantity}}){
    return(
        <Card fluid>
            <Image src={img} size='large'/>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Description>
                    <CartButton id={id} quantity={quantity}/>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                ${price}
            </Card.Content>
        </Card>
    )
}

export default MyCard;