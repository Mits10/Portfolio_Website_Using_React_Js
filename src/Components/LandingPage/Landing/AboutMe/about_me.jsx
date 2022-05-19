import React, {useState} from 'react';
import styles from './about_me.module.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import cv3 from '../../../../assets/image/3.jpg';
import { maxHeight } from '@mui/system';
import { Card } from '@mui/material';
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
        <Grid item  md={6}>
          <Grid xs={12} >
          <Card sx={{
            height: 400,
            padding: 16,
            borderRadius: 4,
            textAlign: "left",
            justifyContent: "center",
            }}>
          <div>
              <h4>01</h4>
              <h2>Know <br/> About Me</h2>
              <p>
              Tanbin Akter Mitaly is a researcher. She has completed her undergraduate
              from North South University pursuing Bachelor in Computer Science and
              Engineering. She has been always intrigued with the topics related to Artificial
              Intelligence. She is currently working with the goal to solve real-life problems
              with the fusion of Machine Learning.
              </p>
        </div>
        </Card>
              </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
        <Card 
          sx={{
            height: 400,
            padding: 16,
            borderRadius: 4,
            }}>
          <div>
              <img src={cv3} alt=""/>
        </div>
        </Card>
        </Grid>
       
      </Grid>
    </Box>    
    </div>
    </>

);
} 
export default AboutMe;