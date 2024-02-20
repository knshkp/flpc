import {Box,Typography,styled} from '@mui/material';
import { navData } from '../constants/data';
const Component=styled(Box)`
display:flex;
justify-content:space-between;
text-align:center;`
const Text=styled(Typography)`
font-size:14px;
font-family:inherit;`
const NavBar=()=>{
    return(
        <Component>
            {
                navData.map(data=>(
                    <Box>
                        <img src={data.url} alt="nav"style={{width:'50px'}}/>
                        <Text>{data.text}</Text>
                    </Box>
                ))
            }
        </Component>
    )
}
export default NavBar;