import { Flex, Heading, chakra} from '@chakra-ui/react'
import Nav from './Nav'
import { Link as ReactRouterLink } from 'react-router-dom'


export const HeaderFlex = chakra(Flex, {
    baseStyle: {
        backgroundColor: 'blue',
        padding: '30px',
        justifyContent: 'space-around'
    }
})

export const Header = () => {
    return (
        <>
            <HeaderFlex>
                <Heading size='4xl' as={ReactRouterLink} to='/'>Mel Mealey</Heading>
                <Nav></Nav>
            </HeaderFlex>
        </>
    )
}