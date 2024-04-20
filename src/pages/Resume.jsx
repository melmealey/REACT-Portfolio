import { Grid, GridItem } from '@chakra-ui/react'

export default function Resume() {
  return (

    
    <div>
      <h1>Resume</h1>


      <Grid templateColumns='repeat(3, 1fr)' gap={1}>
        <div>
          <h3> Front End Tech </h3>
          <ul>
            <li> HTML </li>
            <li> CSS </li>
            <li> JavaScript </li>
            <li> Web APIs </li>
            <li> Third-Party APIs </li>
            <li> Server-Side APIs </li>
            <li> GIT </li>
          </ul>
        </div>

        <div>
          <h3> Back End Tech </h3>
          <ul>
            <li> Node.js </li>
            <li> Object-Oriented 
              Programming (OOP) </li>
            <li> Jest </li>
            <li> Express.js </li>
            <li> MySQL </li>
            <li> Sequelize </li>
            <li> Object-Realtional Mapping (ORM) </li>
            <li> Model-View-Controller (MVC) </li>
          </ul>
        </div>

        <div>
          <h3> Performance Tech </h3>
          <ul>
            <li> NoSQL </li>
            <li> Progressive Web Applications (PWA) </li>
            <li> MongoDB </li>
            <li> Mongoose </li>
            <li> React </li>
            <li> MERN </li>
            <li> State </li>
          </ul>

        </div>
      </Grid>
    </div>
  )
}