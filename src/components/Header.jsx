import { Flex, Heading, chakra } from '@chakra-ui/react'
import Nav from './Nav'
import { Link as ReactRouterLink } from 'react-router-dom'


export const HeaderFlex = chakra(Flex, {
    baseStyle: {
        backgroundColor: '#6cdae7',
        padding: '10px',
        justifyContent: 'space-around'
    }
})

export const Header = () => {
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Acme&family=Satisfy&display=swap" rel="stylesheet" />

            <HeaderFlex>
                <p style={{ fontFamily: 'Acme, sans-serif' }}>Mel Mealey</p>
                <Nav />
            </HeaderFlex>
        </>
    );
};