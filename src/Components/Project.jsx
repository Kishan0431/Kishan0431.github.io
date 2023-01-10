import React from 'react'
import styles from "../Styles/Project.module.css";
import { Card,Image, Stack, Heading, Text, ButtonGroup,Button, CardBody, CardFooter } from '@chakra-ui/react';


export const Project = () => {
  return (
    <div className={styles.project_div}>
        <h1>Projects</h1>
    <div className={styles.project_onetwo}>
      {/* ----------------------J.crew------------------------ */}
                <Card className={styles.project} maxW='md'>
                  <CardBody className={styles.card_body}>
                    <Image className={styles.project_img}
                      src='https://github.com/Kishan0431/J.Crew/raw/main/Pics/Landing.png'
                      alt='jcrew'
                      borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>J.Crew</Heading>
                      <Text>
                          J.Crew is a clothing company that makes timeless clothes
                          whose style and design changes season to season according
                          to the fashion and new fabrics.
                      </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <ButtonGroup spacing='2'>
                      <Button variant='solid' colorScheme='blue'>
                      <a href="https://kaleidoscopic-torrone-494925.netlify.app/index.html">See this Live</a>
                      </Button>
                      <Button variant='ghost' colorScheme='blue'>
                      <a href="https://github.com/Kishan0431/J.Crew">View Code</a>
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
            </Card>
            {/* ---------------------Lumen5---------------------------------- */}
            <Card className={styles.project} maxW='md'>
                  <CardBody className={styles.card_body}>
                    <Image className={styles.project_img}
                      src='http://yourentrepreneurresources.com/wp-content/uploads/2020/10/Lumen5-review-pros-and-cons-features-1024x576.jpg'
                      alt='lumen5'
                      borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>Lumen5</Heading>
                      <Text>
                      Lumen5 is a website where a user can easily make videos for content marketing, through leadership and brand awareness in a snap
                      </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <ButtonGroup spacing='2'>
                      <Button variant='solid' colorScheme='blue'>
                        <a href="https://sanjiv358.github.io/-plucky-throne-4544/">See this Live</a>
                      </Button>
                      <Button variant='ghost' colorScheme='blue'>
                        <a href="https://github.com/Kishan0431/-plucky-throne-4544">View Code</a>
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
            </Card>
    </div>
     
    </div>
  )
}

//https://github.com/Kishan0431/J.Crew/raw/main/Pics/Landing.png
