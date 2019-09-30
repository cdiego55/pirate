import React from 'react';
import {Card, Grid, Image} from 'semantic-ui-react';
import {Movies} from '../components/Movies';
import AddButton from '../buttons/AddButton';
import DeleteButton from '../buttons/DeleteButton';

// This page displays the items in the cart. Each Card displays a picture of the
// item, its name, quantity, and total price. The bottom of the page displays
// any discounts and then the final price.
function Cart(){
    var totalCost = 0,
        dvdCost = 0,
        bluCost = 0,
        initialCost = 0,
        totalDiscs = 0,
        totalSavings = 0,
        dvdSavings = 0,
        bluSavings = 0,
        dvd = 0,
        blu = 0,
        i;
    var totalDiscount = false, dvdDiscount = false, bluDiscount = false;

    // First checks local storage to see if cart already has some items in it.
    for (i = 0; i < Movies.length; i++)
    {
        // If local storage has items, they are noted. If not, empty values are added to local storage.
        if(localStorage[Movies[i].id]){
            Movies[i].quantity = localStorage.getItem(Movies[i].id);
        } else {
            localStorage[Movies[i].id] = Movies[i].quantity;
        }
    }

    // This where the page is displayed.
    return(
        <Grid>
            {/* Header displays link back to store. */}
            <Grid.Row>
                <Grid.Column floated='right' textAlign='right'>
                    <h1>
                        <a href='./'>
                        Back to Store
                        </a>
                    </h1>
                </Grid.Column>
            </Grid.Row>
            {/* This row displays all the items and calculates prices. */}
            <Grid.Row columns={3}>
            {Movies.map(function(movie) {
                var post = false;

                // Only posts an item if it has actually been added to the cart.
                if (parseInt(localStorage.getItem(movie.id)) > 0)
                {
                    post = true;
                }

                // Checks to see if all DVDs are in cart.
                if (movie.format === "DVD" && movie.quantity > 0)
                {
                    dvd++;
                    dvdCost += localStorage.getItem(movie.id) * movie.price;
                }

                // Checks to see if all Blu Rays are in cart.
                if (movie.format === "Blu" && movie.quantity > 0)
                {
                    blu++;
                    bluCost += localStorage.getItem(movie.id) * movie.price;
                }
                
                // Calculates the total cost of one item.
                var itemCost = localStorage.getItem(movie.id) * movie.price;

                // Calculates the total discs in the cart.
                totalDiscs += localStorage.getItem(movie.id) * 1;

                // Calculates total cost before discounts.
                totalCost = dvdCost + bluCost;
                initialCost = totalCost;

                // Applies discount if all DVDs are in cart.
                if (dvd >= 3)
                {
                    dvdDiscount = true;
                    dvdSavings = dvdCost;
                    var temp = dvdCost * 0.90;
                    dvdSavings -= temp;
                }

                // Applies discount if all Blu Rays are in cart.
                if (blu >= 3)
                {
                    bluDiscount = true;
                    bluSavings = bluCost;
                    var temp2 = bluCost * 0.85;
                    bluSavings -= temp2;
                }

                // Subracts discounts from total cost.
                totalCost -= dvdSavings;
                totalCost -= bluSavings;

                // Checks if 100 discs in cart and then applies discount to cost
                // after previous discounts have already been applied.
                if (totalDiscs >= 100)
                {
                    totalDiscount = true;
                    var temp3 = totalCost;
                    totalCost *= 0.95;
                    totalSavings = temp3 - totalCost;
                }

                
                // Posts items if they are in the cart.
                return(   
                    <>
                    {post && (  
                    <Grid.Column>
                        <Card>
                            <Card.Content>     
                                <Image src={movie.img} size="small"/>     
                                <p></p>                  
                                <Card.Header>{movie.name}</Card.Header>
                                <Card.Description>
                                    <AddButton id={movie.id} quantity={movie.quantity}/>
                                    <DeleteButton id={movie.id} quantity={movie.quantity}/>
                                    {localStorage.getItem(movie.id)}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                ${itemCost}
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    )}
                    </>
                )
            })}

            {/* Price and discounts displayed here. */}
            </Grid.Row>
            {totalDiscount || dvdDiscount || bluDiscount ?
            // If any discounts were applied this will display them.
            <Grid>
                {/* Displays price before discounts. */}
                <Grid.Row>Your initial total was: ${initialCost}!</Grid.Row>
                {dvdDiscount &&
                // If DVD discount is applied.
                <Grid.Row><font color="red">You saved ${dvdSavings.toFixed(2)} by ordering at least one of all the DVDs!</font></Grid.Row>
                }
                {bluDiscount &&
                // If Blu Ray discount is applied.
                <Grid.Row><font color="red">You saved ${bluSavings.toFixed(2)} by ordering at least one of all the Blu Rays!</font></Grid.Row>
                }
                {totalDiscount &&
                // If 100 disc discount is applied.
                <Grid.Row><font color="red">You saved ${totalSavings.toFixed(2)} by ordering more than 100 discs!</font></Grid.Row>
                }
                {/* Displays price after discounts. */}
                <Grid.Row><font size="+2">Your discounted total is: ${totalCost.toFixed(2)}!</font></Grid.Row>
            </Grid>
            :
            // If no discounts were applied, displays price.
            <Grid>
                <Grid.Row>
                <font size="+2">Your total is: ${totalCost.toFixed(2)}</font>
                </Grid.Row>
            </Grid>
            }
        </Grid>
    )
}

export default Cart;