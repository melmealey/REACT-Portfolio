
import { Card, CardBody, Stack, Image, Heading, Text, Button, ButtonGroup, Link } from '@chakra-ui/react';

export default function Project (props) {
  const {projectImage, projectTitle, projectText, projectURL, projectGitHub} =props;
  return(
    <>
    
    <Card maxW='sm' m={4}>
                <CardBody>
                    <Link href={projectURL} isExternal>
                        <Image
                            src={projectImage}
                            borderRadius='lg'
                        />
                    </Link>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{projectTitle} </Heading>
                        <Text>
                            {projectText}
                        </Text>
                        <ButtonGroup>
                        <Link href={projectURL} isExternal>
                            <Button variant='solid' colorScheme='blue'>
                              {projectTitle}
                            </Button>
                        </Link>
                        <Link href={projectGitHub} isExternal>
                            <Button variant='ghost' colorScheme='blue'>
                                GitHub
                            </Button>
                        </Link>
                        </ButtonGroup>
                    </Stack>
                </CardBody>
            </Card>


    </>
  )
}