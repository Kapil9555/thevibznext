'use client'
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined'
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { MOBILE_NUMBER21, MOBILE_NUMBER26 } from '../Styles/ConstantStyle'
import '../Styles/FontStyle.css'
import contactBg from '../assets/Rectangle-21.jpg'
import FollowUS from '../components/FollowUS'
import Footer from '../components/Footer'
import Header from '../components/Header'


const ContactUs = () => {


    return (
        <>
            <Header />
            <Container maxWidth disableGutters sx={{ }}>

                <Grid container sx={{ mt: "171px" }}>
                    <Grid item xs={12}>
                        <Box sx={{ height: "60px", bgcolor: "#eeeeee" }}>

                        </Box>
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center",bgcolor:"#bcaaa4",backgroundBlendMode:"multiply", height: {lg:"500px",md:"550px",sm:"600px",xs:"650px"}, backgroundImage: `url(${contactBg.src})`, backgroundSize: "cover",backgroundPosition:"center", backgroundRepeat: "no-repeat" }}>
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: "15px" }}>
                        <Box sx={{ width: { lg: "80%", md: "90%", sm: "90%", xs: "100%" } }}>
                                <Grid container sx={{mt:"40px"}}>
                                    <Grid item xs={12}>
                                        <Typography align='center' className='teko-text' sx={{fontSize:"42px",color:"white"}}>
                                          CUSTOMER CARE
                                        </Typography>
                                        <Typography align='center' sx={{color:"whitesmoke",fontSize:"15px",fontWeight:"500"}}>Get in touch via email at <span style={{fontSize:"16px",fontWeight:"900"}}>info@thevibzz.com</span> Or alternatively call us on:</Typography>
                                    </Grid>
                                    <Grid item xs={12} sx={{display:"flex",justifyContent:"center",alignItems:"center",mt:"40px",flexDirection:"column"}}>
                                    <Typography className='teko-text' align='center' sx={{width:"80%",letterSpacing:"-1",textTransform:"uppercase",fontSize:"16px",color:"white"}}>
                                    OFFICE NO 307 3RD FLOOR, Jolly Plaza, Athwa Gate Cir, near ATHWA GATE, Near Athwa Arcade, Kharwawad, Nanpura, Surat, Gujarat 395001
                                        </Typography>
                                        <Typography className='teko-text' sx={{fontSize:"16px",color:"white",mt:"15px"}}>
                                            PHONE
                                        </Typography>
                                        <Typography className='teko-text' sx={{fontSize:"16px",color:"white",mt:"5px"}}>
                                            {MOBILE_NUMBER21},  {MOBILE_NUMBER26}
                                        </Typography>
                                    </Grid>
                                    <Grid container sx={{mt:"70px"}}>
                                        <Grid item lg={3} md={3} sm={3} xs={12} sx={{p:"10px"}}>
                                            <Button className='teko-text' variant='contained' sx={{"&:hover":{bgcolor:"white"},fontSize:"14px",color:"black",bgcolor:"white"}} fullWidth>
                                                <LocalShippingOutlinedIcon sx={{fontSize:"17px",mb:"2px",mr:"3px"}}/> delivery
                                            </Button>
                                        </Grid>
                                        <Grid item lg={3} md={3} sm={3} xs={12} sx={{p:"10px"}}>
                                            <Button className='teko-text' variant='contained' sx={{"&:hover":{bgcolor:"white"},fontSize:"14px",color:"black",bgcolor:"white"}} fullWidth>
                                                <CheckroomOutlinedIcon sx={{fontSize:"17px",mb:"3px",mr:"3px"}}/> track order
                                            </Button>
                                        </Grid>
                                        <Grid item lg={3} md={3} sm={3} xs={12} sx={{p:"10px"}}>
                                            <Button className='teko-text' variant='contained' sx={{"&:hover":{bgcolor:"white"},fontSize:"14px",color:"black",bgcolor:"white"}} fullWidth>
                                                <ConfirmationNumberOutlinedIcon sx={{fontSize:"17px",mb:"1px",mr:"3px"}}/> payment
                                            </Button>
                                        </Grid>
                                        <Grid item lg={3} md={3} sm={3} xs={12} sx={{p:"10px"}}>
                                            <Button className='teko-text' variant='contained' sx={{"&:hover":{bgcolor:"white"},fontSize:"14px",color:"black",bgcolor:"white"}} fullWidth>
                                                <Person2OutlinedIcon sx={{fontSize:"17px",mb:"1px",mr:"3px"}}/> my account
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: "40px" }}>
                        <Box sx={{ width: { lg: "80%", md: "90%", sm: "90%", xs: "100%" } }}>

                            <Typography sx={{ borderTop: "1px solid #bdbdbd", pt: "8px", fontSize: "17px", letterSpacing: "-1px", fontWeight: "900",  width: "fit-content" }}>
                                SHARE THIS:
                            </Typography>
                            <Button variant='outlined' sx={{ mt: "10px", mr: "15px", border: "1px solid #bdbdbd", color: "black", "&:hover": { border: "1px solid #bdbdbd" } }}>
                                <TwitterIcon sx={{ mr: "5px" }} /> Twitter
                            </Button>
                            <Button variant='outlined' sx={{ mt: "10px", border: "1px solid #bdbdbd", color: "black", "&:hover": { border: "1px solid #bdbdbd" } }}>
                                <FacebookOutlinedIcon sx={{ mr: "5px" }} /> Facebook
                            </Button>
                        </Box>
                    </Grid>

                </Grid>



                <FollowUS />
            </Container >
            <Footer />


        </>
    )
}

export default ContactUs