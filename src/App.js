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

