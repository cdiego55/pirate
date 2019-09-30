import React from 'react';
import {Grid} from 'semantic-ui-react';
import {Movies} from '../components/Movies';
import 'semantic-ui-css/semantic.min.css';
import MyCard from '../components/Card';

const spacing = {
    'lineHeight': '40px'
}

function Store(){
    // First checks local storage to see if cart already has some items in it.
    var i;
    for (i = 0; i < Movies.length; i++)
    {
        // If local storage has items, they are noted. If not, empty values are added to local storage.
        if(localStorage[Movies[i].id]){
            Movies[i].quantity = localStorage.getItem(Movies[i].id);
        } else {
            localStorage[Movies[i].id] = Movies[i].quantity;
        }
    }

    // Displays Store page.
    return( 
        <Grid columns={3} divided="vertically">
            {/* Displays header of the Store page which has the title and link to cart. */}
            <Grid.Row>
                <Grid.Column floated='left'>
                    <h1><font size="+4" color="red">TOTALLY LEGAL</font><font size="+4"> Star Wars</font></h1>
                </Grid.Column>
                <Grid.Column floated='right' textAlign='right'>
                    <h1>
                        <a href='./Cart'>
                        Show Cart
                        </a>
                    </h1>
                </Grid.Column>
            </Grid.Row>
            {/* Displays the advertisements which lets the user know about the current discounts. */}
            <Grid.Row style={spacing}>
                <Grid.Column>
                    <font size="+3" color="blue">15% Off On All Blu Rays If You Order At Least One Of Each!!!</font>
                </Grid.Column>
                <Grid.Column>
                    <font size="+3" color="blue">10% Off On All DVDs If You Order At Least One Of Each!!!</font>
                </Grid.Column>
                <Grid.Column>
                    <font size="+3" color="blue">5% Off On The Entire Store If You Order 100 Discs!!!</font>
                </Grid.Column>
            </Grid.Row>
            {/* Displays all the items for sale in the store. */}
            <Grid.Row>
                <Grid.Column>
                    <MyCard item = {Movies[0]}/>
                </Grid.Column>
                <Grid.Column>
                    <MyCard item = {Movies[1]}/>
                </Grid.Column>
                <Grid.Column>
                    <MyCard item = {Movies[2]}/>
                </Grid.Column>
                <Grid.Column>
                    <MyCard item = {Movies[3]}/>
                </Grid.Column>
                <Grid.Column>
                    <MyCard item = {Movies[4]}/>
                </Grid.Column>
                <Grid.Column>
                    <MyCard item = {Movies[5]}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Store;