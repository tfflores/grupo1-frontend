import Storage from './Components/Storage';

// Material UI
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
      root: {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/fond.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
});


function App() {
  const classes = useStyles();

  return (
    <div>
      <header className="App-header">
      </header>
      <Box sx={{ flexGrow: 1 }}>
        <Storage/>
        </Box>
    </div>
  );
}

export default App;

