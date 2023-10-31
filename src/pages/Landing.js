import React, {useContext, useState} from 'react';

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


// const useStyles = makeStyles(() => ({
//   container: {
//     paddingTop: 80,
//     maxWidth: '500px'
//   },
//   paper: {
//     padding: 30,
//   },
//   item: {
//     marginTop: 20,
//   },
//   button: {
//     marginTop: 30,
//     marginBottom: 20,
//   },
//   link: {
//     marginTop: 10,
//     color: '#007dff',
//   }
// }));

function Landing() {
  const classes = {};
  // const classes = useStyles();
  // const navigator = useNavigate();
  const navigate = navigateHelper(navigator);


  return (
    <Container sx={{maxWidth: '500px'}}>
      <Paper elevation={5} sx={{ position: 'relative', paddingLeft: 5, paddingTop: 5, paddingBottom: 20}}>

        <Card sx={{minWidth: 200, maxWidth: '100%',flexDirection: 'column', marginTop: 15, marginRight: 25}}>
          <Typography
            variant="h4"
            component="div"
            sx={{ marginLeft: 2, marginTop: 2}}   // Spacing between image and name
          >
            Ruoming(Luke) Ren
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
            image="/WechatIMG29399.jpg" // Replace this with the path to your photo
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

        <Card sx={{minWidth: 300, maxWidth: '100%',flexDirection: 'column', marginTop: 10, marginLeft: 30}}>
          <Typography
            variant="h4"
            component="div"
            sx={{ marginLeft: 2, marginTop: 2}}
          >
            Bio
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1, marginTop: 2, marginLeft: 3}}>
            <Typography variant={'body1'}>
              {'I am a Software and Web Application Developer at Urban Data Centre, under the supervision of Professor '}
              <Link href="http://www.eil.utoronto.ca/members/msf/"
                    target="_blank"
                    rel="noopener noreferrer"
              sx={{textDecoration: 'none'}}>Mark Fox</Link>
              {' and Dr. Daniela Rosu. I graduated from the Computer Science Specialist program at the '}
              <Link href="https://web.cs.toronto.edu/about/our-department"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{textDecoration: 'none'}}>Department of Computer Science</Link>
              {' University of Toronto in December 2022. '}
            </Typography>
          </Box>
        </Card>


      </Paper>
    </Container>
  );
}

export default Landing;