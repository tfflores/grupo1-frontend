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

