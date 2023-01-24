import { Button, TextField} from '@mui/material';
import React, { useState } from "react";
/*

//DEPRECATED
//DEPRECATED
//DEPRECATED

*/
const SearchField = ({ id, label, callType, value, handleChange}) => { 
    
    
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

export default SearchField;