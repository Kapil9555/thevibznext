'use client'
import {  Drawer, Grid, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const WishlistDrawer = ({ wishListopen, setWishListopen }) => {
    const closeHandler = () => {
        setOpen(false)
      }
  
    return (
        <Drawer
            anchor={'right'}
            open={wishListopen}
            onClose={() => { setWishListopen(false) }}
            PaperProps={{
                sx: { width: { lg: '28%', md: '35%', sm: '50%', xs: '60%' }, zIndex:999999999, margin: 'auto', bgcolor: 'white' }
            }}
        >
            <Grid container sx={{ color: 'white' }} >
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', p: '4px' }} >
                    <CancelIcon sx={{ color: 'black', fontSize: '35px', cursor: 'pointer' }} onClick={closeHandler} />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                    <FavoriteBorderIcon sx={{ fontSize: '25px', color: 'black' }} />
                    <Typography sx={{ fontSize: '15px', color: 'black', mt: '15px',fontWeight:'600' }}>MY WISHLIST</Typography>


                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{color:'black', fontSize:'15px', textAlign:'center', mt:'20px'}}>No products in the wishlist.</Typography>

                </Grid>




            </Grid>


        </Drawer>
    )
}

export default WishlistDrawer