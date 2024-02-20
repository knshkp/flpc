
//components
import Header from './components/header/header';
import Home from './components/Home/Home'
import { Box } from '@mui/material';
function App() {
  return (
    <div >
    <Header/>
    <Box style={{marginTop:'100px'}}>
    <Home/>
    </Box>
    </div>
  );
}

export default App;
