import { Box, Grid, Step, StepLabel, Stepper, Typography } from '@mui/material';
import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Header from '@/components/Header';

const steps = [
    'SHOPPING CART',
    'CHECKOUT',
    'ORDER STATUS',
];

const PlaceOrderPage = () => {
    return (
        <>
        <Header/>
            <Grid container>
                <Grid item xs={12} sx={{ bgcolor: '#fafafa', display: {lg:'flex', md:'flex', sm:'none', xs:'none'}, justifyContent: 'center', alignItems: 'center', p: '10px' }}>
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
                <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: {lg:'30px', md:'30px', sm:'50px', xs:'60px'}, pb:'80px' }}>
                    <Grid item lg={7.5} md={7.5} sm={12} xs={12} sx={{p:'0px 13px'}}>
                        <Grid container>
                            <Grid item lg={12} md={12} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p:'0px 20px' }}>
                                <Typography sx={{ fontSize: '20px', fontWeight: '600', fontFamily:"Segoe UI Symbol", textAlign:'center' }}>THANK YOU. YOUR ORDER HAS BEEN RECEIVED.</Typography>

                            </Grid>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '30px' }}>
                                <Box sx={{ width: '300px', height: '150px', border: '1px dotted lightgrey', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <Typography sx={{ fontSize: '15px' }}>Order number :<span style={{ color: 'grey' }}>7125</span></Typography>
                                    <Typography sx={{ fontSize: '15px', mt: '7px' }}>Date :<span style={{ color: 'grey' }}>October 11, 2023</span></Typography>
                                    <Typography sx={{ fontSize: '15px', mt: '7px' }}>Total :<span style={{ color: 'grey' }}> ₹4,245.0</span></Typography>
                                    <Typography sx={{ fontSize: '15px', mt: '7px' }}>Payment method :<span style={{ color: 'grey' }}> Cash on deliver</span></Typography>

                                </Box>

                            </Grid>
                            <Grid item xs={12} sx={{  mt: '30px', display: 'flex', }}>
                                <Box sx={{ width: '0.5%', height: '40px', bgcolor: '#0d47a1',p:'5px 0px' }}>

                                </Box>
                                <Box sx={{ width: '99.5%', bgcolor: '#1565c0', height: '40px', display: 'flex', alignItems: 'center',p:'5px 0px' }}>
                                    <InfoOutlinedIcon sx={{ fontSize: '20px', color: 'white', ml: '13px' }} />
                                    <Typography sx={{ fontSize: '15px', color: 'white', ml: '10px' }}>Pay with cash upon delivery.</Typography>

                                </Box>

                            </Grid>
                        </Grid>
                        <Grid container sx={{ mt: '17px', borderBottom: '1px solid #e0e0e0', }} >
                            <Grid item xs={12}>
                                <Typography sx={{ fontSize: '20px', fontWeight: '700' }}>Order details</Typography>
                            </Grid>
                            <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mt: '19px' }}>
                                <Grid item xs={8}>
                                    <Typography sx={{ fontSize: {lg:'15px', md:'15px', sm:'13px', xs:'13px'}, color: '#757575', }}>PRODUCT  </Typography>



                                </Grid>
                                <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'flex-start' }}>
                                    <Typography sx={{ color: '#757575', fontSize: {lg:'15px', md:'15px', sm:'13px', xs:'13px'} }} >Total</Typography>

                                </Grid>

                            </Grid>
                        </Grid>

                        <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mt: '10px', borderBottom: '2px solid  #e0e0e0', pt: '10px', pb: '30px' }}>
                            <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ fontSize: '14px' }}>346 ABSTARCT OVERSIZED T SHIRT MEN× 2  </Typography>
                                


                            </Grid>
                            <Grid item xs={2.5} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'flex-start' }}>
                                <Typography sx={{ color: '#757575', fontSize: '13px' }} >₹4,245.00</Typography>

                            </Grid>
                            <Grid item xs={12}>

                                <Typography sx={{ color: '#757575', fontSize: '13px', mt: '5px' }}>Size: L</Typography>


                            </Grid>
                        </Grid>
                        <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mt: '19px' }}>
                            <Grid item xs={8}>
                                <Typography sx={{ fontSize: '15px', color: '#757575', }}>Subtotal:  </Typography>


                            </Grid>
                            <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'flex-start' }}>
                                <Typography sx={{ color: '#757575', fontSize: '13px' }} >₹4,245.00</Typography>

                            </Grid>

                        </Grid>
                        <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mt: '19px' }}>
                            <Grid item xs={6}>
                                <Typography sx={{ fontSize: '15px', color: '#757575', }}>Shipping:  </Typography>


                            </Grid>
                            <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'flex-start' }}>
                                <Typography sx={{ color: '#757575', fontSize: '15px' }} >Free shipping</Typography>

                            </Grid>

                        </Grid>
                        <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mt: '19px' }}>
                            <Grid item xs={6}>
                                <Typography sx={{ fontSize: '15px', color: '#757575', }}>Payment method:  </Typography>


                            </Grid>
                            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'flex-start' }}>
                                <Typography sx={{ color: '#757575', fontSize: '15px' }} >Cash on delivery</Typography>

                            </Grid>

                        </Grid>
                        <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mt: '19px' }}>
                            <Grid item xs={8}>
                                <Typography sx={{ fontSize: '15px', color: '#757575', }}>Total:  </Typography>


                            </Grid>
                            <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'flex-start' }}>
                                <Typography sx={{ color: '#757575', fontSize: '15px' }} >₹4,245.00</Typography>

                            </Grid>

                        </Grid>
                        <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mt: '19px' }}>
                            <Grid item xs={6}>
                                <Typography sx={{ fontSize: '15px', color: '#757575', }}>NOTE: </Typography>


                            </Grid>
                            <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'flex-start' }}>
                                <Typography sx={{ color: '#757575', fontSize: '15px' }} >dsafsdgsdg</Typography>

                            </Grid>

                        </Grid>


                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}

export default PlaceOrderPage