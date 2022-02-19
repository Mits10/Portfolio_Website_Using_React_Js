import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import cv2 from '../../../../assets/image/2.jpg';
import './project_portfolio.css'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const ProjectPortfolio= ()=>{
return (
    <>
    <div className='projectPortfolio'>
   <div>
    <h4>04</h4>
    <h1 className='size-50'>My <br /> Projects</h1>
    </div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <Item><div className='zoom'><img src={cv2} alt=""/></div></Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item><div className='zoom'><img src={cv2} alt=""/></div></Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item><div className='zoom'><img src={cv2} alt=""/></div></Item>
        </Grid>
      </Grid>
    </Box>
    </div>
    </>

);
} 
export default ProjectPortfolio;