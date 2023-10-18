'use client'
import { globalContext } from '@/Global/VibzContext';
import Footer from '@/components/Footer';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Box, Button, Container, Grid, Paper, Skeleton, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { FONT_SIZE_HEADING1, FONT_SIZE_HEADING2, FONT_SIZE_HEADING3, GRAY_TYPO, GREY_TITLE, SALE_COLOR, THEME_COLOR } from '../Styles/ConstantStyle';
import b6 from '../assets/b1-1.png';
import b3Image from '../assets/b3-scaled.png';
import b5 from '../assets/b5-scaled.png';
import CrouselComp from '../components/CrouselComp';
import './HomePage.css';
import Header from '@/components/Header';
import QuickViewDrawer from '@/components/QuickViewDrawer';
import { CleaningServices } from '@mui/icons-material';







const HomePage = () => {
    const router=useRouter()
    const {state,dispatch}=useContext(globalContext)
    const [allCat,setAllCat]=useState([])
    const [cardShow, setCardShow] = useState("")
    const [quickView,setQuickView]=useState(false)
    const [quickViewData,setQuickViewData]=useState([])
    
    const skeletonArr=new Array(4).fill(1)

//   console.log(state.mainState)
 
   
    useEffect(()=>{
        const mensHalfSleevesData=state.mainState.filter((ele)=>{return(ele.catName=="Men's Half Sleeve")})
        const couplesCollectData=state.mainState.filter((ele)=>{return(ele.catName==="Couple Shirts")})
        const WomensHalfSleevesData=state.mainState.filter((ele)=>{return(ele.catName==="Women's Full Sleeve")})
        const mensFomralShirtData=state.mainState.filter((ele)=>{return(ele.catName==="Formal Shirts")})

        dispatch({
            type:"SETCATEGORIES",
            payload:({mensHalfSleeve:mensHalfSleevesData,couplesData:couplesCollectData,womensHalfSleeve:WomensHalfSleevesData,mensFormal:mensFomralShirtData})
        })
        setAllCat(getData())
    },[])

    const getData=()=>{
        const totalCat=[...new Set(state.mainState.map((ele)=>{
         return(ele.catName)
        }))]
       const allFilteredCat = totalCat.map((ele)=>{
         const totalItems=state.mainState.filter((item)=>{
             return( item.catName===ele)
         }).length
 
         const img=state.mainState.filter((item)=>{
             return(
                 item.catName===ele
             )
         })[0].magnifyImg[0].img


         const catId=state.mainState.filter((item)=>{
            return(
                item.catName==ele
            )
           })[0].cat_Id;

            return {lengthCat:totalItems,imgCat:img,myCat:ele,catId:catId}
        })

          
        return(allFilteredCat)
     }



  

    const properties = {
        duration: 2000,
        transitionDuration: 200,
        infinite: true,
        arrows: true,
    }

    const handleProductControl =(event,ele)=>{
        event.stopPropagation()
        router.push(`/userproductpage/${ele}`)
    }
    
    const handleCatControl =(event,id)=>{
        // console.log(id)
       router.push(`/shoppage/${id}`)
    }

    const handleShowDataDrawer=(event,ele)=>{
        event.stopPropagation()
        setQuickViewData(ele)
         setQuickView(true)
    }
  


    return (
            <>
                <Header/>
            <Container  maxWidth={'xl'} disableGutters>
                <Grid container sx={{overflow:"hidden"}}>
                    <Grid  item xs={12} >
                      
                    </Grid>
                    
                    <Grid item xs={12} sx={{}}>
                        <CrouselComp />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: "20px", display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: { lg: "80%", md: "80%", sm: "100%", xs: "100%" } }}>
                            <Box >
                            <Typography align='center' sx={{ color: THEME_COLOR,textTransform:"uppercase", fontSize:FONT_SIZE_HEADING2 }}>
                            Men,s Half sleeve
                            </Typography>
                            <Typography align='center' sx={{ color: THEME_COLOR, fontSize:FONT_SIZE_HEADING3 }}>
                            New Arrivals – Check out our latest products!
                            </Typography>
                        </Box>
                        </Box>
                    </Grid>



                    {/* NEW ARRIVAL  SECTION */}

                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: "15px" }}>

                     {
                        state.mensHalfSleeve.length<1
                        ?
                        <Box className="newarrive" sx={{ display: "flex", width: { lg: "80%", md: "85%", sm: "90%", xs: "100%" },justifyContent:"space-between", overflow: "scroll" }}>
                         {
                            skeletonArr.map((ele)=>{
                               
                                return(
                                    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",m:"10px"}}>
                                        <Skeleton variant="rectangular" sx={{ width: { lg: "270px", md: "230px", sm: "200px",xs:"200px" },height: { lg: "350px", md: "320px", sm: "290px", xs: "260px"}}}/>
                                        <Skeleton   sx={{width: { lg: "270px", md: "230px", sm: "200px",xs:"200px" },height:"20px"}}/>
                                        <Skeleton sx={{width: { lg: "270px", md: "230px", sm: "200px",xs:"200px" },height:"20px"}}/>
                                        <Skeleton sx={{width: { lg: "270px", md: "230px", sm: "200px",xs:"200px" },height:"20px"}}/>
                                        <Skeleton sx={{width: { lg: "270px", md: "230px", sm: "200px",xs:"200px" },height:"20px"}}/>
                                    </Box>
                                )
                            })
                         }
                           </Box>
                           :
                           <Box className="newarrive" sx={{ display: "flex", width: { lg: "80%", md: "85%", sm: "90%", xs: "100%" }, overflow: "scroll" }}>
                            {
                                state.mensHalfSleeve.map((ele,index) => {
                                    
                                    return (
                                        <Box key={index} sx={{ m: { lg: "20px", md: "15px", sm: "12px", xs: "9px" },cursor:"pointer" }} onMouseEnter={() => {setCardShow(ele._id) }} onMouseLeave={()=>{setCardShow("")}}  onClick={(event)=>{handleProductControl(event,ele._id)}}>
                                            <Paper sx={{ width: "fit-content", pb: "10px", width: { lg: "270px", md: "230px", sm: "200px",xs:"190px" } }}>

                                                <Box sx={{height: { lg: "350px", md: "320px", sm: "290px", xs: "260px" }, backgroundImage: `url(${ele.magnifyImg[0].img.src})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat",width: "100%", position: "relative" }}>
                                                 
                                                 {  ele.sale && <span style={{ backgroundColor: SALE_COLOR, top: "10px", left: "10px", padding: "5px 8px", position: "absolute" }}>
                                                        <Typography sx={{ color: "white", fontSize: "12px" }}>SALE</Typography>
                                                    </span>}
                                                      {
                                                        cardShow == ele._id && (
                                                            <Box sx={{ position: "absolute",height:"100%",width:"100%" }}>

                                                           
                                                            <Box sx={{ height: "90%", width: "100%", zIndex: 1,}} >
                                                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "90%",m:"10px" }}>
                                                            <Box>
                                                                <ArrowBackIosIcon sx={{ fontSize: "20px"}} />
                                                            </Box>
                                                            <Box>
                                                                <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                                                            </Box>
                                                        </Box>
                                                        <Box sx={{ display: "flex", justifyContent: "center", mt: "10px",m:"15px" }}>
                                                            <Button variant='contained' sx={{ "&:hover": { bgcolor: THEME_COLOR }, fontSize: { xs: "10px" }, bgcolor: THEME_COLOR, width: { lg: "100%", md: "90%", sm: "80%", xs: "70%" } }} onClick={(event)=>{handleShowDataDrawer(event,ele)}}>QUICK VIEW</Button>
                                                        </Box>
                                                    </Box>
                                                    </Box>)

                                                     }
                                                </Box>
                                                <Box>
                                                    <Typography align='center' sx={{ mt: "10px", textTransform: "uppercase", letterSpacing: "-0.5px", fontSize: { lg: "12px", md: "10px", sm: "9px", xs: "9px" }, fontWeight: "900", }}>
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
                     }
                         
                        
                    </Grid>


                    {/* coupels collection */} 
                     
                     

                    <Grid item xs={12} sx={{ mt: "30px" }}>
                       
                       
                        <Box>
                            <Typography align='center' sx={{ color: THEME_COLOR, textTransform:"uppercase",fontSize: { lg: "24px", md: "22px", sm: "20px", xs: "20px" }, }}>
                                COUPLES COLLECTIONS
                            </Typography>
                            <Typography align='center' sx={{ color: THEME_COLOR, fontSize: { lg: "16px", md: "15px", sm: "14px", xs: "14px" },  }}>
                                New Arrivals – Check out our latest products!
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>

                           {

                            state.couplesData.length<1
                        ?
                        <Box className="newarrive" sx={{ display: "flex", width: { lg: "80%", md: "85%", sm: "90%", xs: "100%" },justifyContent:"space-between", overflow: "scroll" }}>
                         {
                            skeletonArr.map((ele)=>{
                                return(
                                    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",m:"10px"}}>
                                        <Skeleton variant="rectangular" sx={{ width: { lg: "270px", md: "230px", sm: "200px",xs:"200px" },height: { lg: "350px", md: "320px", sm: "290px", xs: "260px"}}}/>
                                        <Skeleton   sx={{width: { lg: "270px", md: "230px", sm: "200px",xs:"200px" },height:"20px"}}/>
                                        <Skeleton sx={{width: { lg: "270px", md: "230px", sm: "200px",xs:"200px" },height:"20px"}}/>
                                        <Skeleton sx={{width: { lg: "270px", md: "230px", sm: "200px",xs:"200px" },height:"20px"}}/>
                                        <Skeleton sx={{width: { lg: "270px", md: "230px", sm: "200px",xs:"200px" },height:"20px"}}/>
                                    </Box>
                                )
                            })
                         }

                           </Box>
                           :
                           <Box className="newarrive" sx={{ display: "flex", width: { lg: "80%", md: "85%", sm: "90%", xs: "100%" }, overflow: "scroll" }}>

                                {
                                    state.couplesData.map((ele,index) => {
                                        return (
                                            <Box key={index} sx={{ m: { lg: "20px", md: "15px", sm: "12px", xs: "9px" },cursor:"pointer" }} onMouseEnter={() => {setCardShow(ele._id) }} onMouseLeave={()=>{setCardShow("")}} onClick={(event)=>{handleProductControl(event,ele._id)}}>
                                            <Paper sx={{ width: "fit-content", pb: "10px", width: { lg: "270px", md: "230px", sm: "200px",xs:"190px" }}}>

                                                <Box sx={{ height: { lg: "350px", md: "320px", sm: "290px", xs: "260px" }, backgroundImage: `url(${ele.magnifyImg[0].img.src})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat",width: "100%", position: "relative" }}>
                                                   { ele.sale && <span style={{ backgroundColor: SALE_COLOR, top: "10px", left: "10px", padding: "5px 8px", position: "absolute" }}>
                                                        <Typography sx={{ color: "white", fontSize: "12px" }}>SALE</Typography>
                                                    </span>}
                                                      {
                                                        cardShow == ele._id && (<Box sx={{ height: "90%", width: "100%", position: "absolute", zIndex: 1 }} >
                                                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "90%",m:"10px" }}>
                                                            <Box>
                                                                <ArrowBackIosIcon sx={{ fontSize: "20px"}} />
                                                            </Box>
                                                            <Box>
                                                                <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                                                            </Box>
                                                        </Box>
                                                        <Box sx={{ display: "flex", justifyContent: "center", mt: "10px",m:"15px" }}>
                                                            <Button variant='contained' sx={{ "&:hover": { bgcolor: THEME_COLOR }, fontSize: { xs: "10px" }, bgcolor: THEME_COLOR, width: { lg: "100%", md: "90%", sm: "80%", xs: "70%" } }} onClick={(event)=>{handleShowDataDrawer(event,ele)}}>QUICK VIEW</Button>
                                                        </Box>
                                                    </Box>)

                                                     }
                                                </Box>
                                                <Box>
                                                    <Typography align='center' sx={{ mt: "10px", textTransform: "uppercase", letterSpacing: "-0.5px", fontSize: { lg: "12px", md: "10px", sm: "9px", xs: "9px" }, fontWeight: "900", }}>
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

                           }

                            
                        </Box>
                    </Grid>


                    {/* womens Half sleeves section */}
                    <Grid item xs={12} sx={{ mt: "20px", display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: { lg: "80%", md: "80%", sm: "100%", xs: "100%" } }}>
                            <Box >
                            <Typography align='center' sx={{ color: THEME_COLOR, textTransform:"uppercase",fontSize: { lg: "24px", md: "22px", sm: "20px", xs: "20px" }, }}>
                            Women,s Half sleeve
                            </Typography>
                            <Typography align='center' sx={{ color: THEME_COLOR, fontSize: { lg: "16px", md: "15px", sm: "14px", xs: "14px" }, }}>
                                New Arrivals – Check out our latest products!
                            </Typography>
                        </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>

                    {
                        state.woHalf.length<1
                        ?
                        <Box className="newarrive" sx={{ display: "flex", width: { lg: "80%", md: "85%", sm: "90%", xs: "100%" },justifyContent:"space-between", overflow: "scroll" }}>
                         {
                            skeletonArr.map((ele)=>{
                                return(
                                    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",m:"10px"}}>
                                        <Skeleton variant="rectangular" sx={{ width: { lg: "270px", md: "230px", sm: "200px",xs:"200px" },height: { lg: "350px", md: "320px", sm: "290px", xs: "260px"}}}/>
                                        <Skeleton   sx={{width: { lg: "270px", md: "230px", sm: "200px",xs:"200px" },height:"20px"}}/>
                                        <Skeleton sx={{width: { lg: "270px", md: "230px", sm: "200px",xs:"200px" },height:"20px"}}/>
                                        <Skeleton sx={{width: { lg: "270px", md: "230px", sm: "200px",xs:"200px" },height:"20px"}}/>
                                        <Skeleton sx={{width: { lg: "270px", md: "230px", sm: "200px",xs:"200px" },height:"20px"}}/>
                                    </Box>
                                )
                            })
                         }

                           </Box>
                           :
                           <Box className="newarrive" sx={{ display: "flex", width: { lg: "80%", md: "85%", sm: "90%", xs: "100%" }, overflow: "scroll" }}>
                            {
                                state.woHalf.map((ele,index) => {
                                    return (
                                        <Box key={index} sx={{ m: { lg: "20px", md: "15px", sm: "12px", xs: "9px" },cursor:"pointer" }} onMouseEnter={() => {setCardShow(ele._id) }} onMouseLeave={()=>{setCardShow("")}} onClick={(event)=>{handleProductControl(event,ele._id)}}>
                                            <Paper sx={{ width: "fit-content", pb: "10px", width: { lg: "270px", md: "230px", sm: "200px",xs:"190px" } }}>

                                                <Box sx={{ height: { lg: "350px", md: "320px", sm: "290px", xs: "260px" }, backgroundImage: `url(${ele.magnifyImg[0].img.src})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat",width: "100%", position: "relative" }}>
                                                    { ele.sale && <span style={{ backgroundColor: SALE_COLOR, top: "10px", left: "10px", padding: "5px 8px", position: "absolute" }}>
                                                        <Typography sx={{ color: "white", fontSize: "12px" }}>SALE</Typography>
                                                    </span>}
                                                      {
                                                        cardShow == ele._id && (<Box sx={{ height: "90%", width: "100%", position: "absolute", zIndex: 1 }} >
                                                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "90%",m:"10px" }}>
                                                            <Box>
                                                                <ArrowBackIosIcon sx={{ fontSize: "20px"}} />
                                                            </Box>
                                                            <Box>
                                                                <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                                                            </Box>
                                                        </Box>
                                                        <Box sx={{ display: "flex", justifyContent: "center", mt: "10px",m:"15px" }}>
                                                            <Button variant='contained' sx={{ "&:hover": { bgcolor: THEME_COLOR }, fontSize: { xs: "10px" }, bgcolor: THEME_COLOR, width: { lg: "100%", md: "90%", sm: "80%", xs: "70%" } }} onClick={(event)=>{handleShowDataDrawer(event,ele)}}>QUICK VIEW</Button>
                                                        </Box>
                                                    </Box>)

                                                     }
                                                </Box>
                                                <Box>
                                                    <Typography align='center' sx={{ mt: "10px", textTransform: "uppercase", letterSpacing: "-0.5px", fontSize: { lg: "12px", md: "10px", sm: "9px", xs: "9px" }, fontWeight: "900", }}>
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
                    }
                        
                    </Grid>


                    {/* mens formal shirts */}


                    <Grid item xs={12} sx={{ mt: "20px", display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: { lg: "80%", md: "80%", sm: "100%", xs: "100%" } }}>
                            <Box >
                            <Typography align='center' sx={{ color: THEME_COLOR, textTransform:"uppercase",fontSize: { lg: "24px", md: "22px", sm: "20px", xs: "20px" }, }}>
                            Men Fomral Shirts
                            </Typography>
                            <Typography align='center' sx={{ color: THEME_COLOR, fontSize: { lg: "16px", md: "15px", sm: "14px", xs: "14px" }, }}>
                                New Arrivals – Check out our latest products!
                            </Typography>
                        </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>

                       {

                        state.menFormalShirt.length<1
                        ?
                        <Box className="newarrive" sx={{ display: "flex", width: { lg: "80%", md: "85%", sm: "90%", xs: "100%" },justifyContent:"space-between", overflow: "scroll" }}>
                         {
                            skeletonArr.map(()=>{
                                return(
                                    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",m:"10px"}}>
                                        <Skeleton variant="rectangular" sx={{ width: { lg: "270px", md: "230px", sm: "200px",xs:"200px" },height: { lg: "350px", md: "320px", sm: "290px", xs: "260px"}}}/>
                                        <Skeleton   sx={{width: { lg: "270px", md: "230px", sm: "200px",xs:"200px" },height:"20px"}}/>
                                        <Skeleton sx={{width: { lg: "270px", md: "230px", sm: "200px",xs:"200px" },height:"20px"}}/>
                                        <Skeleton sx={{width: { lg: "270px", md: "230px", sm: "200px",xs:"200px" },height:"20px"}}/>
                                        <Skeleton sx={{width: { lg: "270px", md: "230px", sm: "200px",xs:"200px" },height:"20px"}}/>
                                    </Box>
                                )
                            })
                         }

                           </Box>
                           :
                           <Box className="newarrive" sx={{ display: "flex", width: { lg: "80%", md: "85%", sm: "90%", xs: "100%" }, overflow: "scroll" }}>
                            {
                                state.menFormalShirt.map((ele,index) => {
                                    return (
                                        <Box key={index} sx={{ m: { lg: "20px", md: "15px", sm: "12px", xs: "9px" },cursor:"pointer" }} onMouseEnter={() => {setCardShow(ele._id) }} onMouseLeave={()=>{setCardShow("")}} onClick={(event)=>{handleProductControl(event,ele._id)}}>
                                            <Paper sx={{ width: "fit-content", pb: "10px", width: { lg: "270px", md: "230px", sm: "200px",xs:"190px" } }}>

                                                <Box sx={{ height: { lg: "350px", md: "320px", sm: "290px", xs: "260px" }, backgroundImage: `url(${ele.magnifyImg[0].img.src})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat",width: "100%", position: "relative" }}>
                                                   { ele.sale && <span style={{ backgroundColor: SALE_COLOR, top: "10px", left: "10px", padding: "5px 8px", position: "absolute" }}>
                                                        <Typography sx={{ color: "white", fontSize: "12px" }}>SALE</Typography>
                                                    </span>}
                                                      {
                                                        cardShow == ele._id && (<Box sx={{ height: "90%", width: "100%", position: "absolute", zIndex: 1 }} >
                                                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "90%",m:"10px" }}>
                                                            <Box>
                                                                <ArrowBackIosIcon sx={{ fontSize: "20px"}} />
                                                            </Box>
                                                            <Box>
                                                                <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                                                            </Box>
                                                        </Box>
                                                        <Box sx={{ display: "flex", justifyContent: "center", mt: "10px",m:"15px" }}>
                                                            <Button variant='contained' sx={{ "&:hover": { bgcolor: THEME_COLOR }, fontSize: { xs: "10px" }, bgcolor: THEME_COLOR, width: { lg: "100%", md: "90%", sm: "80%", xs: "70%" } }} onClick={(event)=>{handleShowDataDrawer(event,ele)}}>QUICK VIEW</Button>
                                                        </Box>
                                                    </Box>)

                                                     }
                                                </Box>
                                                <Box>
                                                    <Typography align='center' sx={{ mt: "10px", textTransform: "uppercase", letterSpacing: "-0.5px", fontSize: { lg: "12px", md: "10px", sm: "9px", xs: "9px" }, fontWeight: "900", }}>
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
                       }

                       
                    </Grid>



                    {/* men women mix and small screen crousel */}


                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
                        <Box className="newarrive" sx={{ width: { lg: "80%", md: "85%", sm: "90%", xs: "100%" }, display: { lg: "block", md: "block", sm: "none", xs: "none" } }}>

                            <Grid container sx={{}}>
                                {
                                    allCat.map((ele) => {
                                        console.log(ele)
                                        return (
                                            <Grid key={ele.catId} item lg={4} md={4} sx={{ cursor: "pointer" }}>
                                                <Box sx={{ m: "15px", mt: "20px", backgroundImage: `url(${ele.imgCat.src})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height: "530px" }} onClick={(event)=>{handleCatControl(event,ele.catId)}}>

                                                </Box>
                                                <Box>
                                                    <Typography align='center' sx={{ mt: "10px", textTransform: "uppercase", letterSpacing: "-0.5px", fontSize:"17px", fontWeight: "900" }}>
                                                        {ele.myCat}
                                                    </Typography>
                                                    <Typography sx={{textAlign:"center",fontSize:GREY_TITLE,color:GRAY_TYPO}}>
                                                       {`${ele.lengthCat} Products`}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }

                            </Grid>

                        </Box>

                        <Box sx={{ width: "100%", display: { lg: "none", md: "none", sm: "block", xs: "block" }, mb: { lg: "30px", md: "25px", sm: "20px", xs: "10px" } }}>
                            <Box sx={{}}>
                                <Slide {...properties}>
                                    
                                    {

                                        allCat.map((ele, index) => {
                                            return (
                                                <Box key={index} sx={{ width: "100%" }}>
                                                    <Box sx={{ backgroundImage: `url(${ele.imgCat.src})`, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", height: { lg: "230px", md: "300px", sm: "550px", xs: "500px" }, backgroundSize: "100% 100%" }}>

                                                    </Box>
                                                </Box>
                                            )

                                        })
                                    }

                                </Slide>
                            </Box>
                        </Box>

                    </Grid>
``

                    {/* the vibzz three photos */}


                    <Grid item xs={12} sx={{ mt: { lg: "30px", md: "25px", sm: "17px", xs: "0px" }, bgcolor:"#9e9e9e",height: { lg: "600px", md: "650px", sm: "500px", xs: "550px" } }}>
                        <Box className="newarrive" sx={{ width: "100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",}}>
                            <Box sx={{ width: { lg: "80%", md: "85%", sm: "90%", xs: "100%" },backgroundImage: `url(${b6.src})`,height:{xs:"80%",sm:"85%",md:"90%",lg:"95%"}, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                                <Box sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Box sx={{ height: "fit-content", width: { lg: "60%", md: "65%", sm: "70%", xs: "70%" } }}>
                                        <Typography align='center' sx={{ fontSize:FONT_SIZE_HEADING1, fontWeight: "900", color: "white", }}>
                                            THE VIBZZ
                                        </Typography>
                                        <Typography align='center' sx={{ mt: "10px", fontSize: { lg: "15px", md: "14px", sm: "15px", xs: "12px" }, fontWeight: { lg: "900", md: "800", sm: "800", xs: "800" }, color: "white", }}>
                                            “Shop the Latest Fashion Trends: Find Your Perfect Outfit Today! Discover the Hottest Styles at [the vibzz] <br /> – Shop Now and Save Big on Must-Have Clothes!”
                                        </Typography>
                                        <Grid container sx={{ mt: { lg: "30px", md: "25px", sm: "20px", xs: "10px" } }}>
                                            <Grid item xs={12} sm={12} md={5.5} lg={5.5} sx={{ m: "5px", display: "flex", justifyContent: { lg: "right", md: "right", sm: "center", xs: "center" } }}>
                                                <Button sx={{ letterSpacing: "-0.5px", bgcolor: "white", border: "3px solid transparent", fontSize: "12px", fontWeight: "900", color: "black", "&:hover": { background: "none", color: "white", border: "3px solid white" } }}>
                                                    shop men collection
                                                </Button>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={5.5} lg={5.5} sx={{ m: "5px", display: "flex", justifyContent: { lg: "left", md: "left", sm: "center", xs: "center" } }}>
                                                <Button sx={{ letterSpacing: "-0.5px", background: "none", fontSize: "12px", border: "3px solid white", fontWeight: "900", color: "white", "&:hover": { background: "white", color: "black" } }}>
                                                    shop formal collection
                                                </Button>
                                            </Grid>

                                        </Grid>

                                    </Box>

                                </Box>
                            </Box>
                        </Box>
                    </Grid>


                    <Grid item xs={12} sx={{ mt: "15px",}}>
                        <Box sx={{  width: "100%",background:"#757575",backgroundBlendMode:"multiply", backgroundImage: `url(${b3Image.src})`, height:"450px", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                            <Box sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: { xs: "left", sm: "center", md: "center", lg: "center" } }}>
                                <Box sx={{ ml:"15px",width: { lg: "80%", md: "90%", sm: "90%", xs: "100%" } }}>
                                    <Typography sx={{ fontSize: { lg: "40px", md: "27px", sm: "20px", xs: "22px" }, fontWeight: "900", color: "white", }}>
                                        MEN,S COLECTION
                                    </Typography>
                                    <Button sx={{ mt: "15px", letterSpacing: "-0.5px", bgcolor: "white", border: "3px solid transparent", fontSize: "12px", fontWeight: "900", color: "black", "&:hover": { background: "none", color: "white", border: "3px solid white" } }}>
                                        shop men collection
                                    </Button><br />
                                    <Button sx={{ mt: "10px", letterSpacing: "-0.5px", background: "none", fontSize: "12px", border: "3px solid white", fontWeight: "900", color: "white", "&:hover": { background: "white", color: "black" } }}>
                                        shop formal collection
                                    </Button>

                                </Box>
                            </Box>
                        </Box>
                    </Grid>


                    <Grid item xs={12}>
                        <Box sx={{ width: "100%",background:"#757575",backgroundBlendMode:"multiply", backgroundImage: `url(${b5.src})`, height: { lg: "580px", md: "600px", sm: "580px", xs: "600px" }, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                            <Box sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>

                                <Typography align='center' sx={{ fontSize: { lg: "40px", md: "35px", sm: "35px", xs: "35px" }, fontWeight: "900", color: "white" }}>
                                    ENJOY UP TO 30% OFF
                                </Typography>
                                <Button sx={{ mt:{lg:"15px",md:"15px",sm:"13px",xs:"10px"}, letterSpacing: "-0.5px", bgcolor: "white", border: "3px solid transparent", fontSize: "12px", fontWeight: "900", color: "black", "&:hover": { background: "none", color: "white", border: "3px solid white" } }}>
                                    shop men collection
                                </Button><br />



                            </Box>
                        </Box>
                    </Grid>

          
                    <Grid item xs={12}>
                        <Footer />
                    </Grid>


                </Grid>
              <QuickViewDrawer open={quickView} setOpen={setQuickView} data={quickViewData}/>
            </Container>
            </>
        
    )
}

export default HomePage