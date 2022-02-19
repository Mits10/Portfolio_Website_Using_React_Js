import React, {useState} from 'react';
import styles from './about_me.module.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import cv3 from '../../../../assets/image/3.jpg';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const AboutMe= ()=>{
return (
    <>
    <div className={styles.about_me}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      
        <Grid item xs={12} md={6}>
          <Item>
          <div>
              <h4>01</h4>
              <h2>Know <br/> About Me</h2>
              <p>
              Contrary to
              </p>

        </div>
              </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>
          <div>
              <img src={cv3} alt=""/>
        </div>
        </Item>
        </Grid>
       
      </Grid>
    </Box>
    
        
        
        
        
       
    </div>
    </>

);
} 
export default AboutMe;