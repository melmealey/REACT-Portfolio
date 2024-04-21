import { Flex, Heading, chakra} from '@chakra-ui/react'
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
            <HeaderFlex>
                <Nav></Nav>
            </HeaderFlex>
        </>
    )
}