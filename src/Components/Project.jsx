import React from 'react'
import styles from "../Styles/Project.module.css";
import { Card,Image, Stack, Heading, Text, ButtonGroup,Button, CardBody, CardFooter } from '@chakra-ui/react';
import machineImg from '../Components/machine-and-tools.netlify.app.png'

export const Project = () => {
  return (
    <div id={"project"} className={styles.project_div}>
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
                      <Heading size='lg'>J.Crew</Heading>
                      <Text>
                          J.Crew is a clothing company that makes timeless clothes
                          whose style and design changes season to season according
                          to the fashion and new fabrics.
                      </Text>
                    </Stack>
                    <div className={styles.languages_icon}>
                      <img src="https://cdn3d.iconscout.com/3d/free/thumb/html-4387638-3640299.png" alt="html" />
                      <img src="https://cdn3d.iconscout.com/3d/free/thumb/css3-4387639-3640300.png" alt="css" />
                      <img src="https://cdn3d.iconscout.com/3d/free/thumb/javascript-logo-6563586-5453022.png" alt="javascript" />
                    </div>
                  </CardBody>
                  <CardFooter>
                    <ButtonGroup spacing='2'>
                      <Button variant='solid'>
                        <a href="https://kaleidoscopic-torrone-494925.netlify.app/index.html" target='_blank' rel='noreferrer'>See this Live</a>
                      </Button>
                      <Button variant='ghost' className={styles.project_btn}>
                      <a href="https://github.com/Kishan0431/J.Crew" target='_blank' rel='noreferrer'>View Code</a>
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
                      <Heading size='lg'>Lumen5</Heading>
                      <Text>
                      Lumen5 is a website where a user can easily make videos for content marketing, through leadership and brand awareness in a snap
                      </Text>
                    </Stack>
                    <div className={styles.languages_icon}>
                      <img src="https://cdn3d.iconscout.com/3d/free/thumb/html-4387638-3640299.png" alt="html" />
                      <img src="https://cdn3d.iconscout.com/3d/free/thumb/css3-4387639-3640300.png" alt="css" />
                      <img src="https://cdn3d.iconscout.com/3d/free/thumb/javascript-logo-6563586-5453022.png" alt="javascript" />
                    </div>
                  </CardBody>
                  <CardFooter>
                    <ButtonGroup spacing='2'>
                      <Button variant='solid'>
                        <a href="https://sanjiv358.github.io/-plucky-throne-4544/" target='_blank' rel='noreferrer'>See this Live</a>
                      </Button>
                      <Button variant='ghost' className={styles.project_btn}>
                        <a href="https://github.com/Kishan0431/-plucky-throne-4544" target='_blank' rel='noreferrer'>View Code</a>
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
            </Card>
    </div>
    <div className={styles.project_threefour}>
      {/* ----------------------Machine and tools------------------------ */}
                <Card className={styles.project} maxW='md'>
                  <CardBody className={styles.card_body}>
                    <Image className={styles.project_img}
                      src={machineImg}
                      alt='machine&tools'
                      borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                      <Heading size='lg'>Machine&Tools</Heading>
                      <Text>
                      Machine&tools is a website where people can purchase Industrial Products with an objective to inculcate and introduce the concept of industrial supply chains in India.
                      </Text>
                    </Stack>
                    <div className={styles.languages_icon}>
                      <img src="https://cdn3d.iconscout.com/3d/free/thumb/html-4387638-3640299.png" alt="html" />
                      <img src="https://cdn3d.iconscout.com/3d/free/thumb/css3-4387639-3640300.png" alt="css" />
                      <img src="https://cdn3d.iconscout.com/3d/free/thumb/javascript-logo-6563586-5453022.png" alt="javascript" />
                    </div>
                  </CardBody>
                  <CardFooter>
                    <ButtonGroup spacing='2'>
                      <Button variant='solid'>
                      <a href="https://machine-and-tools.netlify.app/" target='_blank' rel='noreferrer'>See this Live</a>
                      </Button>
                      <Button variant='ghost' className={styles.project_btn}>
                      <a href="https://github.com/mhtbansal11/Steady-pancake-873" target='_blank' rel='noreferrer'>View Code</a>
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
            </Card>
            {/* ---------------------Lovoda.com---------------------------------- */}
            <Card className={styles.project} maxW='md'>
                  <CardBody className={styles.card_body}>
                    <Image className={styles.project_img}
                      src='https://user-images.githubusercontent.com/31920143/208379986-804c58ed-d35e-46b5-b9df-071c2c676dc2.png'
                      alt='lumen5'
                      borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                      <Heading size='lg'>Lovoda.com</Heading>
                      <Text>
                        This website is basically ecommerce website where you can buy female trending jewelries items.
                      </Text>
                    </Stack>
                    <div className={styles.languages_icon}>
                      <img src="https://cdn3d.iconscout.com/3d/free/thumb/html-4387638-3640299.png" alt="html" />
                      <img src="https://cdn3d.iconscout.com/3d/free/thumb/css3-4387639-3640300.png" alt="css" />
                      <img src="https://cdn3d.iconscout.com/3d/free/thumb/javascript-logo-6563586-5453022.png" alt="javascript" />
                    </div>
                  </CardBody>
                  <CardFooter>
                    <ButtonGroup spacing='2'>
                      <Button variant='solid'>
                        <a href="https://lovoda-clone-far-powder-2496.netlify.app/" target='_blank' rel='noreferrer'>See this Live</a>
                      </Button>
                      <Button variant='ghost' className={styles.project_btn}>
                        <a href="https://github.com/Kishan0431/Lovoda.com" target='_blank' rel='noreferrer'>View Code</a>
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
            </Card>
    </div>
    </div>
  )
}


