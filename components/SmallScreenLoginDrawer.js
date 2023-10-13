'use client'
import { Box, Drawer, Grid, Typography } from '@mui/material';
import React, {useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import whitelogo from '../assets/whitelogo.webp';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Image from 'next/image' 
import { FAMILY } from '@/Styles/ConstantStyle';

const SmallScreenLoginDrawer = ({ rightDrawer,setRightDrawer}) => {


  const closeHandler = () => {
    setRightDrawer(false)
  }

  console.log(rightDrawer)

  return (
    <Drawer
      anchor={'left'}
      open={rightDrawer}
      onClose={() => { setRightDrawer(false) }}
      PaperProps={{
        sx: { width: { lg: '0%', md: '28%', sm: '45%', xs: '80%' }, margin: 'auto', bgcolor: 'black' }
      }}
    >
      <Grid container >
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', p:'4px' }} >
          <CancelIcon sx={{ color: 'white', fontSize: '35px', cursor: 'pointer' }} onClick={closeHandler} />
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ width: '110px', height: '80px', position:'relative' }}>
            <Image src={whitelogo} alt='logo' fill sizes="(min-width: 808px) 50vw " style={{objectFit:'cover'}}/>
          </Box>

        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '15px' }}>
          <Box sx={{ borderRadius: '3px', p: '7px 0px 7px 5px', width: {lg:'95%', md:'95%', sm:'95%', xs:'95%'}, bgcolor: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <input placeholder='Type here...' type='text' style={{ border: 'none', background: 'none', outline: 'none',fontWeight:'600', width:'90%' }} />
            <SearchIcon sx={{ color: 'grey' }} />

          </Box>

        </Grid>
        <Grid item xs={12} sx={{ p: '7px', mt: '15px' }}>
          <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
           
            
          </Grid>
          
          <Grid container>
            <Grid item xs={12} sx={{ display: 'flex', mt: '15px' }}>

              <PersonOutlineOutlinedIcon sx={{ fontSize: '20px', color: 'white' }} />
              <Typography sx={{ fontWeight: '600', fontSize: '13px', color: 'white', ml: '5px', fontWeight:'700',fontFamily:FAMILY }}>LOGIN/SIGNUP</Typography>


            </Grid>

            <Grid item xs={12} sx={{ display: 'flex', mt: '15px' }}>

              <FavoriteBorderOutlinedIcon sx={{ fontSize: '20px', color: 'white' }} />
              <Typography sx={{ fontWeight: '600', fontSize: '13px', color: 'white', ml: '5px', fontWeight:'700',fontFamily:FAMILY }}>WHISHLIST</Typography>

            </Grid>
          </Grid>

        </Grid>


      </Grid>
      

    </Drawer>
  )
}

export default SmallScreenLoginDrawer