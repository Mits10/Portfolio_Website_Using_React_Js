import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import './keyskill.css';
import Grid from '@mui/material/Grid';

const KeySkills= ()=>{
  const [value, setValue] = useState(4.5);
  const [skills,setskills]=useState([
    {
      id:1,
      name: 'HTML'
    },
    {
      id:1,
      name: 'CSS'
    },
    {
      id:1,
      name: 'JavaScript'
    },
    {
      id:1,
      name: 'React'
    }
  ])
  return (
    <>
    <div className='keyskills'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div>
              <h4>02</h4>
              <h2>My<br/>Skills</h2>
                </div>
   
        </Grid>
        <Grid item xs={12}>
         <div className='kschild'>
            <Box
              sx={{
                '& > legend': { mt: 2 },
              }}
              >
              {skills.map(skill=>(
                <>
              <Typography component="legend">{skill.name}</Typography>
              <Rating name="read-only" value={value} precision={0.5}  readOnly />
              </>
              ))}
             {/*/>*/}
            </Box>
        </div>
        </Grid>
    </Grid>
    </Box>
    </div>
    </>

);
} 
export default KeySkills;