'use client'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, Checkbox, Container, FormControlLabel, FormGroup, Grid, IconButton, OutlinedInput, Typography } from '@mui/material'
import { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import { GRAY_TYPO, THEME_COLOR } from '../Styles/ConstantStyle'
import '../Styles/FontStyle.css'
import FollowUS from '../components/FollowUS'
import Footer from '../components/Footer'
import Header from '../components/Header'


const LoginSignup = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show)
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <Header />
            <Container maxWidth={'xl'} disableGutters sx={{}}>

                <Grid container sx={{ mt: "171px" }}>
                    <Grid item xs={12}>
                        <Box sx={{ height: "60px", bgcolor: "#eeeeee" }}>

                        </Box>
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", height: { lg: "400px", md: "550px", sm: "600px", xs: "650px" } }}>
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: "15px" }}>
                            <Box sx={{ width: { lg: "80%", md: "90%", sm: "90%", xs: "100%" } }}>
                                <Grid container sx={{  height: "100%", justifyContent: "space-between" }}>
                                    <Grid item xs={12} sm={12} md={5.8} sx={{ height: "100%",  display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <Box sx={{ width: "85%", height: "80%" }}>
                                            <Typography sx={{ mt: "5px", textTransform: "uppercase", letterSpacing: "-0.5px", fontSize: "20px", fontWeight: "900" }}>
                                                Login
                                            </Typography>

                                            <Typography sx={{ color: GRAY_TYPO, fontSize: "14px", mt: "15px" }}>
                                                Username or email address *
                                            </Typography>
                                            <OutlinedInput fullWidth sx={{ height: "40px", borderRadius: "0px", mt: "7px" }} />
                                            <Typography sx={{ color: GRAY_TYPO, fontSize: "14px", mt: "15px" }}>
                                                Password *
                                            </Typography>
                                           
                                            <OutlinedInput
                                                id="outlined-adornment-password"
                                                type='password'
                                            

                                                sx={{ height: "40px", borderRadius: "0px", mt: "7px" }}
                                                fullWidth
                                            />
                                            <Box sx={{ mt: "15px", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                                                <FormGroup>

                                                    <FormControlLabel required control={<Checkbox size='small' sx={{}} />} label={<Typography sx={{ color: GRAY_TYPO, fontSize: "14px", mt: "15px", mt: "0px" }}>
                                                        Remember me
                                                    </Typography>} />

                                                </FormGroup>
                                                <Typography> <a href='#' style={{ color: "black" }}>Lost Your Password?</a></Typography>
                                            </Box>
                                            <Box>
                                                <Button sx={{ bgcolor: THEME_COLOR, borderRadius: "0px", mt: "15px", "&:hover": { bgcolor: THEME_COLOR }, color: "white" }} fullWidth> Login</Button>
                                            </Box>
                                        </Box>
                                    </Grid>


                                    <Grid item xs={12} sm={12} md={5.8} sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <Box sx={{ width: "85%", height: "80%" }}>
                                            <Typography sx={{ mt: "5px", textTransform: "uppercase", letterSpacing: "-0.5px", fontSize: "20px", fontWeight: "900" }}>
                                                REGISTER
                                            </Typography>

                                            <Typography sx={{ color: GRAY_TYPO, fontSize: "14px", mt: "15px" }}>
                                                Email address *
                                            </Typography>
                                            <OutlinedInput fullWidth sx={{ height: "40px", borderRadius: "0px", mt: "7px" }} />

                                            <Typography sx={{ color: GRAY_TYPO, fontSize: "14px", mt: "20px" }}>
                                                A link to set a new password will be sent to your email address.
                                            </Typography>
                                            <Typography sx={{ color: GRAY_TYPO, fontSize: "16px", mt: "20px", lineHeight: "24px" }}>
                                                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our<a href='#' style={{ color: "black" }}>   privacy policy</a>
                                            </Typography>


                                            <Box>
                                                <Button sx={{ bgcolor: THEME_COLOR, borderRadius: "0px", mt: "17px", "&:hover": { bgcolor: THEME_COLOR }, color: "white" }} fullWidth> Register</Button>
                                            </Box>
                                        </Box>
                                    </Grid>

                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>


                </Grid>



                <FollowUS />
            </Container >
            <Footer />


        </>
    )
}

export default LoginSignup