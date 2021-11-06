<<<<<<< HEAD
import Storage from './Components/Storage';

// Material UI
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
      <Box sx={{ flexGrow: 1 }}>
        <Storage/>
        <Grid container spacing={2}>
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

=======
import Storage from './Components/Storage';
import Pizza from './Components/Pizza';

// Material UI
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
      pizza: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});


function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Box sx={{ flexGrow: 1 }}>
        <Storage/>
        <div className={classes.pizza}>
          <Pizza/>
          </div>
        </Box>
    </div>
  );
}

export default App;

>>>>>>> 134479cca715a6821e556ba4a78fca0e7fcdfbd0
