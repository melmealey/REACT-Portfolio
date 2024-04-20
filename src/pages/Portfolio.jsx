import { SimpleGrid } from '@chakra-ui/react'
import Project from '../components/Project';


export default function Portfolio() {
  return (
    <>
      <h3>Here's a taste of some of my best work</h3>

      <SimpleGrid minChildWidth='120px' spacing='40px'>
        <Project
          projectImage={'../assets/images/Weather'}
          projectTitle={'What is the Weather? '}
          projectText={'This website will display the current temp in °F, humidity and wind speed (in MPH) for any city that you search. It will also store your previous seraches so that you can easily click most searched cities. Very handy when you have family all over the map and are interested in the weather they are experiencing.'}
          projectURL={'melmealey.github.io/weather-dashboard/'}
          projectGitHub={'https://github.com/melmealey/Weather-Dashboard'}
        />

      </SimpleGrid>

    </>
  )
}