import { Card, CardBody, Stack, Image, Text, Link, Flex } from '@chakra-ui/react';

export default function Project(props) {
  const { projectImage, projectTitle, projectText, projectURL, projectGitHub } = props;

  return (
    <>
      <Card maxW='sm' m={4}>
        <CardBody>
          <Stack mt='6' spacing='3'>
            <h4>{projectTitle}</h4>
            <Flex flexDirection="row" alignItems="center" >
              <a href={projectURL}>
                <Image src={projectImage} width={"200px"} height={"auto"} maxW={"100%"} />
              </a>
            </Flex>
            <p>{projectText}</p>
            <ul className="project-links">
              <li><a href={projectURL}>{projectTitle}</a></li>
              <li><a href={projectGitHub}>GitHub</a></li>
            </ul>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}