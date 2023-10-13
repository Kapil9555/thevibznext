'use client'
import CancelIcon from '@mui/icons-material/Cancel';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Drawer, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import whitelogo from '../assets/whitelogo.webp';

const SideDrawer = ({ open, setOpen }) => {
  const [change, setChange] = useState('menu')
  const closeHandler = () => {
    setOpen(false)
  }
const changeHandler=(ele)=>{
  console.log(ele);
  setChange(ele)
}

  return (
    <Drawer
      anchor={'left'}
      open={open}
      onClose={() => { setOpen(false) }}
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
            <Grid item xs={6} sx={{ borderBottom:change == 'menu'?'2px solid white': '2px solid grey'  }} onClick={()=>{changeHandler('menu')}}>
              <Typography sx={{ color: 'white', fontSize: '14px', textAlign: 'center', fontWeight: '800', }} >MENU</Typography>
            </Grid>
            <Grid item xs={6} sx={{ borderBottom:change == 'categories'?'2px solid white': '2px solid grey' }} onClick={()=>{changeHandler('categories')}}>
              <Typography sx={{ color: 'grey', fontSize: '14px', textAlign: 'center', fontWeight: '800', }} >CATEGORIES</Typography>
            </Grid>
          </Grid>
          <Grid container >
            {change == 'menu' ? 
              <Grid item xs={12} sx={{  textAlign: 'left', }}>
                <Typography  sx={{ color: 'white', fontSize: '13px', fontWeight: '800', mt: '15px', }}>All CATEGORIES</Typography>
                <Typography sx={{ color: 'white', fontSize: '13px', fontWeight: '800', mt: '15px', }}>CLOTHES</Typography>
                <Typography sx={{ color: 'white', fontSize: '13px', fontWeight: '800', mt: '15px', }}>SHOP</Typography>
                <Typography sx={{ color: 'white', fontSize: '13px', fontWeight: '800', mt: '15px', }}>CONTACT US</Typography>

              </Grid> 
              : 
              <Grid item xs={12} sx={{ lineHeight: '10px', textAlign: 'left', }}>
              <Typography sx={{ color: 'white', fontSize: '13px', fontWeight: '800', mt: '15px', }}>COUPLE SHIRTS</Typography>
              <Typography sx={{ color: 'white', fontSize: '13px', fontWeight: '800', mt: '15px', }}>FORMAL SHIRTS</Typography>
              <Typography sx={{ color: 'white', fontSize: '13px', fontWeight: '800', mt: '15px', }}>MAN'S FULL SLEEVE</Typography>
              <Typography sx={{ color: 'white', fontSize: '13px', fontWeight: '800', mt: '15px', }}>MAN'S HALF SLEEVE</Typography>
              <Typography sx={{ color: 'white', fontSize: '13px', fontWeight: '800', mt: '15px', }}>MEN'S/WOMEN'S</Typography>
              <Typography sx={{ color: 'white', fontSize: '13px', fontWeight: '800', mt: '15px', }}>MEN T-SHIRT</Typography>
              <Typography sx={{ color: 'white', fontSize: '13px', fontWeight: '800', mt: '15px', }}>WOMEN'S FULL SLEEVE</Typography>
              <Typography sx={{ color: 'white', fontSize: '13px', fontWeight: '800', mt: '15px', }}>WOMEN'S HALF SLEEVE</Typography>

            </Grid>


              
              }

           
          </Grid>
          <Grid container>
            <Grid item xs={12} sx={{ display: 'flex', mt: '15px' }}>

              <PersonOutlineOutlinedIcon sx={{ fontSize: '20px', color: 'white' }} />
              <Typography sx={{ fontWeight: '600', fontSize: '13px', color: 'white', ml: '5px', fontWeight:'700', }}>LOGIN/SIGNUP</Typography>


            </Grid>

            <Grid item xs={12} sx={{ display: 'flex', mt: '15px' }}>

              <FavoriteBorderOutlinedIcon sx={{ fontSize: '20px', color: 'white' }} />
              <Typography sx={{ fontWeight: '600', fontSize: '13px', color: 'white', ml: '5px', fontWeight:'700', }}>WHISHLIST</Typography>

            </Grid>
          </Grid>

        </Grid>


      </Grid>
      

    </Drawer>
  )
}

export default SideDrawer