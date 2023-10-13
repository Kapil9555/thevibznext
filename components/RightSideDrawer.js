'use client'
import { Box, Button, Checkbox, Drawer, FormControl, FormControlLabel, FormGroup, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import whitelogo from '../assets/whitelogo.webp';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Image from 'next/image';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const RightSideDrawer = ({ rightOpen, setRightOpen }) => {
  const [change, setChange] = useState('login');
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const closeHandler = () => {
    setRightOpen(false)
  }
  const changeHandler = (ele) => {
    setChange(ele)
  }

  return (
    <Drawer
      anchor={'right'}
      open={rightOpen}
      onClose={() => { setRightOpen(false) }}
      PaperProps={{
        sx: { width: { lg: '28%', md: '35%', sm: '50%', xs: '60%' }, margin: 'auto', bgcolor: 'white' }
      }}
    >
      <Grid container sx={{ color: 'white' }} >
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', p: '4px' }} >
          <CancelIcon sx={{ color: 'black', fontSize: '35px', cursor: 'pointer' }} onClick={closeHandler} />
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

          <PermIdentityOutlinedIcon sx={{ fontSize: '35px', color: 'black' }} />
          <Typography sx={{ fontSize: '16px', color: 'black', mt: '5px' }}>MY ACCOUNT</Typography>


        </Grid>

        <Grid item xs={12} sx={{ p: '7px', mt: '15px' }}>
          <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
            <Grid item xs={6} sx={{ borderBottom: change == 'login' ? '2px solid black' : '2px solid grey' }} onClick={() => { changeHandler('login') }}>
              <Typography sx={{ color: change == 'login' ? 'black' : 'grey', fontSize: '14px', textAlign: 'center', fontWeight: '600' }} >LOGIN</Typography>
            </Grid>
            <Grid item xs={6} sx={{ borderBottom: change == 'register' ? '2px solid black' : '2px solid grey' }} onClick={() => { changeHandler('register') }}>
              <Typography sx={{ color: change == 'register' ? 'black' : 'grey', fontSize: '14px', textAlign: 'center', fontWeight: '600' }} >REGISTER</Typography>
            </Grid>
          </Grid>
          <Grid container >
            {change == 'login' ?
              <Grid item xs={12} sx={{ textAlign: 'left', p: '10px', pb: '20px' }}>
                <Typography sx={{ color: 'black', fontSize: '15px' }}>Username or email *</Typography>
                <Box sx={{ mt: '8px', width: '100%' }} >
                  <TextField placeholder='Enter email..' type='email' fullWidth sx={{ color: 'black', }} size='small' />
                </Box>
                <Typography sx={{ color: 'black', fontSize: '15px', mt: '8px' }}>Password *</Typography>

                <Box sx={{ mt: '8px', width: '100%' }} >
                 
                  <FormControl sx={{ width: '100%' }} variant="outlined" size='small'>
                   
                    <OutlinedInput
                     
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ?  <Visibility /> :<VisibilityOff /> }
                          </IconButton>
                        </InputAdornment>
                      }
                      
                    />
                  </FormControl>



                </Box>

                <Box sx={{ mt: '8px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ width: '180px' }}>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox defaultChecked />} label="Remember..." sx={{ color: 'black', fontSize: '15px' }} />

                    </FormGroup>

                  </Box>
                  <Box sx={{ mr: '5px' }}>
                    <Typography sx={{ color: 'black', fontSize: '16px', }}><a href='#' style={{ color: 'black' }}>Lost Password?</a></Typography>
                  </Box>
                </Box>

                <Box sx={{ width: '100%', mt: '10px', }}>
                  <Button sx={{ bgcolor: '#212121', color: 'white', fontSize: '13px', width: '100%', '&:hover':{bgcolor: '#212121', color: 'white', fontSize: '13px',} }}>Login</Button>

                </Box>

              </Grid>

              :
              <Grid item xs={12} sx={{ lineHeight: '10px', textAlign: 'left', p: '10px' }}>
                <Typography sx={{ color: 'black', fontSize: '15px' }}>Email address *</Typography>
                <Box sx={{ mt: '8px', width: '100%' }} >
                  <TextField placeholder='Enter email..' type='email' fullWidth sx={{ color: 'black', }} size='small' />
                </Box>

                <Box sx={{ width: '100%', color: 'black' }}>
                  <Typography sx={{ fontSize: '13px', mt: '10px' }}>A password will be sent to your email address.</Typography>
                  <Typography sx={{ fontSize: '13px', mt: '10px' }}>
                    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                  </Typography>

                </Box>

                <Box sx={{ width: '100%', mt: '10px', }}>
                  <Button sx={{ bgcolor: '#212121', color: 'white', fontSize: '13px', width: '100%', '&:hover':{bgcolor: '#212121', color: 'white', fontSize: '13px',}  }}>Register</Button>

                </Box>

              </Grid>



            }


          </Grid>
          <Grid container>
            <Grid item xs={12} sx={{ display: 'flex', mt: '15px' }}>

              <PersonOutlineOutlinedIcon sx={{ fontSize: '20px', color: 'white' }} />
              <Typography sx={{ fontWeight: '600', fontSize: '13px', color: 'white', ml: '5px', fontWeight: '700' }}>LOGIN/SIGNUP</Typography>


            </Grid>

            <Grid item xs={12} sx={{ display: 'flex', mt: '15px' }}>

              <FavoriteBorderOutlinedIcon sx={{ fontSize: '20px', color: 'white' }} />
              <Typography sx={{ fontWeight: '600', fontSize: '13px', color: 'white', ml: '5px', fontWeight: '700' }}>WHISHLIST</Typography>

            </Grid>
          </Grid>

        </Grid>


      </Grid>


    </Drawer>
  )
}

export default RightSideDrawer