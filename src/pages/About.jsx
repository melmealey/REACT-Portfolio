import { Image, Heading } from '@chakra-ui/react'


export default function About() {
  return (
    <div>
      
      <Heading 
      as="h1" className="satisfy-regular" size="xl">Meet Mel Mealey
      </Heading>
      <div>
        <Image
          borderRadius='full'
          boxSize='150px'
          src='https://www.cu.edu.ph/wp-content/uploads/2020/10/girl-avatar.png'
          alt='Mel Mealey'
        />
        <p>
          After completing my Bachelor’s degree in Recreation Management and Youth Leadership, I chose to raise a family. While absent from the workforce, I used my knowledge, skills and experiences in a number of volunteer capacities; such as teaching children and youth, leading a cub scout den and coordinating compassionate service opportunities with members of my congregation to ensure struggling families had needs met.
        </p>
        <p>
          Over an 8 year period, I grew and managed a personal business as an independent sales consultant for Norwex. Through these opportunities, I learned how to interact and work well with a diverse group of people with varying needs. In addition, I cultivated my ability for organization and refined collaboration strategies to help others achieve short and long-term financial goals. This included working hard toward a professional goal and earning an all-inclusive trip to Cancun in October 2021.
        </p>
        <p>
          I am an avid learner and can adapt to new challenges quickly. Recently, I have worked as an office manager for a pediatric dental practice while finishing my certification in Web Development.

        </p>
      </div>
    </div>
  );
}