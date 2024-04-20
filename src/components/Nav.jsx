import { HeaderFlex } from './Header'
import { Link, chakra } from '@chakra-ui/react'
import { Link as ReactRouterLink, useLocation } from 'react-router-dom'

const StyledLink = chakra(Link, {
  baseStyle: {
    padding: '10px',
    _hover: { textDecoration: 'underline' },
    textAlign: 'center',
    alignSelf: 'center',
  }
})

const Nav = () => {
  const currentPage = useLocation().pathname
  return (
    <>
      <HeaderFlex>
        <StyledLink as={ReactRouterLink} to='/' className={currentPage === '/' ? 'currentLink' : ''}>About Me</StyledLink>
        <StyledLink as={ReactRouterLink} to='/Portfolio' className={currentPage === '/Portfolio' ? 'currentLink' : ''}>Portfolio</StyledLink>
        <StyledLink as={ReactRouterLink} to='/Resume' className={currentPage === '/Resume' ? 'currentLink' : ''}>Resume</StyledLink>
        <StyledLink as={ReactRouterLink} to='/Contact' className={currentPage === '/Contact' ? 'currentLink' : ''} >Contact</StyledLink>
      </HeaderFlex>
    </>
  )
}

export default Nav