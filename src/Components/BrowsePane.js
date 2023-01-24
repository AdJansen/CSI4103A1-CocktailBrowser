import { Paper } from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2';
import CardItem from './CardItem';
import './BrowsePane.css';


/*
    This component is used to display the cards in the BrowsePane component.
    It takes in a jsonArray object and an imgClick function as props.
    The jsonArray object is a collection of JSON objects used to display the cards.
    The imgClick function is used to pass a recipe JSON object to the RecipePane component from the CardItem Component.

*/

function BrowsePane({jsonArray, imgClick}) {
  // console.log("AAAAAAAA",jsonArray)
  return (
    <div>
      <Paper elevation={2}>

        <Grid2 container spacing={2} className="BrowseCards" >
          {
            (jsonArray.map((item) => (
              <Grid2 xs={4}><CardItem jsonItem={item} imgClick={imgClick} /></Grid2>
            )))
          }

        </Grid2>
      </Paper> 
    </div>



  );
}

export default BrowsePane;