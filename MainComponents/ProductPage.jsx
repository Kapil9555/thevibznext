'use client'
import { Box, Button, Checkbox, Container, FormControlLabel, FormGroup, Grid, OutlinedInput, Paper, Rating, TextareaAutosize, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react';
import {GRAY_TYPO, SALE_COLOR, THEME_COLOR } from '../Styles/ConstantStyle';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InstagramIcon from '@mui/icons-material/Instagram';
import StraightenIcon from '@mui/icons-material/Straighten';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../Styles/FontStyle.css';
import { globalContext } from '../Global/VibzContext';
import { useParams, useRouter } from 'next/navigation';
import MyCartDrawer from '@/components/MyCartDrawer';




const ProductPage = () => {
    const router=useRouter()
    const param=useParams()
    const {state}=useContext(globalContext)
    const [couplesData, setCouplesData] = useState([])
    const [imageShow,setImageShow]=useState(0)
    const [cardShow, setCardShow] = useState("")
    const [productImg, setProductImg] = useState([]);
    const [cartOpen,setCartOpen]=useState(false)
  


    useEffect(() => {

        
            const couplesData = state.mainState.filter((ele) => ele.cat_Id == 4);
            const filtered = state.mainState.filter((ele) => ele._id == param.productpage);
            
            //  console.log(filtered)
            setProductImg(filtered[0].magnifyImg);
            setCouplesData(couplesData);
        
      
     
      }, []);


const handlePageChange=(id)=>{
    router.push(`/userproductpage/${id}`)
}
const handleCartHandle=()=>{
    setCartOpen(true)
}
    


    return (
        <>
            
            <Container maxWidth={'xl'} disableGutters sx={{overflow:"hidden"}}>
            <Header/>
                <Grid container sx={{ mt: "175px",pl:"10px",pr:"10px",overflow:"hidden" }}>
                    <Grid item xs={12}>
                        <Box sx={{ height: "60px", bgcolor: "#eeeeee" }}>

                        </Box>
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: "15px" }}>
                        <Box sx={{ width: { lg: "75%", md: "90%", sm: "90%", xs: "100%" } }}>
                            <Grid container >

                                {/* LEFT SIDE PHOTO PART */}
                                <Grid item lg={8} md={8} sm={12} xs={12} sx={{ height: "100%", }}>
                                    <Grid container sx={{justifyContent:"space-between",display:{lg:"flex",md:"none",sm:"none",xs:"none"},alignItems:"center" }}>
                                    
                                    {
                                        productImg.length<1?<Grid item xs={12} sx={{height:"480px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                             <Typography>Loading.....</Typography>
                                              </Grid>
                                        :
                                         productImg.map((ele,index)=>{
                                            return(
                                                <Grid key={index} item xs={5.9} sx={{height:"480px",mt:"13px",backgroundImage:`url(${ele.img.src})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}}>
                                                  
                                                </Grid>
                                            )
                                        })
                                    }
                                    

                                    </Grid>
                                    <Grid container sx={{display:{lg:"none",md:"block",sm:"block",xs:"block"}}}>
                                        <Grid item xs={12}   sx={{height:{lg:"800px",md:"700px",sm:"600px",xs:"450px"}}}>
                                        {

                                           productImg.length<1?
                                             <Box sx={{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                             <Typography>Loading.....</Typography>
                                              </Box>
                                              :
                                              <Box sx={{height:"100%",width:"100%",backgroundImage:`url(${productImg[imageShow].img.src})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}}> 
                                             </Box>
                                        }
                                           
                                        </Grid>
                                        <Grid container sx={{justifyContent:"space-between",flexWrap:"nowrap",overflow:"scroll"}}>
                                        {
                                           productImg.map((ele,index)=>{
                                          
                                            return(
                                                <Grid key={index} item xs={3} sx={{height:{lg:"250px",md:"220px",sm:"200px",xs:"130px"},mt:"13px"}} onClick={()=>{setImageShow(index)}}>
                                                   <Box sx={{height:"100%",width:"95%",backgroundImage:`url(${ele.img.src})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",opacity:imageShow == index?"":"0.5"}} >
                                                     
                                                   </Box>
                                                  
                                                </Grid>
                                            )
                                        })
                                        }
                                        </Grid>
                                    </Grid>
                                    <Box sx={{p:"15px"}}>
                                        <Box sx={{ mt: "10px" }}>
                                            <Typography sx={{ fontSize: "16px", color: "#54595F", fontWeight: "900" }}>
                                                MATERIAL
                                            </Typography>
                                            <Typography sx={{ color: GRAY_TYPO, fontSize: "15px", mt: "3px" }}>
                                                Our manufacturing staff works with cleanliness for your health, safety and quality standard for our products so our garments are safe and healthy. We are using polycotton fabric for our garments. Your safety is our concern.
                                            </Typography>
                                        </Box>

                                        <Box sx={{ mt: "10px" }}>
                                            <Typography sx={{ fontSize: "16px", color: "#54595F", fontWeight: "900" }}>
                                                BENEFITS TO ENVIRONMENT
                                            </Typography>
                                            <Typography sx={{ color: GRAY_TYPO, fontSize: "15px", mt: "3px" }}>
                                                It reduces the power and water consumption and Recycled polycotton is almost the same as virgin polycotton in terms of quality, but its production requires 59 percent less energy compared to virgin polycotton so it’s really beneficial to the environment.
                                            </Typography>
                                        </Box>

                                        <Box sx={{ mt: "10px" }}>
                                            <Typography sx={{ fontSize: "16px", color: "#54595F", fontWeight: "900" }}>
                                                FABRIC DETAILS
                                            </Typography>
                                            <Typography sx={{ color: GRAY_TYPO, fontSize: "15px", mt: "3px" }}>
                                                We are using polycotton material which is recycled from plastic such as plastic bottles. We use PET plastic for our material. The PET plastic is taken to the waste separation then cleaned, shredded and recycled into a new recycled polycotton fiber. It reduces the consumption and gives new life to plastic waste. This polycotton is strong and long lasting.
                                            </Typography>
                                        </Box>

                                        <Box sx={{ mt: "10px" }}>
                                            <Typography sx={{ fontSize: "16px", color: "#54595F", fontWeight: "900" }}>
                                                Care
                                            </Typography>
                                            <Typography sx={{ color: GRAY_TYPO, fontSize: "15px", mt: "3px" }}>
                                                – Do not bleach <br />
                                                – Do not tumble dry <br />
                                                – Gentle dry clean <br />
                                                – Do not rub
                                            </Typography>
                                        </Box>

                                        <Box sx={{ mt: "10px" }}>
                                            <Typography sx={{ fontSize: "16px", color: "#54595F", fontWeight: "900" }}>
                                                DESIGNS
                                            </Typography>
                                            <Typography sx={{ color: GRAY_TYPO, fontSize: "15px", mt: "3px" }}>
                                                Our artist are making unique designs of shirts with Latest prints like boho print, animal print, cartoon print, stripes print and many more.
                                            </Typography>
                                        </Box>

                                        <Box sx={{ mt: "10px" }}>
                                            <Typography sx={{ fontSize: "16px", color: "#54595F", fontWeight: "900" }}>
                                                PURPOSE OR OCCASION TO WEAR
                                            </Typography>
                                            <Typography sx={{ color: GRAY_TYPO, fontSize: "15px", mt: "3px" }}>
                                                -Casual day out <br />
                                                -Weekend look <br />
                                                -Summer trends <br />
                                                -Best for holidays
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>




                                {/* RIGHT SIDE DETAILS */}
                                <Grid item lg={4} md={4}  sm={12} xs={12}>
                                    <Box sx={{ m: "15px" }}>
                                        <Typography className='teko-text' sx={{ fontSize: "25px" }}>
                                            4 THOUGHTS
                                        </Typography>
                                        <Typography sx={{ fontSize: "19.5px", mt: "7px", color: "red" }}>
                                            <span style={{ color: GRAY_TYPO, marginRight: "5px" }}><s>1,799</s></span>699
                                        </Typography>
                                        <Typography sx={{ fontSize: "13px", display: "flex", alignItems: "center", color: "#222222", mt: "10px" }}>
                                            <StraightenIcon sx={{ fontSize: "16px", mr: "5px" }} />Sizing guide
                                        </Typography>
                                        <Typography sx={{ color: "#555555", fontSize: "15px", mt: "10px" }}>
                                            size
                                        </Typography>
                                        <Box>
                                            <select style={{ marginTop: "5px", color: GRAY_TYPO, padding: "10px", fontWeight: "500", fontSize: "15px", background: "none", outline: "none", border: "1px solid #eeeeee", width: "200px" }}>
                                                <option style={{ color: "black", marginTop: "5px", backgroundColor: "#6EC1E4", padding: "10px" }}>Choose an option</option>
                                                {/* <option style={{ color: "black", mt: "5px",backgroundColor:"#6EC1E4" }} >Choose an option</option> */}
                                                <option style={{ color: "black", marginTop: "5px", color: GRAY_TYPO, margin: "7px" }}>S</option>
                                                <option style={{ color: "black", marginTop: "5px", color: GRAY_TYPO, margin: "7px" }}>M</option>
                                                <option style={{ color: "black", marginTop: "5px", color: GRAY_TYPO, margin: "7px" }}>L</option>
                                                <option style={{ color: "black", marginTop: "5px", color: GRAY_TYPO, margin: "7px" }}>XL</option>
                                                <option style={{ color: "black", marginTop: "5px", color: GRAY_TYPO, margin: "7px" }}>XXL</option>

                                            </select>
                                        </Box>
                                        <Grid container sx={{ mt: "10px" }} spacing={2}>
                                            <Grid item lg={3} md={3} sm={3} xs={3} sx={{}}>
                                                <Box style={{ border: `1px solid #e0e0e0`, height: "fit-content", width: "fit-content", display: "flex" }}>
                                                    <Box sx={{ height: "39px", width: "25px", fontSize: "14px", color: GRAY_TYPO, display: "flex", justifyContent: "center", alignItems: "center" }}><RemoveOutlinedIcon sx={{fontSize:"16px"}}/></Box>
                                                    <Box sx={{ height: "39px", width: "35px", fontSize: "14px", borderLeft: "1px solid #e0e0e0", borderRight: "1px solid #e0e0e0", display: "flex", justifyContent: "center", alignItems: "center" }}>1</Box>
                                                    <Box sx={{ height: "39px", width: "25px", fontSize: "14px", color: GRAY_TYPO, display: "flex", justifyContent: "center", alignItems: "center" }}><AddOutlinedIcon sx={{fontSize:"16px"}}/></Box>

                                                </Box>

                                            </Grid>
                                            <Grid item lg={9} md={9} sm={9} xs={9} sx={{ display: "flex", justifyContent: "right" }}>
                                                <Button sx={{ width: "96%", borderRadius: "0PX", height: "40px", color: "white", bgcolor: GRAY_TYPO, "&:hover": { bgcolor: GRAY_TYPO } }} onClick={()=>{handleCartHandle()}}> <ShoppingBagOutlinedIcon sx={{ mr: "5px" }} />Add to cart </Button>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Box>
                                                    <Button fullWidth sx={{ borderRadius: "0PX", height: "40px", color: "white", bgcolor: GRAY_TYPO, "&:hover": { bgcolor: GRAY_TYPO } }} onClick={()=>{router.push('/buynow/buynowpage')}}> <ShoppingBagOutlinedIcon sx={{ mr: "5px" }} />Buy now </Button>
                                                </Box>
                                            </Grid>

                                        </Grid>

                                        <Box sx={{ mt: "30px" }}>
                                            <Typography sx={{ fontSize: "15px", display: "flex", alignItems: "center", color: "#222222", mt: "10px" }}>
                                                <FavoriteBorderIcon sx={{ fontSize: "23px", mr: "5px" }} />Add to wishlist
                                            </Typography>
                                            <Typography sx={{ fontSize: "15px", display: "flex", alignItems: "center", color: "#222222", mt: "10px" }}>
                                                Categories:<span style={{ fontSize: "15px", color: GRAY_TYPO }}>Man's Half Sleeve, Men's/Women's</span>
                                            </Typography>
                                        </Box>
                                        <Box sx={{ mt: "15px", border: "1px solid black", p: "10px" }}>
                                            <Typography sx={{ fontSize: "15px", color: "red", fontWeight: "800" }}>
                                                1 More Offer Available
                                            </Typography>
                                            <Typography sx={{ color: GRAY_TYPO, fontSize: "15px", mt: "5px" }}>
                                                <span style={{ backgroundColor: "#039910", padding: "2px 4px", fontWeight: "700", color: "white" }}>
                                                    EXTRA 5% OFF
                                                </span>   on
                                                <span style={{ fontWeight: "700", fontSize: "14px", margin: "3px" }}>PREPAID ORDERS </span>
                                                by using <br /> Debit/Credit Card/UPI
                                            </Typography>
                                        </Box>



                                        <Box sx={{ mt: "15px", border: "1px solid black", p: "10px" }}>
                                            <Typography sx={{ fontSize: "15px", color: "red", fontWeight: "800" }}>
                                                Please Read This
                                            </Typography>
                                            <Typography sx={{ color: GRAY_TYPO, fontSize: "15px", mt: "5px" }}>
                                                Please Check Our Size Chart And Select Right Size Accordingly Our Size Chart This Product is Eligible For Exchange Only If The Size is Not Received As Per Order Additional Exchange Charge That Buyer Has To Pay (Charge :- 120/-Rs. Shipping Charge Of Exchange Product) (And No Any Exchange On Buy 1 Get 1 Free Order
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography className="newarrive" sx={{ mt: "3px", pb: "15px", borderBottom: `1.5px solid #e0e0e0`, letterSpacing: "-0.5px", fontSize: "12px", fontWeight: "800" }}>
                                                REVIEWS
                                            </Typography>
                                            <Typography sx={{ color: GRAY_TYPO, fontSize: "15px", mt: "10px" }}>
                                                There are no reviews yet.
                                            </Typography>

                                            <Typography className="newarrive" sx={{ mt: "20px", pb: "15px", borderBottom: `1.5px solid #e0e0e0`, letterSpacing: "-0.5px", fontSize: "12px", fontWeight: "800" }}>
                                                BE THE FIRST TO REVIEW “4 THOUGHT”
                                            </Typography>

                                            <Typography sx={{ color: GRAY_TYPO, fontSize: "15px", mt: "15px" }}>
                                                Your email address will not be published. Required fields are marked
                                            </Typography>
                                        </Box>

                                        <Box>
                                            <Typography sx={{ color: GRAY_TYPO, fontSize: "15px", mt: "15px" }}>
                                                Your rating <span style={{ color: "red" }}>*</span>
                                            </Typography>
                                            <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", mt: "5px" }}>
                                                <Typography>
                                                    <Rating name="customized-10" size="small" defaultValue={1} max={1} />
                                                </Typography>
                                                <Typography>
                                                    <Rating name="customized-10" size="small" defaultValue={0} max={2} />
                                                </Typography>
                                                <Typography>
                                                    <Rating name="customized-10" size="small" defaultValue={0} max={3} />
                                                </Typography>
                                                <Typography>
                                                    <Rating name="customized-10" size="small" defaultValue={0} max={4} />
                                                </Typography>
                                                <Typography>
                                                    <Rating name="customized-10" size="small" defaultValue={0} max={5} />
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography sx={{ color: GRAY_TYPO, fontSize: "15px", mt: "15px" }}>
                                                    Your reviews <span style={{ color: "red" }}>*</span>
                                                </Typography>
                                                <TextareaAutosize
                                                    style={{ width: '100%', border: "1px solid #eeeeee`", outline: "none", background: "none" }} 
                                                    aria-label="textarea"
                                                    minRows={15}
                                                />
                                            </Box>

                                            {/* build error */}
                                            <Box sx={{ mt: "15px" }}>
                                                <Typography sx={{ color: GRAY_TYPO, fontSize: "15px", }}>
                                                    Name <span style={{ color: "red" }}>*</span>
                                                </Typography>
                                                <OutlinedInput
                                                    sx={{
                                                        width: '100%', borderRadius: "0px", height: "40px", border: "1px solid #eeeeee`", outline: "none", background: "none", '&:focus': {
                                                            border: 'none', boxShadow: 'none',
                                                        },
                                                    }}  
                                                />
                                            </Box>

                                            <Box sx={{ mt: "15px" }}>
                                                <Typography sx={{ color: GRAY_TYPO, fontSize: "15px", }}>
                                                    Email <span style={{ color: "red" }}>*</span>
                                                </Typography>
                                                <OutlinedInput sx={{ width: '100%', height: "40px", borderRadius: "0px", border: "1px solid #eeeeee`", outline: "none", background: "none" }} />
                                            </Box>
                                            <Box>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox />} label={<Typography sx={{ color: GRAY_TYPO, fontSize: "15px", mt: "15px" }}>
                                                        Save my name, email, and website in this browser for the next time I comment.
                                                    </Typography>} />
                                                </FormGroup>
                                                <Button sx={{ borderRadius: "0PX", color: "white", fontSize: "12px", bgcolor: THEME_COLOR, "&:hover": { bgcolor: THEME_COLOR }, mt: "20px", p: "5px 15px" }}> Submit </Button>
                                            </Box>


                                        </Box>
                                    </Box>

                                </Grid>




                                {/* crousel part scroll */}

                                <Grid item xs={12} sx={{ mt: "30px" }}>
                                    <Box >
                                        <Typography align='center' className='teko-text' sx={{ fontSize: "25px" }}>
                                            RELATED PRODUCTS
                                        </Typography>
                                        
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>

                                        <Box className="newarrive" sx={{ display: "flex", overflow: "scroll" }}>
                                            {
                                                couplesData.map((ele,index) => {
                                                    return (
                                                        <Box key={index} sx={{ m: { lg: "20px", md: "15px", sm: "12px", xs: "9px" }, cursor: "pointer" }} onMouseEnter={() => { setCardShow(ele._id) }} onMouseLeave={()=>{setCardShow("")}} onClick={()=>{handlePageChange(ele._id)}}>
                                                            <Paper sx={{  pb: "10px", width: { lg: "245px", md: "200px", sm: "220px",xs:"190px" } }}>

                                                                <Box sx={{ height: { lg: "350px", md: "320px", sm: "270px", xs: "230px" }, backgroundImage: `url(${ele.magnifyImg[0].img.src})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", width: "100%", position: "relative" }}>
                                                                    <span style={{ backgroundColor: SALE_COLOR, top: "10px", left: "10px", padding: "5px 8px", position: "absolute" }}>
                                                                        <Typography sx={{ color: "white", fontSize: "12px" }}>SALE</Typography>
                                                                    </span>
                                                                    {
                                                                        cardShow == ele._id && (<Box sx={{ height: "90%", width: "100%", position: "absolute", zIndex: 1 }} >
                                                                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "90%", m: "10px" }}>
                                                                                <Box>
                                                                                    <ArrowBackIosIcon sx={{ fontSize: "20px" }} />
                                                                                </Box>
                                                                                <Box>
                                                                                    <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                                                                                </Box>
                                                                            </Box>
                                                                            <Box sx={{ display: "flex", justifyContent: "center", mt: "10px", m: "15px" }}>
                                                                                <Button variant='contained' sx={{ "&:hover": { bgcolor: THEME_COLOR }, fontSize: { xs: "10px" }, bgcolor: THEME_COLOR, width: { lg: "100%", md: "90%", sm: "80%", xs: "70%" } }} >QUICK VIEW</Button>
                                                                            </Box>
                                                                        </Box>)

                                                                    }
                                                                </Box>
                                                                <Box>
                                                                    <Typography align='center' sx={{ mt: "10px", textTransform: "uppercase", letterSpacing: "-0.5px", fontSize: { lg: "12px", md: "10px", sm: "9px", xs: "9px" }, fontWeight: "900"}}>
                                                                        <b>{ele.productName}</b>

                                                                    </Typography>
                                                                    <Typography align='center' sx={{ fontSize: "14px", mt: "7px" }}>
                                                                        <span style={{ color: GRAY_TYPO, marginRight: "5px" }}><s>{ele.orgPrice}</s></span>{ele.discPrice}
                                                                    </Typography>
                                                                </Box>
                                                                <Box sx={{ display: "flex", justifyContent: "center", mt: "7px", p: "0px 8px" }}>
                                                                    <Box style={{ border: `1px solid #e0e0e0`, display: "flex" }}>
                                                                        <Box sx={{ height: "30px", width: "40px", fontSize: "14px", color: GRAY_TYPO, display: "flex", justifyContent: "center", alignItems: "center" }}><RemoveOutlinedIcon /></Box>
                                                                        <Box sx={{ height: "30px", width: "40px", fontSize: "14px", borderLeft: "1px solid #e0e0e0", borderRight: "1px solid #e0e0e0", display: "flex", justifyContent: "center", alignItems: "center" }}>1</Box>
                                                                        <Box sx={{ height: "30px", width: "40px", ontSize: "14px", color: GRAY_TYPO, display: "flex", justifyContent: "center", alignItems: "center" }}><AddOutlinedIcon /></Box>
                                                                    </Box>
                                                                    <Box sx={{ bgcolor: "#e0e0e0", height: "30px", width: "40px", ml: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}><ShoppingBagOutlinedIcon sx={{ fontWeight: "100", fontSize: "18px" }} /></Box>
                                                                </Box>
                                                            </Paper>
                                                        </Box>
                                                    )
                                                })
                                            }

                                        </Box>
                                    </Box>
                                </Grid>


                            </Grid>


                        </Box>
                    </Grid>


                </Grid>

                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "150px" }}>
                    <Button sx={{ bgcolor: THEME_COLOR, fontSize: "15px", fontWeight: "900", p: "8px 15px", "&:hover": { bgcolor: THEME_COLOR }, color: "white" }}>
                        <InstagramIcon sx={{ mr: "7px" }} /> FOLLOW US ON INSTAGRAM
                    </Button>
                </Box>
                <MyCartDrawer cartOpen={cartOpen} setCartOpen={setCartOpen}/>
                <Footer />
            </Container>
           


        </>
    )
}

export default ProductPage