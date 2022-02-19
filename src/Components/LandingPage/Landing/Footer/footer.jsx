import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './footer.css';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
const Footer= ()=>{
return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div className='footer'>
                <h4>05</h4>
                <h1 className="size-50">Contact  Me</h1>
     <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Item> <div>
                    <h3>Phone Number</h3>
                    <p>+20 5555 569 42</p>
                    <h3> Mobile Numberr</h3>
                    <p>+20 5555 569 42</p>
                    <h3>Email</h3>
                    <p>mail@info.me </p>

                    <h3>Social Network</h3>

                    <ul className="social">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-google"></i></a></li>
                    </ul>
                </div> 
            </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item><Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <div>
                        <TextField
                        fullWidth
                        id="fullWidth"
                        label="Required"
                        defaultValue="Your Name"
                        />
                        </div>
                        <div>
                        <TextField

                        id="outlined-basic"
                        label="Error"
                        defaultValue="Your E-mail"
                        />
                        </div>
                        <div>
                        <TextField

                        id="outlined-basic"
                        label="Error"
                        defaultValue="Phone Number"
                        />
                        </div>
                        <div>
                        <TextField

                        id="outlined-basic"
                        label="Error"
                        defaultValue="Your Message"
                        />
                        </div>
                        <Stack spacing={2} direction="row">
                            
                            <Button variant="contained">Submit</Button>
                            
                            </Stack>
                </Box>        
        </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
    </>

);
} 
export default Footer;