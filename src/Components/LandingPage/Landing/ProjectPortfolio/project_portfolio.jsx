import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import cv2 from '../../../../assets/image/2.jpg';
import cv3 from "../../../../assets/image/cv3.PNG";
import cv4 from "../../../../assets/image/cv4.PNG";
import './project_portfolio.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const ProjectPortfolio= ()=>{
  const [projects,setProjects]=useState([
    {
      id:1,
      projectname: 'E-commerce Site',
      img : cv2,
      desc : ".......",
      link: "https://poetic-rolypoly-72a8c8.netlify.app/",

    },
    {
    id:2,
      projectname: 'E-commerce Site',
      img : cv3,
      desc : ".......",
      link: "https://heartfelt-begonia-714112.netlify.app/",

    },
    {
      id:3,
      projectname: 'Rocket Launcher',
      img : cv4,
      desc : "Rocket Launcher is a app that shows information about various types of rockets.",
      link: "https://verdant-pasca-3782d1.netlify.app/"

    },
    {
      id:4,
      projectname: 'Project1',
      img : cv2,
      desc : "......."
    },
    {
      id:5,
      projectname: 'Project1',
      img : cv2,
      desc : "......."
    },
    {
      id:6,
      projectname: 'Project1',
      img : cv2,
      desc : "......."
    },
    {
      id:7,
      projectname: 'Project1',
      img : cv2,
      desc : "......."
    },
    {
      id:8,
      projectname: 'Project1',
      img : cv2,
      desc : "......."
    }
  ])
return (
    <>
    <div id="projectPortfolio__section" className='projectPortfolio'>
   <div>
    <h4>04</h4>
    <h1 className='size-50'>My <br /> Projects</h1>
    </div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      {projects.map((project) => {
        return (
          <Grid item xs={6} md={4}>
          <Item>
            <div className='zoom'>
            <a href={project.link}>
            <img src={project.img} alt=""/>
            <h3>{project.projectname}</h3>
            <p>{project.desc}</p>
            </a>
            </div>
          </Item>
        </Grid>
        );
      })}
        <Grid item xs={12} md={12}>
          <Item><button>View More</button></Item>
        </Grid>
      </Grid>
    </Box>
    </div>
    </>

);
} 
export default ProjectPortfolio;