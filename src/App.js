// import logo from './Undiluted - Cocktail Finder Logo.svg';
import Grid from '@mui/material/Grid';
import FunctionPane from './Components/FunctionPane';
import BrowsePane from './Components/BrowsePane';
import RecipePane from './Components/RecipePane';
import React, { useState } from "react";
import './App.css';

//App.js is the main component that holds all the other components together
//It is the parent component of all the other components
//It consists of 3 main sub-components: FunctionPane, BrowsePane, and RecipePane
//It also holds some master-state variables that are passed down to the sub-components

/*
Software Sources/Guides: 
  MaterialUI - MIT License - mui.com, 
  @Brian Design on Youtube - React React Website Tutorial - Beginner React JS Project Fully Responsive - For Inspiration and some guidance on functionality
  https://www.copycat.dev/blog/react-fetch/ - For Examples of React Fetch
  https://codingbeautydev.com/blog/react-link-image  - From this blog I learned how to link images to a page
  Github Copilot - Paid Service, provided free with university Email - Various autocomplete suggestions 
  */
//API Source: TheCocktailDB - Informal Unlimited Usage Potentail Paid Option for high bandwidth - thecocktaildb.com




function App() {
  const [result, setResult] = useState([])
  const [recipe, imgClick] = useState([])


  const setJsonResult = (result) => { //This function is used to set the result state variable to the result of the API call (The function is passed down to the FunctionPane)
    if (result === null) { //Catches the possibility of a null result from the API to prevent errors
      setResult([{strDrink: "No results found", strDrinkThumb: "https://www.thecocktaildb.com/images/ingredients/No%20results%20found.png"}])
    } else {setResult(result)}
    
    console.log("setResult: ", result)
  }

  const setImgClick = (id) => { //This function is used to set the recipe state variable to the recipe of the clicked image (The function is passed down to the BrowsePane, then CardItem)
    imgClick(id)
    console.log("setImgClick: ", id)
  }

  return (
    <div>
      <Grid container spacing={4} justifyContent="center" className="App">
        <Grid item xs={3}> {/*First Column*/}
          <FunctionPane setResult={setJsonResult} />
        </Grid>
        <Grid item xs={5}> {/*Second Column*/}
          <BrowsePane jsonArray={result} imgClick={setImgClick} />
        </Grid>
        <Grid item xs={4}> {/*Third Column*/}
          <RecipePane recipe={recipe} />
        </Grid>
      </Grid>
    </div>



  );
}

export default App;
