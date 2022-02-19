import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './experience.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Experience= ()=>{
    const [experiences,setExperience]=useState([
        {id:1,
        startingTime:'September 2021',
        endTime:'PRESENT',
        companyName:'InsideMaps, San Francisco, USA' ,
        designation:'Operation Intern' 
        },
        {
        id:2,
        startingTime:'September 2020',
        endTime:'May 2021',
        companyName:'North South University, Dhaka, Bangladesh' ,
        designation:'Research Assistant'
        },
        {id:2,
        startingTime:'January 2020',
        endTime:'May 2020',
        companyName:'North South University, Dhaka, Bangladesh' ,
        designation:'Teacher Assistant'

        }
    ]);
return (
    <>
     <div className='experience'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item><div>
              <h4>02</h4>
                <h2>My <br/> Experience</h2>
                </div>
    </Item>
        </Grid>
        {experiences.map(experience =>(
        <Grid item xs={12}>
          <Item>
              <h3>{experience.startingTime}--{experience.endTime}</h3>
              <h3>{experience.companyName}</h3>
              <h3>{experience.designation}</h3>
              </Item>
        </Grid>
        ))}
      </Grid>
    </Box>    
    </div>
    </>

);
} 
export default Experience;