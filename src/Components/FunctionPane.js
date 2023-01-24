import { Button, TextField, Paper } from '@mui/material';
import React, { useState } from "react";
import SearchField from './SearchField';
//import logo from './Undiluted - Cocktail Finder Logo.svg';



function FunctionPane({ result, setResult }) {
  // SEARCH API callTypes are 's' for search by name, 'i' for search by ingredient name, 'f' for cocktail by first letter
  // 'filter' API callTypes are 'c' for category, 'g' for glass, 'i' for ingredient, 'a' for alcoholic/Non_alcoholic
  const [value, setValue] = useState("");



  const handleChange = e => {
    setValue(e.target.value);
  }
  return (
    <div>
      <Paper elevation={2} className="FunctionPaper">
        <h1>Undiluted</h1>
        <p>
          <TextField fullWidth id="SearchText" label="What will you be having?" variant='outlined' value={value} onChange={handleChange} />
        </p>

        {/*This is the button that is used to search for COCKTAILS by NAME */}
        <p>
          <Button variant='contained' size='large' onClick={
            () => {
              (fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
                .then(response => response.json())
                .then(response => {
                  console.log(response);
                  setResult(response.drinks.map((drink) => drink.idDrink)); //The function to return a list of drink IDs was written with GitHub Copilot
                })
              ).catch((e) => {
                console.error(`An error occurred: ${e}`)
              });
            }
          }> Find cocktails by Name!</Button>
        </p>


        <p> {/* //This is the button that is used to search for INGREDIENTS by NAME */}
          <Button variant='contained' size='large' onClick={
            () => {
              (fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${value}`)
                .then(response => response.json())
                .then(response => {
                  console.log(response);
                  setResult(response.ingredients.map((ingredient) => ingredient.idIngredient)); //The function to return a list of ingredient IDs was written with GitHub Copilot
                })
              ).catch((e) => {
                console.error(`An error occurred: ${e}`)
              });
            }
          }> Find ingredients by Name!</Button>
        </p>

        <p> {/* //This is the button that is used to search for COCKTAILS by INGREDIENT */}
          <Button variant='contained' size='large' onClick={
            () => {
              (fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${value}`)
                .then(response => response.json())
                .then(response => {
                  console.log(response);
                  setResult(response.drinks.map((drink) => drink.idDrink)); //The function to return a list of drink IDs was written with GitHub Copilot
                })
              ).catch((e) => {
                console.error(`An error occurred: ${e}`)
              });
            }
          }> Find cocktails by Ingredient!</Button>
        </p>
        <p>
          <Button variant='contained' size='large'>Random Cockatil</Button>
        </p>
        <p> ~~~~~~~~ </p>
      </Paper>
    </div>



  );
}

export default FunctionPane;