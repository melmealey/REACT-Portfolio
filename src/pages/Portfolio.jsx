import { SimpleGrid } from '@chakra-ui/react'
import Project from '../components/Project';
import { IconButton } from '@chakra-ui/react'
// import ImageeCommerce from "../../public/images/ecommerce"

export default function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>
       <h3>A taste of some of my favorite projects. Click either the image or title of the project to see it in action. </h3>
      

      <SimpleGrid minChildWidth='120px' spacing='40px'>
      <Project
          projectTitle={'Medi Minder'}
          projectImage={"/images/MediMinder.png"}
          projectText={'MediMinder-App is a medication tracking app which allows users to input which medications they are using, how often they take them, and keep track of when they miss doses.'}
          projectURL={'https://mediminder-e3e3cf63329a.herokuapp.com/login'}
          projectGitHub={'https://github.com/cspecialblackberry/MediMinder-App'}
        />
            <Project
          projectTitle={'Social Network '}
          projectImage={"/images/Social Network.png"}
          projectText={'This is an API for a social network that uses a NoSQL database so that it can handle large amounts of unstructured data and allow users to share their thoughts, react to friends’ thoughts, and create a friend list.'}
          projectURL={' https://drive.google.com/file/d/1a-FQO86XpaQEnJ3D2Ke0bOwUPgr-sDT3/view'}
          projectGitHub={'https://github.com/melmealey/Social-Network'}
        />
        <Project
          projectTitle={'What\'s the Weather? '}
          projectImage={'/images/Weather.png'}
          projectText={'This website will allow you to search and display the current temp, humidity and wind speed for any city that you search. It will also store your previous seraches so that you can easily click most searched cities. Very handy when you have family all over the map and are interested in the weather they are experiencing.'}
          projectURL={'https://melmealey.github.io/Weather-Dashboard/'}
          projectGitHub={'https://github.com/melmealey/Weather-Dashboard'}
        />
     
     
         <Project
          projectTitle={'ORM e-commerce'}
          projectImage= "/images/eCommerce.png"
          projectText={'This is a backend application for an ecommerce site that uses Sequelize to interact with a Postgres or MySQL Database. Then, using insomnia, a user can interact with the backend to view the products, categories, and tags as well as use CRUD methods to alter the database.'}
          projectURL={'https://drive.google.com/file/d/1F9PakGXIkceaa6LFa9ubQaZjBs60LG4_/view'}
          projectGitHub={'https://github.com/melmealey/ORM-e-commerce'}
        />
         <Project
          projectTitle={'Password Generator'}
          projectImage={"/images/Password.png"}
          projectText={'Easily create a randomly generated password that meets certain criteria that you decide.'}
          projectURL={'https://melmealey.github.io/Password-Generator/'}
          projectGitHub={'https://github.com/melmealey/Password-Generator'}
        />
         <Project
          projectTitle={'Note Taker'}
          projectImage={'/images/NoteTaker.png'}
          projectText={'Write and save notes, organize your thoughts, and keep track of tasks needing completion.'}
          projectURL={'https://mighty-falls-92790-06187bf5b2f7.herokuapp.com/notes'}
          projectGitHub={'https://github.com/melmealey/Notes'}
        />

      </SimpleGrid>

    </>
  )
}