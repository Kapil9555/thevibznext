'use client';
import { Box, Button, FormControl, FormControlLabel, Grid, InputBase, Radio, RadioGroup, Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { useState } from 'react';
import pic1 from '../assets/couple4.webp';
import Image from 'next/image';
import visa from '../assets/visa.png';
import mastercard from '../assets/mastercardr.png';
import paypal from '../assets/paypal.png';
import amercianexp from '../assets/amercianexp.png';
import webmoney from '../assets/webmoney.png';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useRouter } from 'next/navigation';


const steps = [
  'SHOPPING CART',
  'CHECKOUT',
  'ORDER STATUS',
];

const AddToCartPage = () => {
  const router =useRouter()
  const [count, setCount] = useState(0);


  const minusHandler = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const plusHandler = () => {
    setCount(count + 1);
  };
  return (
    <>
    <Header/>
      <Grid container >
        <Grid item xs={12} sx={{ bgcolor: '#fafafa', display: {lg:'flex', md:'flex', sm:'none', xs:'none'}, justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ width: '60%', m: '30px 10px' }}>
            <Stepper activeStep={2}  >
              {steps.map((label) => (
                <Step key={label} >
                  <StepLabel >{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

        </Grid>

        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt:{lg:'10px', md:'10px', sm:'70px', xs:'70px'}, pb:'120px' }}>
          <Grid item lg={9} md={9} sm={12} xs={12} >
            <Grid container sx={{ justifyContent: 'space-between', p:'0px 15px' }}>
              <Grid item lg={7} md={7} sm={12} xs={12} >
                <Grid conatiner sx={{ display: 'flex', borderBottom: '2px solid lightgrey', pb: '14px', mt:'8px',justifyContent:'space-between' }}>
                  <Grid item xs={6.5} >
                    <Typography sx={{ fontSize:{ lg:'15px', md:'14px', sx:'14px', xs:'13px'}, color: '#757575', }}>PRODUCT</Typography>
                  </Grid>
                  <Grid item xs={1.5} sx={{display:{lg:'block', md:'none', sm:'none', xs:'none'}}} >
                    <Typography sx={{  fontSize:{ lg:'15px', md:'14px', sx:'14px', xs:'13px'}, color: '#757575' }}>PRICE</Typography>
                  </Grid>
                  <Grid item lg={2} md={2} sm={2} xs={2.5} >
                    <Typography sx={{ fontSize:{ lg:'15px', md:'14px', sx:'14px', xs:'13px'}, color: '#757575', }}>QUANTITY</Typography>
                  </Grid>
                  <Grid item xs={2} sx={{display:{lg:'block', md:'none', sm:'none', xs:'none'}}} >
                    <Typography sx={{ fontSize:{ lg:'15px', md:'14px', sx:'14px', xs:'13px'}, color: '#757575', }}>SUBTOTAL</Typography>
                  </Grid>
                </Grid>

                <Grid conatiner sx={{ display: 'flex', mt: '15px', borderBottom: '2px solid lightgrey', pb: '20px', justifyContent:'space-between' }}>
                  <Grid item lg={6.5} md={6.5} sm={8} xs={8}   sx={{ display: 'flex' }}>
                    <Box sx={{ width: {lg:'85px', md:'85px', sm:'75px', xs:'120px'}, height: '120px', position: 'relative' }}>
                      <Image src={pic1} alt='product' fill objectFit='cover' />
                    </Box>
                    <Box sx={{ p: '0px 5px 0px 10px' }}>
                      <Box >
                        <Typography sx={{ fontSize: '14px', fontWeight: '700' }}>346 ABSTARCT OVERSIZED T SHIRT MEN</Typography>
                      </Box>
                      <Box sx={{ mt: '6px' }}>
                        <Typography sx={{ fontSize: '13px', color: '#757575', }}>Size L</Typography>

                      </Box>
                      <Box sx={{ mt:{ lg:'25px', md:'25px', sm:'22px', xs:'16px'} }}>
                        <Typography ><a href='' style={{ fontSize: '14px', color: '#212121', }}>Remove</a></Typography>
                        <Typography sx={{fontSize:'13px', display:{lg:'none', md:'none', sm:'block', xs:'block'}}}>2 x <span style={{fontSize:'13px', color:'#757575'}}>₹849.00</span></Typography>
                      </Box>

                    </Box>
                  </Grid>
                  <Grid item xs={1.5} sx={{display:{lg:'block', md:'none', sm:'none', xs:'none'}}}>
                    <Typography sx={{ fontSize: '15px', color: '#757575', }}>₹849.00</Typography>
                  </Grid>
                  <Grid item lg={2} md={2} sm={2} xs={3} >
                    <Box sx={{ width: {lg:'80%', md:'80%', sm:'100%', xs:'100%'}, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Box onClick={minusHandler} sx={{ cursor: 'pointer', width:{ lg:'30px', md:'30px', sm:'30px', xs:'100px'}, height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2px', border: '1px solid #bdbdbd' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: '900', color: '#bdbdbd' }}>-</Typography>

                      </Box>
                      <Box sx={{ width:{ lg:'33px', md:'35px', sm:'30px', xs:'100px'}, height: '30px', border: '1px solid #bdbdbd', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2px' }}>
                        <Typography sx={{ fontSize: '13px', color: '#212121' }}>{count}</Typography>
                      </Box>
                      <Box onClick={plusHandler} sx={{ cursor: 'pointer', width:{ lg:'30px', md:'30px', sm:'30px', xs:'100px'}, height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2px', border: '1px solid #bdbdbd' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: '900', color: '#bdbdbd' }}>+</Typography>
                      </Box>


                    </Box>
                  </Grid>
                  <Grid item xs={2}sx={{display:{lg:'block', md:'none', sm:'none', xs:'none'}}} >
                    <Typography sx={{ fontSize: '15px', color: '#757575', }}>₹1,698.00</Typography>
                  </Grid>
                </Grid>
                <Grid container sx={{ mt: '13px', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Grid item lg={5} md={5} sm={12} xs={12} sx={{ border: '1ppx solid green' }}>
                    <Box sx={{ border: '2px solid #eeeeee', display: 'flex', justifyContent: 'space-between', }}>
                      <InputBase placeholder='Coupon Code' sx={{ ml: '3px', fontSize: '14px' }} />
                      <Box sx={{ bgcolor: '#eeeeee', p: '5px',width:'20px',cursor:"pointer" }}>
                        <Typography sx={{ fontSize: '13px', textAlign:'center' }}>Ok</Typography>
                      </Box>
                    </Box>

                  </Grid>
                  <Grid item lg={3.5} md={6} sm={12} xs={12} sx={{mt:{lg:'0px',md:'0px',sm:'15px', xs:'10px'}}}>
                    <Button sx={{ width: '100%', border: '1.5px solid #616161', }}>
                      <DeleteForeverOutlinedIcon sx={{ fontSize: '20px', color: '#616161' }} />
                      <Typography sx={{ fontSize: '12px', color: '#616161' }}>clear shopping cart</Typography>
                    </Button>
                  </Grid>
                </Grid>

              </Grid>

              <Grid item lg={4.8} md={4.8} sm={12} xs={12} sx={{mt:{lg:"0px", md:'0px', sm:'30px', xs:'30px'}}}>
                <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start',border: '2px solid black', pb: '16px' }}>
                  <Grid item xs={11} >
                    <Grid container>
                      <Grid item xs={12} sx={{ borderBottom: '2px solid lightgrey', p: '10px 0px', }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>CART TOTALS</Typography>

                      </Grid>
                    </Grid>


                    <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mt: '5px', p: '10px 0px' }}>
                      <Grid item xs={8}>
                        <Typography sx={{ fontSize: '15px', color: '#757575', }}>Subtotal  </Typography>


                      </Grid>
                      <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'flex-start' }}>
                        <Typography sx={{ color: '#757575', fontSize: '15px' }} >₹1,698.00</Typography>

                      </Grid>
                      <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mt: '19px' }}>
                        <Grid item xs={6}>
                          <Typography sx={{ fontSize: '15px', color: '#757575', }}>Shipping  </Typography>


                        </Grid>
                        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'flex-start' }}>
                          <Typography sx={{ color: '#757575', fontSize: '15px' }} >Free shipping</Typography>

                        </Grid>

                      </Grid>
                      <Grid container sx={{ mt: '19px' }}>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'flex-start', }}>
                          <Typography sx={{ fontSize: '15px', color: '#757575', }}>Shipping to Gujarat.  </Typography>


                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'flex-start', mt: '8px' }}>
                          <Typography ><a href='' style={{ fontSize: '15px', color: '#212121', }}>Change address</a></Typography>


                        </Grid>


                      </Grid>

                      <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mt: '20px', pb: '15px', borderBottom: '2px solid lightgrey' }}>
                        <Grid item xs={8}>
                          <Typography sx={{ fontSize: '17px' }}>TOTAL  </Typography>


                        </Grid>
                        <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'flex-start' }}>
                          <Typography sx={{ fontSize: '17px' }} >₹1,698.00</Typography>

                        </Grid>

                      </Grid>

                      <Grid container sx={{ mt: '18px' }}>


                        <Grid item xs={12} sx={{ mt: '15px' }}>
                          <Button sx={{ width: '100%', color: 'white', bgcolor: '#212121', '&:hover': { width: '100%', color: 'white', bgcolor: '#212121', } }} onClick={()=>{router.push('/buynow/buynowpage')}}>Proceed to Checkout</Button>

                        </Grid>
                        <Grid item xs={12} sx={{ mt: '15px' }}>
                          <Button sx={{ width: '100%', color: '#212121', border: '1px solid #bdbdbd', '&:hover': { width: '100%', color: '#212121', } }}>continue shopping</Button>

                        </Grid>

                      </Grid>


                    </Grid>

                  </Grid>
                </Grid>
                <Grid container sx={{mt:'45px'}}>
                  <Grid item xs={12} sx={{textAlign:'center', p:'0px 7px'}}>
                    <Typography sx={{fontSize:'19px', fontWeight:'700', textTransform:'uppercase'}}>Payment security</Typography>
                    <Typography sx={{fontSize:'14.5px', mt:'10px', color:'#555555'}}>Encryption ensures increased transaction security. SSL technology protects data linked to personal and payment info.</Typography>

                  </Grid>
                  <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '10px' }}>
                            <Box sx={{ width: '300px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', }}>


                                <Box sx={{ width: '50px', height: '50px', position: 'relative' }}>
                                    <Image src={visa} alt='visa' fill style={{ objectFit: 'cover' }} />

                                </Box>
                                <Box sx={{ width: '50px', height: '50px', position: 'relative' }}>
                                    <Image src={mastercard} alt='visa' fill style={{ objectFit: 'cover' }} />
                                </Box>
                                <Box sx={{ width: '50px', height: '50px', position: 'relative' }}>
                                    <Image src={paypal} alt='visa' fill style={{ objectFit: 'cover' }} />
                                </Box>
                                <Box sx={{ width: '50px', height: '50px', position: 'relative' }}>
                                    <Image src={amercianexp} alt='visa' fill style={{ objectFit: 'cover' }} />
                                </Box>
                                <Box sx={{ width: '50px', height: '50px', position: 'relative' }}>
                                    <Image src={webmoney} alt='visa' fill style={{ objectFit: 'cover' }} />
                                </Box>
                            </Box>
                        </Grid>
                </Grid>

              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Grid >
      <Footer/>
    </>
  )
}

export default AddToCartPage