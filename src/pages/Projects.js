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


function Projects() {
  const classes = {};
  // const classes = useStyles();
  // const navigator = useNavigate();
  const navigate = navigateHelper(navigator);


  return (
    <Container sx={{maxWidth: '500px'}}>
      <Paper elevation={5} sx={{ position: 'relative', paddingLeft: "5%", paddingTop: "5%", paddingBottom: "20%", paddingRight: '5%', maxWidth: '100%'}}>

        <Card sx={{minWidth: "60%", maxWidth: '100%',flexDirection: 'column', marginTop: '10%', overflow: 'auto', minHeight: 200}}>
          <Typography
            variant="h4"
            component="div"
            sx={{ marginLeft: 2, marginTop: 2}}
          >

            Web Application: Social Needs Marketplace - Impact
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{ marginLeft: 2, marginTop: 2}}
          >

            {'Code Base: '}
            <Link href="https://csse.utoronto.ca/social-needs-marketplace"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{textDecoration: 'none'}}>https://github.com/csse-uoft/SNM-I</Link>
          </Typography>


          <Typography
            variant="body1"
            component="div"
            sx={{ marginLeft: 2}}
          >

            {'Description: '}
            <Link href="https://csse.utoronto.ca/social-needs-marketplace"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{textDecoration: 'none'}}>https://csse.utoronto.ca/social-needs-marketplace</Link>
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1, marginTop: 2, marginLeft: 3}}>
            <Typography variant={'body1'}>
              {'The Social Needs Marketplace-Impact (SNM-I) assists agencies in efficiently and effectively servicing the needs of their clients. SNM-I provides a market infrastructure that enables the matching of demand to supply.'}
            </Typography>
          </Box>
        </Card>

        <Card sx={{minWidth: "60%", maxWidth: '100%',flexDirection: 'column', marginTop: '10%', overflow: 'auto', minHeight: 200}}>
          <Typography
            variant="h4"
            component="div"
            sx={{ marginLeft: 2, marginTop: 2}}
          >

            Web Application: Common Approach Sandbox
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{ marginLeft: 2, marginTop: 2}}
          >

            {'Code Base: '}
            <Link href="https://github.com/csse-uoft/Pathfinder"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{textDecoration: 'none'}}>https://github.com/csse-uoft/Pathfinder</Link>
          </Typography>


          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1, marginTop: 2, marginLeft: 3}}>
            <Typography variant={'body1'}>
              {'The Common Approach Sandbox is a platform which enables Social Purpose Organizations and their partners to share,' +
                'exchange, pool, and aggregate impact measurement data to improve learning, advocacy, and portfolio assessment'}
            </Typography>
          </Box>
        </Card>




      </Paper>
    </Container>
  );
}

export default Projects;