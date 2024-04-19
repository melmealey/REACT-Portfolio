import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'

const Nav = () => {
  return <>
 <Breadcrumb separator='-'>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>About Me</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Portfolio</BreadcrumbLink>
  </BreadcrumbItem>


  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Resume</BreadcrumbLink>
  </BreadcrumbItem>

</Breadcrumb>


  </>
}

export default Nav


