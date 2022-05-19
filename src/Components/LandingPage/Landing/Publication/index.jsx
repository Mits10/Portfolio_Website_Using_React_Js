import { Grid, Button } from "@mui/material";
import './style.css';

const Publication = () => {
  return (
    <div className="publication__container">
    <h4>04</h4>
    <h1 className='size-50'>Publication</h1>
    <Grid container>
      <Grid item md={12}>
        <Grid xs={12}>
          <h3>1) <br/>
            “Predicting the Possibility of COVID-19 Infection Using 
            Fuzzy Logic System” <br/>
            -Int. J. of Intelligent Information and Database Systems.<br/>
            · Sep 15, 2020
          </h3>
          <p>...........</p>
          <a href= "https://www.inderscienceonline.com/doi/abs/10.1504/IJIIDS.2021.116465">View Full Paper</a>
        </Grid>
      </Grid>
    </Grid>
    </div>
    );
}
export default Publication;