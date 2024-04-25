import { Flex, chakra } from '@chakra-ui/react';
import Nav from './Nav';
import { Link as ReactRouterLink } from 'react-router-dom';



export const HeaderFlex = chakra(Flex, {
    baseStyle: {
      backgroundColor: '#6cdae7',
      padding: '10px',
      justifyContent: 'space-around',
      flexDirection: { base: 'column', md: 'row' }, 
      alignItems: 'center',
    }
  });

export const Header = () => {
    return (
        <HeaderFlex>
          <p style={{ fontFamily: 'Acme, sans-serif', fontSize: "200%" }}>Mel Mealey</p>
          <Nav />
        </HeaderFlex>
    );
  };
  
  export default Header;