import { Paper, Grid } from "@mui/material";
import CardItem from './CardItem';

function BrowsePane() {
  return (
    <div>
      <Paper>
        BrowsePane
        <Grid container spacing={3} justifyContent="center" className="BrowseCards">
          
            <CardItem />
          
        </Grid>
      </Paper>
    </div>



  );
}

export default BrowsePane;