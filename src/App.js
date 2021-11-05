import Storage from './Components/Storage';
import Pizza from './Components/Pizza';

// Material UI
import Box from '@mui/material/Box';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Box sx={{ flexGrow: 1 }}>
        <Storage/>
        <Pizza/>
        </Box>
    </div>
  );
}

export default App;

