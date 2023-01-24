// import logo from './Undiluted - Cocktail Finder Logo.svg';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FunctionPane from './Components/FunctionPane';
import BrowsePane from './Components/BrowsePane';
import RecipePane from './Components/RecipePane';
import React, { useState } from "react";
import './App.css';

const PaperCell = (props) => {
  return (
    <Paper elevation={2}>
      {props.text}
    </Paper>
  )
}



function App() {
  const [result, setResult] = useState([])

  const SetJsonResult = (result) => { 
    setResult(result)
    console.log("setResult: ", result)
   }
  return (
    <div>
      <Grid container spacing={4} justifyContent="center" className="App">
        <Grid item xs={4}>
          <FunctionPane result={result} setResult={SetJsonResult}/>
        </Grid>
        <Grid item xs={4}>
          <BrowsePane />
        </Grid>
        <Grid item xs={4}>
          <RecipePane />
        </Grid>
      </Grid>
    </div>



  );
}

export default App;
