import React, {useContext, useState} from 'react';
import profilePic from '../images/WechatIMG29399.jpg';
import UvicPic from '../images/Uvic.jpeg'

import {
  TextField,
  Container,
  Paper,
  Typography,
  Button,
  Divider,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Box, Link
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {navigateHelper} from "../helpers/NavigiatorHelper";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


function Landing() {
  const classes = {};
  // const classes = useStyles();
  // const navigator = useNavigate();
  const navigate = navigateHelper(navigator);


  return (
    <Container sx={{maxWidth: '500px'}}>
      <Paper elevation={5} sx={{ position: 'relative', paddingLeft: "5%", paddingTop: "5%", paddingBottom: "20%", paddingRight: '5%', maxWidth: '100%'}}>

        <Card sx={{minWidth: '100%', maxWidth: '100%',flexDirection: 'column', marginTop: '15%', marginRight: '15%', overflow: 'auto'}}>
          <Typography
            variant="h4"
            component="div"
            sx={{ marginLeft: 2, marginTop: 2}}   // Spacing between image and name
          >
            Ruoming (Luke) Ren
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2, marginTop: 2 }}>
          <CardMedia
            component="img"
            sx={{
              width: '80%',     // Set the width to 80% of its container
              height: 'auto',   // Height will adjust automatically based on the width while maintaining aspect ratio
              maxWidth: '300px',  // Optional, set a max width
              maxHeight: '300px', // Optional, set a max height
              margin: '0',  // Optional, center the image horizontally
              borderRadius: '50%',
              marginLeft: 1
            }}
            image={profilePic} // Replace this with the path to your photo
            alt="Luke" // Replace with your name or a suitable description
          />
            <Box sx={{ marginLeft: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h6" component="div" sx={{ marginLeft: 2 }}>
              Lead Software and Web Developer @
            </Typography>
                <Link variant="h6" sx={{ marginLeft: 2, marginTop:0.5, textDecoration: 'none'}} href='https://urbandatacentre.ca/' target="_blank"
                      rel="noopener noreferrer"> Urban Data Centre </Link>
              <Link variant="h6" sx={{ marginLeft: 2, marginTop:0.5, textDecoration: 'none'}} href='https://www.mie.utoronto.ca/' target="_blank"
                    rel="noopener noreferrer"> Department of Mechanical & Industrial Engineering </Link>
              <Link variant="h6" sx={{ marginLeft: 2, marginTop:0.5, textDecoration: 'none'}} href='https://www.utoronto.ca/' target="_blank"
                    rel="noopener noreferrer"> University of Toronto </Link>

            </Box>


          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2, marginTop: 2, marginLeft: 5 }}>
          <Link
            href="https://www.linkedin.com/in/ruoming-luke-ren-aba941199/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: 'flex', color: 'black', marginRight: 3}}
          >
            <LinkedInIcon />
          </Link>
          <Link
            href="https://github.com/Luke9248"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: 'flex', color: 'black'}}
          >
            <GitHubIcon />
          </Link>
          </Box>
        </Card>

        <Card sx={{minWidth: "60%", maxWidth: '100%',flexDirection: 'column', marginTop: '10%', overflow: 'auto', minHeight: 200}}>
          <Typography
            variant="h4"
            component="div"
            sx={{ marginLeft: 2, marginTop: 2}}
          >
            Bio
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1, marginTop: 2, marginLeft: 3}}>
            <Typography variant={'body1'}>
              {'Greetings! I am a dedicated Software and Web Application Developer currently contributing ' +
                'to projects at the Urban Data Centre, where I have the privilege of working under the guidance of Professor '}
              <Link href="http://www.eil.utoronto.ca/members/msf/"
                    target="_blank"
                    rel="noopener noreferrer"
              sx={{textDecoration: 'none'}}>Mark Fox</Link>
              {' and Dr. Daniela Rosu. I received a Honors Bachelor\'s degree from the Computer Science Specialist program at the '}
              <Link href="https://web.cs.toronto.edu/about/our-department"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{textDecoration: 'none'}}>Department of Computer Science</Link>
              {', University of Toronto in December 2022. '}
            </Typography>
          </Box>
        </Card>


        <Card sx={{minWidth: "60%", maxWidth: '100%',flexDirection: 'column', marginTop: '10%', overflow: 'auto', minHeight: 200}}>
          <Typography

            variant="h4"
            component="div"
            sx={{ marginLeft: 3, marginTop: 2}}
          >
            Education Background
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1, marginTop: 2, marginLeft: 3}}>
            <Typography variant={'body1'}>
              {
                'I studied at the '
              }
              <Link href="https://www.uvic.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{textDecoration: 'none'}}>University of Victoria</Link>
              {' pursuing the Honors Bachelor of Science program, majoring in Mathematics and Computer Science, ' +
                'from 2017 to 2019. In the summer of 2019, I transferred to the University of Toronto. ' +
                'I always fondly reminisce about the tranquil and peaceful studying environment at UVic, ' +
                'and I am deeply grateful to my friends and instructors for their invaluable support and guidance during my time there. ' +
                'At University of Toronto, I received my Banchelar\'s degree from Department of  Computer Science, Computer Science specialist Program focusing on Artificial Intelligence on 2022 winter.'}
            </Typography>
          </Box>
          <CardMedia
            component="img"
            sx={{
              height: 'auto',   // Height will adjust automatically based on the width while maintaining aspect ratio
              maxWidth: '400px',  // Optional, set a max width
              maxHeight: '400px', // Optional, set a max height
              margin: 3,  // Optional, center the image horizontally
              marginBottom: 0,
              marginLeft:'25%'
            }}
            image={UvicPic} // Replace this with the path to your photo
            alt="Uvic" // Replace with your name or a suitable description
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{marginLeft: "25%", marginTop: 0}}>
              Photoed by me, @2021 traveling back to UVIC
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{minWidth: "60%", maxWidth: '100%',flexDirection: 'column', marginTop: '10%', overflow: 'auto', minHeight: 200}}>
          <Typography
            variant="h4"
            component="div"
            sx={{ marginLeft: 2, marginTop: 2}}
          >
            Technical Skills
          </Typography>

          <Box sx={{alignItems: 'center', marginBottom: 1, marginTop: 2, marginLeft: 3}}>
            <Typography variant={'h6'}>
              {'Main Languages: JavaScript, Python, Java, C, C#, SQL, SPARQL, LaTeX'}
            </Typography>
            <Typography variant={'h6'}>
              {'Main Technicals: Full-Stack Web Development, Full-Stack Web Deployment, Unit Test(Including Frontend), ' +
                'Database Management(Relational and Non-Relational), Machine Learning'}
            </Typography>
            <Typography variant={'h6'}>
              {'Main Technologies: AWS, Docker, Pytorch, Linux, Shell, Git, React, Express.js, Caddy'}
            </Typography>
          </Box>
        </Card>




      </Paper>
    </Container>
  );
}

export default Landing;