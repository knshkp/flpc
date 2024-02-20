import { AppBar, Toolbar, styled, Box, Typography } from '@mui/material';
import Search from './Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

const StyleHeader = styled(AppBar)`
  background: #2874f0;
  height: 100px;
`;

const Component = styled(Box)`
  margin-left: 10px;
  line-height: 0;
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const CtSearch = styled(Search)`
  min-width: 500px;
`;

const PlusImg = styled('img')({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const SearchIc = styled(ShoppingCartIcon)`
  margin-left: 190px;
`;

const Header = () => {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <StyleHeader>
      <Toolbar>
        <MenuIcon />
        <Component>
          <img src={logoURL} alt="logo" style={{ width: '75px' }} />
          <Box style={{ display: 'flex' }}>
            <SubHeading>
              Explore <Box component="span" style={{ color: '#FFE500' }}>Plus</Box>
            </SubHeading>
            <PlusImg src={subURL} alt="sub-logo" />
          </Box>
        </Component>
        <SearchIc />
      </Toolbar>
      <CtSearch />
    </StyleHeader>
  );
};

export default Header;
