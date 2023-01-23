import { Button, TextField, Paper } from '@mui/material';
import React, { useState } from "react";

//import logo from './Undiluted - Cocktail Finder Logo.svg';

const SearchField = ({ id, label, callType }) => {
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  }
  
  const handleClick = () => { //HandleClick was written with help from ChatGPT, using the prompt "How do I make an HTTP GET request with a materialUI button in react?" as well as copycat.dev/blog/react-fetch
    (fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?${callType}=${value}`)
      .then(response => response.json())
      .then(drinks => console.log(drinks))).catch((e) => {
        console.error(`An error occurred: ${e}`)
      });
  }

  return (
    <p>
      <TextField id={id} label={label} variant='outlined' value={value} onChange={handleChange} />

      <Button variant='contained' size='large' onClick={handleClick}>Search!</Button>

    </p>
  )
}


function FunctionPane() {
  // SEARCH API callTypes are 's' for search by name, 'i' for search by ingredient name, 'f' for cocktail by first letter
  // 'filter' API callTypes are 'c' for category, 'g' for glass, 'i' for ingredient, 'a' for alcoholic/Non_alcoholicnp
  return (
    <div>
      <Paper elevation={2}>
        <h1>Undiluted</h1>
        <SearchField id='cocktailNameField' label='Search By Cockatil Name' callType='s'/>


        <SearchField id='IngredientNameField' label='Search For Ingredient' callType={'i'}/>
        <p>
          <Button variant='contained' size='large'>Random Cockatil</Button>
        </p>
        <p> ~~~~~~~~ </p>
      </Paper>
    </div>



  );
}

export default FunctionPane;