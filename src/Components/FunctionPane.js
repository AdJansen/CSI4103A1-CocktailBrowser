import { Button, TextField, Paper, createTheme, ThemeProvider } from '@mui/material';
import React, { useState } from "react";
import { ReactComponent as Logo } from './Undiluted - Cocktail Finder Logo.svg';



function FunctionPane({ setResult }) {
  // SEARCH API callTypes are 's' for search by name, 'i' for search by ingredient name, 'f' for cocktail by first letter
  // 'filter' API callTypes are 'c' for category, 'g' for glass, 'i' for ingredient, 'a' for alcoholic/Non_alcoholic
  const [value, setValue] = useState("");



  const handleChange = e => {
    setValue(e.target.value);
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#e5d798',//Brown # 7b3911, Cream # f6f6e9, Gold # e5d798

      },
      secondary: {
        main: '#f6f6e9',
      },

    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Paper elevation={2} className="FunctionPaper">
          <Logo />
          <p>
            <TextField fullWidth id="SearchText" label="What will you be having?" variant='outlined' value={value} onChange={handleChange} />
          </p>

          {/*This is the button that is used to search for COCKTAILS by NAME */}
          <p>
            <Button variant='contained' size='large' color='primary' onClick={
              () => {
                (fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
                  .then(response => response.json())
                  .then(response => {
                    console.log(response);
                    setResult(response.drinks);
                  })
                ).catch((e) => {
                  console.error(`An error occurred: ${e}`)
                });
              }
            }> Find cocktails by Name</Button>
          </p>


          <p> {/* //This is the button that is used to search for COCKTAILS by FIRST LETTER */}
            <Button variant='contained' size='large' onClick={
              () => {
                (fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${value}`)
                  .then(response => response.json())
                  .then(response => {
                    console.log(response);
                    setResult(response.drinks);
                  })
                ).catch((e) => {
                  console.error(`An error occurred: ${e}`)
                });
              }
            }> Find cocktails by First Letter</Button>
          </p>

          <p> {/* //This is the button that is used to search for COCKTAILS by INGREDIENT */}
            <Button variant='contained' size='large' onClick={
              () => {
                (fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${value}`)
                  .then(response => response.json())
                  .then(response => {
                    console.log(response);
                    setResult(response.drinks);
                  })
                ).catch((e) => {
                  console.error(`An error occurred: ${e}`)
                });
              }
            }> Find cocktails by Ingredient</Button>
          </p>

          <p> {/* //This is the button that is used to search for All Alcoholic Cocktails */}
            <Button variant='contained' size='large' onClick={
              () => {
                (fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
                  .then(response => response.json())
                  .then(response => {
                    console.log(response);
                    setResult(response.drinks);
                  })
                ).catch((e) => {
                  console.error(`An error occurred: ${e}`)
                });
              }
            }> Find A Random Cocktail</Button>
          </p>

          <p> ~~~~~~~~ </p>
        </Paper>
      </div>
    </ThemeProvider>



  );
}

export default FunctionPane;