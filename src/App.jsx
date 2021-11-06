import React from 'react';
import Storage from './Components/Storage';
import Pizza from './Components/Pizza';

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

const App = () => {
  return (
    <div>
      <Box>
        <Storage />
      </Box> 
      <Box>
        <Pizza />
      </Box>  
    </div>
  );
};

export default App;

