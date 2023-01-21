import { Button, TextField, Paper } from '@mui/material';

//import logo from './Undiluted - Cocktail Finder Logo.svg';
function FunctionPane() {
  return (
    <div>
      <Paper elevation={2}>
        <h1>Undiluted</h1>
        <p>
          <TextField id='cocktailNameField' label='Search By Cockatil Name' variant='outlined' /><Button variant='contained' size='large'>Search!</Button>
        </p>
        <p>
          <TextField id='IngredientNameField' label='Search By Ingredient' variant='outlined' /><Button variant='contained' size='large'>Search!</Button>
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