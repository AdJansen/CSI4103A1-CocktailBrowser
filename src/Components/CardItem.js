import React from "react";
import { Paper } from "@mui/material";
/*
    This component is used to display the cards in the BrowsePane component.
    It takes in a jsonItem object and an imgClick function as props.
    The jsonItem is a single item, derived from JsonArray in BrowsePane. Its information is used to fill out the card.
    The imgClick function is used to pass a recipe JSON object to the RecipePane component.

*/
const CardItem = ({ jsonItem, imgClick }) => {

    return (
        <Paper elevation={3}>
            {<figure className="cards_item_pick-wrap" onClick={(e) => {

                (fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${jsonItem.idDrink}`)
                    .then(response => response.json())
                    .then(response => {
                        console.log(response);
                        imgClick(response.drinks[0]);
                    })
                ).catch((e) => {
                    console.error(`An error occurred: ${e}`)
                });

            }}>
                <img src={jsonItem.strDrinkThumb} alt={jsonItem.strDrink} width="90%" />
                <figcaption>{jsonItem.strDrink}</figcaption>
            </figure>}
            

        </Paper>
    );
}

export default CardItem;

