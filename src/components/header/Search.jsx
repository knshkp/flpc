import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
const SearchContainer = styled(Box)`
  background: #fff;
  width: 90%;
  border-radius: 2px;
  margin-left: 10px;
`;
const InputSearch = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
`;

const Search = () => {
  return (
    <SearchContainer>
      <InputSearch placeholder="Search for products, brands, and more" />
    </SearchContainer>
    
  );
};

export default Search;
