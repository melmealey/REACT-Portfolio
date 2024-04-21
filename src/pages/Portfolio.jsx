import { SimpleGrid } from '@chakra-ui/react'
import Project from '../components/Project';
import { IconButton } from '@chakra-ui/react'

export default function Portfolio() {
  return (
    <>
      <h3>Here's a taste of some of my best work</h3>

      <SimpleGrid minChildWidth='120px' spacing='40px'>
      <Project
          projectTitle={'Medi Minder'}
          projectImage={"https://github.com/melmealey/Medi-Minder/assets/147653410/f626bbe6-a998-4e25-8c76-92b9ba89f20a"}
          projectText={'MediMinder-App is a medication tracking app which allows users to input which medications they are using, how often they take them, and keep track of when they miss doses.'}
          projectURL={'https://mediminder-e3e3cf63329a.herokuapp.com/login'}
          projectGitHub={'https://github.com/cspecialblackberry/MediMinder-App'}
        />
            <Project
          projectTitle={'Social Network '}
          projectImage={"https://github.com/melmealey/Social-Network/assets/147653410/5ffd9547-6b86-43eb-a6f0-aee257fee70b"}
          projectText={'This is an API for a social network that uses a NoSQL database so that it can handle large amounts of unstructured data and allow users to share their thoughts, react to friends’ thoughts, and create a friend list.'}
          projectURL={' https://drive.google.com/file/d/1a-FQO86XpaQEnJ3D2Ke0bOwUPgr-sDT3/view'}
          projectGitHub={'https://github.com/melmealey/Social-Network'}
        />
        <Project
          projectTitle={'What\'s the Weather? '}
          projectImage={'https://github.com/melmealey/Weather-Dashboard/assets/147653410/b688e2bd-84c8-4db0-8f57-4225ce9d2c05'}
          projectText={'This website will allow you to search and display the current temp in °F, humidity and wind speed (in MPH) for any city that you search. It will also store your previous seraches so that you can easily click most searched cities. Very handy when you have family all over the map and are interested in the weather they are experiencing.'}
          projectURL={'melmealey.github.io/weather-dashboard/'}
          projectGitHub={'https://github.com/melmealey/Weather-Dashboard'}
        />
     
         <Project
          projectTitle={'ORM e-commerce'}
          projectImage={"https://github.com/melmealey/ORM-e-commerce/assets/147653410/94146cbd-6539-443f-8b9a-282d11a1a9a5"}
          projectText={'This is a backend application for an ecommerce site that uses Sequelize to interact with a Postgres or MySQL Database. Then, using insomnia, a user can interact with the backend to view the products, categories, and tags as well as use CRUD methods to alter the database.'}
          projectURL={'melmealey.github.io/weather-dashboard/'}
          projectGitHub={'https://github.com/melmealey/ORM-e-commerce'}
        />
         <Project
          projectTitle={'Password Generator'}
          projectImage={"https://github.com/melmealey/Password-Generator/assets/147653410/6c6b7e37-5c78-48f3-aa36-e5690489075a"}
          projectText={'Easily create a randomly generated password that meets certain criteria that you decide.'}
          projectURL={'https://melmealey.github.io/Password-Generator/'}
          projectGitHub={'https://github.com/melmealey/Password-Generator'}
        />
         <Project
          projectTitle={'Note Taker'}
          projectImage={'https://github.com/melmealey/Packing-list/assets/147653410/3d5f495b-a289-4fe4-b64a-caf4f9d1a44b'}
          projectText={'Write and save notes, organize your thoughts, and keep track of tasks needing completion.'}
          projectURL={'https://mighty-falls-92790-06187bf5b2f7.herokuapp.com/notes'}
          projectGitHub={'https://github.com/melmealey/Notes'}
        />

      </SimpleGrid>

    </>
  )
}