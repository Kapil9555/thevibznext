import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import greylogo from '../assets/greylogo.webp';
import LanguageIcon from '@mui/icons-material/Language';
import CallIcon from '@mui/icons-material/Call';
import visa from '../assets/visa.png';
import mastercard from '../assets/mastercardr.png';
import paypal from '../assets/paypal.png';
import amercianexp from '../assets/amercianexp.png';
import webmoney from '../assets/webmoney.png';
import Image from 'next/image';


const Footer = () => {

    const date = new Date().getFullYear()
    // console.log(date)
    return (
        <>
            <Grid container sx={{ bgcolor: 'black', }}>
                <Grid container sx={{ display: { lg: 'flex', md: 'flex', sm: 'flex', xs: 'none' }, justifyContent: 'center', alignItems: 'center', m: '50px 0px 35px 0px ' }}>
                    <Grid item lg={5} md={5} sm={11.5} xs={11.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: ' center', borderRadius: '3px', height: '90px', bgcolor: 'white', mr: { lg: '10px', md: '10px', sm: '0px', xs: '0px' } }}>
                        <Typography sx={{ color: '#212121', fontSize: { lg: '19px', md: '17px', sm: '17px' } }}>Have a Question? </Typography>
                        <Typography sx={{ color: '#212121', fontSize: { lg: '30px', md: '27px', sm: '25px' }, fontWeight: '800', ml: '5px' }}> +91-9727277721</Typography>

                    </Grid>
                    <Grid item lg={5} md={5} sm={11.5} xs={11.5} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: ' center', borderRadius: '3px', height: '90px', bgcolor: 'white', ml: { lg: '10px', md: '10px', sm: '0px', xs: '0px' }, mt: { lg: '0px', md: '0px', sm: '20px', xs: '20px' } }}>
                        <Typography sx={{ color: '#212121', fontSize: { lg: '19px', md: '17px', sm: '17px' } }}>Need more information? </Typography>
                        <Box sx={{ width: '150px', height: '25px', bgcolor: 'black', p: '3px' }}>
                            <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '13px', fontWeight: '800', mt: '3px' }}>CONTACT US</Typography>

                        </Box>


                    </Grid>


                </Grid>

                {/* second part  */}

                <Grid container sx={{ justifyContent: 'center', height: '230px', bgcolor: 'black', }}>
                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <MailOutlineIcon sx={{ fontSize: { lg: '30px', md: '30px', sm: '25px', xs: '20px' }, color: 'white' }} />
                        <Typography sx={{ fontSize: { lg: '30px', md: '30px', sm: '23px', xs: '20px' }, color: 'white', fontWeight: '900', mt: { lg: '10px', md: '10px', sm: '5px', xs: '4px' }, ml: '12px' }}>GET IN TOUCH WITH US</Typography>

                    </Grid>

                    <Grid item lg={10} md={10} sm={10} xs={8} sx={{ display: 'flex', justifyContent: 'center', }}>
                        <Typography sx={{ color: 'white', fontSize: '15px', fontWeight: '900', textAlign: 'center' }}>“Get Ready for Summer – Shop Our Outdoor Essentials”</Typography>

                    </Grid>

                    <Grid item lg={12} md={12} sm={11} xs={11} sx={{ display: 'flex', justifyContent: 'center', }}>
                        <Box sx={{ width: '600px', height: '35px', borderRadius: '2px', border: '1px solid white', display: 'flex', justifyContent: 'space-between', }}>
                            <input placeholder='Email Address' type='email' style={{ color: '#616161', border: 'none', background: 'none', outline: 'none', marginLeft: '10px' }} />
                            <Box sx={{ width: { lg: '12%', md: '12%', sm: '12%', xs: '17%' }, bgcolor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                <Typography sx={{ fontSize: { lg: '11px', md: '11px', sm: '10px', xs: '9px' }, fontWeight: '900', textAlign: 'center' }}>SIGN UP</Typography>

                            </Box>

                        </Box>

                    </Grid>
                </Grid>

                {/* third part  */}

                <Grid container sx={{ bgcolor: 'white', }}>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column', }}>
                        <Box sx={{ width: '130px', height: '100px', position: 'relative' }}>
                            <Image src={greylogo} alt='logo' fill style={{ objectFit: 'cover' }} />

                        </Box>
                        <Box sx={{ width: { lg: '450px', md: '450px', sm: '450px', xs: '345px' }, height: '75px', mt: '50px', p: '0px 20px' }}>
                            <Typography sx={{ fontSize: '15px', textAlign: 'center' }}>join our 50,000+ happy customers and start experiencing e-commerce design as it should be. Simple.</Typography>
                        </Box>

                    </Grid>

                    <Grid container>
                        <Grid item lg={5} md={5} sm={12} xs={12} sx={{ display: 'flex', justifyContent: { lg: 'right', md: 'right', sm: 'center', xs: 'center' }, alignItems: 'center', flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column' },}}>
                            <LanguageIcon sx={{ fontSize: '14px' }} />
                            <Box sx={{ width: { lg: '400px', md: '400px', sm: '400px', xs: '330px' }, ml: '6px', mt: { lg: '0px', md: '0px', sm: '10px', xs: '10px' }, p:'0px 20px' }}>
                                <Typography sx={{ fontSize: '14px', fontWeight: '800', textAlign: { lg: 'left', md: 'left', sm: 'center', xs: 'center' } }}>
                                    OFFICE NO 307 3RD FLOOR, Jolly Plaza, Athwa Gate Cir, near ATHWA GATE, Near Athwa Arcade, Kharwawad, Nanpura, Surat, Gujarat 395001
                                </Typography>
                            </Box>


                        </Grid>
                        <Grid item lg={3.5} md={3.5} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column' }, mt: { lg: '0px', md: '0px', sm: '20px', xs: '20px' } }}>
                            <MailOutlineIcon sx={{ fontSize: '14px' }} />
                            <Box sx={{ ml: '6px', mt: { lg: '0px', md: '0px', sm: '10px', xs: '10px' } }}>
                                <Typography sx={{ fontSize: '14px', fontWeight: '800' }}>
                                    Email: info@thevibzz.com
                                </Typography>
                            </Box>

                        </Grid>
                        <Grid item lg={3.5} md={3.5} sm={12} xs={12} sx={{ display: 'flex', justifyContent: { lg: 'left', md: 'left', sm: 'center', xs: 'center' }, alignItems: 'center', flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column' }, mt: { lg: '0px', md: '0px', sm: '20px', xs: '20px' } }}>
                            <CallIcon sx={{ fontSize: '14px' }} />
                            <Box sx={{ ml: '6px', mt: { lg: '0px', md: '0px', sm: '10px', xs: '10px' } }}>
                                <Typography sx={{ fontSize: '14px', fontWeight: '800' }}>
                                    Phone: +91 9727277721
                                </Typography>
                            </Box>

                        </Grid>

                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '40px' }}>
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

                        <Grid item xs={12} sx={{ p: '20px 0px 50px 0px', borderTop: '2px solid #eeeeee', mt: '20px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column' }}>
                            <Typography sx={{ fontSize: '15px' }}>Privacy Policy</Typography>
                            <Typography sx={{ fontSize: '15px', mt: '15px' }}>Copyright © {date} thevibzz.in.</Typography>

                        </Grid>
                    </Grid>



                </Grid>


            </Grid>
        </>
    )
}

export default Footer