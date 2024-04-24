
import { Card, CardBody, Stack, Image, Text, Button, ButtonGroup, Link } from '@chakra-ui/react';

export default function Project(props) {
  const { projectImage, projectTitle, projectText, projectURL, projectGitHub } = props;
  return (
    <>

      <Card maxW='sm' m={4}>
        <CardBody>
          <Stack mt='6' spacing='3'>
            <h4 size='md'>{projectTitle} </h4>

            <Link href={projectURL} isExternal>
              <Image href={projectURL} isExternal
                src={projectImage}
                style={{ width: "175px", height: "100px" }}
              />
            </Link>
            <Text>
              {projectText}
            </Text>
            <ButtonGroup>
              <Link href={projectURL} isExternal>
                <Button>{projectTitle}</Button>
              </Link>
              <Link href={projectGitHub} isExternal>
                <Button>GitHub</Button>
              </Link>
            </ButtonGroup>
          </Stack>
        </CardBody>
      </Card>


    </>
  )
}