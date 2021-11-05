// import Dispatch from './Components/Dispatch';
// import General from './Components/General';
// import Kitchen from './Components/Kitchen';
// import Reception from './Components/Reception';
import Ingredient from './Components/Ingredient';
import Storage from './Components/Storage';

// Material UI
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const Item = styled(Paper)({
  height: '70vh',
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item elevation={3}>
              <Storage/>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item elevation={3}><Ingredient/></Item>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{height: '20vh'}} elevation={3}>Pizzas en Bodega</Paper>
          </Grid>
        </Grid>
        </Box>
      </body>
    </div>
  );
}

export default App;

