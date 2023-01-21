// import logo from './Undiluted - Cocktail Finder Logo.svg';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FunctionPane from './FunctionPane';
import BrowsePane from './BrowsePane';
import RecipePane from './RecipePane';
import './App.css';

const PaperCell = (props) => {
  return (
    <Paper elevation={2}>
      {props.text}
    </Paper>
  )
}

function App() {
  return (
    <div>
      <Grid container spacing={4} justifyContent="center" className="App">
        <Grid item xs={4}>
          <FunctionPane />
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
