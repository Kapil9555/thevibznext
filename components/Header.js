'use client'
import { globalContext } from '@/Global/VibzContext';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import { AppBar, Box, Button, Grid, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useContext, useEffect, useRef, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { SALE_COLOR, THEME_COLOR } from '../Styles/ConstantStyle';
import '../Styles/FontStyle.css';
import logo from '../assets/thevibzzlogo.webp';
import MegaMenu from '../components/MegaMenu';
import { megaMenuList } from '../constantMapData';
import SideDrawer from './SideDrawer';
import RightSideDrawer from './RightSideDrawer';
import WishlistDrawer from './WishlistDrawer';
import MyCartDrawer from './MyCartDrawer';






export default function Header() {
    const router=useRouter()
    const params =useParams()
    const { state } = useContext(globalContext)
    const [hoverEffect, setHoverEffect] = useState(false)
    const [borderStyle, setBorderStyle] = useState({ Stitle:"", Smenu:false })
    const [borderMegaControl,setborderMegaControl]=useState("")
    const [megaListMenu, setMegaListMenu] = useState(megaMenuList)
    const elementRef = useRef();
    const [isTouchingTop, setIsTouchingTop] = useState(false);
    const [open ,setOpen]=useState(false)
    const [rightOpen,setRightOpen]=useState(false)
   const [wishListopen, setWishListopen]=useState(false)
   const [cartOpen,setCartOpen]=useState(false)
   

    
    const images = [
        {
            icon: <ReceiptIcon sx={{ mr: "5px", fontSize: "19px" }} />,
            caption: " Upto 50% off for your first order Read more",
            id:1
        },
        {
            icon: <ReceiptIcon sx={{ mr: "5px", fontSize: "19px" }} />,
            caption: " Upto 50% off for your first order Read more",
            id:2
        },
        {
            icon: <ReceiptIcon sx={{ mr: "5px", fontSize: "19px" }} />,
            caption: " Upto 50% off for your first order Read more",
            id:3
        },
        {
            icon: <ReceiptIcon sx={{ mr: "5px", fontSize: "19px" }} />,
            caption: " Upto 50% off for your first order Read more",
            id:4
        }
    ];




    
    function isInViewport() {
        const rect = elementRef.current.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
      
      useEffect(() => {
        setIsTouchingTop(isInViewport());
      }, []);
   

      const functionOpenDrawer=()=>{
        setRightOpen(true)
      }

    const handleHoverControl = ({ title, megaMenu }) => {
        setBorderStyle((prev) => ({ ...prev, Smenu: megaMenu,Stitle:title }))
        setborderMegaControl(title)
        if (megaMenu) {
            setHoverEffect(true)
        }
        else {
            setHoverEffect(false)
        }

    }


    const handleRemoveHover = () => {
        setborderMegaControl("")
        setHoverEffect(false)

    }

    const handleClickControl=({navigator})=>{
        router.push(`/${navigator}`)
    }

    const handleCartControl=()=>{
        const paramsValue=Object.keys(params)[0]
        
        if(paramsValue=='buynowpage' || paramsValue=='placeorderpage' || paramsValue=='addtocartpage'){
              router.push('/addtocart/addtocartpage')     
        }
        else{
            setCartOpen(true)
        }
    }


    
        return (
            <>
            <AppBar elevation={0} sx={{display: {lg:"block",md:"block",sm:"none",xs:"none"}}}>
                <Toolbar component={Box} disableGutters sx={{pt: "10px", color: "white", bgcolor: "black", display: {lg:"flex",md:"flex",sm:"none",xs:"none"}, flexDirection: "column" }}>

                    <Grid container sx={{ mb: "5px",}}>
                        {/* <Grid item xs={0} sm={0} md={1} lg={1}></Grid> */}

                        <Grid item lg={4} md={4} sx={{ display: "flex", justifyContent:{ lg:"center",md:"center",sm:"center",xs:"center"}, alignItems: "flex-start" }}>
                            <Typography  sx={{ fontSize: "15px", fontWeight: "800", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <AddIcCallOutlinedIcon sx={{ fontSize: { lg: "17px", md: "12px" }, mr: "5px", }} /> CALL TO US! +91-972723423
                            </Typography>
                        </Grid>

                        <Grid item lg={4.5} md={4.5}>
                            <Box sx={{ width: "90%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <Box style={{height:"30px"}}><ArrowBackIosIcon sx={{ fontSize: "18px" }} /></Box>
                                <Box sx={{width:"100%",height:"35px"}}>
                                <Slide duration={2000} transitionDuration={200} infinite={true} arrows={false}>
                                    {
                                        images.map((ele) => (
                                            <Box key={ele.id} sx={{height:"30px"}}>
                                                <Typography align='center' sx={{ display: "flex",alignItems: "center", fontSize: { lg: "13px", md: "11px" }, color:"white",justifyContent: "center"}}>{ele.icon}{ele.caption}</Typography>
                                            </Box>
                                        ))
                                    }
                                </Slide>
                                </Box>
                              
                                <Box style={{height:"30px"}}><ArrowForwardIosIcon sx={{ fontSize: "18px" }} /></Box>

                            </Box>
                        </Grid>


                        <Grid item lg={2.5} md={3.3}>
                            <Box sx={{ display: "flex", justifyContent:{ lg:"center",md:"right"} }}>
                                <Typography sx={{ mr: "7px", fontWeight: "900", letterSpacing: "-0.5px", fontSize: "14px", display: "flex", alignItems: "center",cursor:"pointer"}}  onClick={functionOpenDrawer}><PersonOutlineOutlinedIcon sx={{ mr: "3px", fontSize: "25px", fontWeight: "100", mt: "-3px" }}/>LOGIN/SIGNUP</Typography>
                                <Typography sx={{ fontWeight: "900", letterSpacing: "-0.5px", fontSize: "14px", display: "flex", alignItems: "center",cursor:"pointer" }} onClick={()=>{setWishListopen(true)}}><FavoriteBorderOutlinedIcon sx={{ mr: "3px", fontSize: "22px", fontWeight: "100", mt: "-3px" }} />WISHLIST</Typography>

                            </Box>
                        </Grid>
                    </Grid>


                    <Grid container sx={{ mt: "10px" }}>
                        <Grid item xs={4} sx={{ display: "flex", justifyContent: "space-around" }}>
                            <Grid container>
                                <Grid item xs={6} sx={{ display: "flex", justifyContent: "right" }}>

                                    <Box sx={{ userSelect: 'none', height:"60px", width: { lg: "100px", xs: "100px", md: '80px' }, bgcolor: "white", borderRadius: '10px',position:"relative"}} onClick={()=>{router.push('/home')}}>
                                        <Image sizes="" src={logo} alt='pic'   fill  style={{ cursor: "pointer",objectFit:"cover" }} />
                                    </Box>

                                </Grid>
                                <Grid item xs={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Box sx={{height:"fit-content"}}>
                                        <FacebookOutlinedIcon sx={{ mr: "10px" }} />
                                        <InstagramIcon sx={{ mr: "10px",mt:"2px" }} />
                                        <TwitterIcon sx={{ color: "black",fontSize:"22px", bgcolor: "white", borderRadius: "50px"}} />

                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={4.5} sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ position: "relative", border: "2px solid #757575", display: "flex", alignItems: "center", height: "35px", width: "100%" }}>
                                <Box sx={{}}>
                                    <select style={{ background: "none", border: "none", outline: "none", color: "white" }}>
                                        <option style={{ color: "black", mt: "5px" }}>All categories</option>
                                        <option style={{ color: "black", mt: "5px" }}>Couple Shirts</option>
                                        <option style={{ color: "black", mt: "5px" }}>Formal Shirts</option>
                                        <option style={{ color: "black", mt: "5px" }}>Man,s Full Sleeve</option>
                                        <option style={{ color: "black", mt: "5px" }}>Man,s Half Sleeve</option>
                                        <option style={{ color: "black", mt: "5px" }}>Men,s/Women,s</option>
                                        <option style={{ color: "black", mt: "5px" }}>Men T-Shirt</option>
                                        <option style={{ color: "black", mt: "5px" }}>Uncategorized</option>
                                        <option style={{ color: "black", mt: "5px" }}>Women,s Full Sleeve</option>
                                        <option style={{ color: "black", mt: "5px" }}>Women,s Half Sleeve</option>
                                    </select>
                                </Box>
                                <Box sx={{ borderLeft: "2px solid #757575", height: "100%", display: "flex", alignItems: "Center" }}>
                                    <input placeholder='Type here...' style={{ background: "none", outline: "none", paddingLeft: "10px", border: "none", color: "whitesmoke" }} />
                                </Box>
                                <Box sx={{ position: "absolute", right: "0px" }}>
                                    <SearchIcon sx={{ mr: "10px", fontSize: "25px", fontWeight: "300" }} />
                                </Box>

                            </Box>
                        </Grid>

                        <Grid item xs={3} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Box>
                                <Button sx={{ color: "black", bgcolor: "white", "&:hover": { bgcolor: "white" }, fontWeight: "900" }} onClick={handleCartControl}> <ShoppingBagOutlinedIcon sx={{ fontWeight: "300", mr: "5px" }} />my cart ₹ 0.0</Button>
                            </Box>
                        </Grid>
                    </Grid>



                    <Grid container>
                        <Grid item sx={{ width: "100%" }}>
                            {
                                <Grid item xs={12} sx={{ position: "relative" }}>
                                    <Grid container sx={{ borderBottom: "1px solid #e0e0e0", bgcolor: "white", color: "black" }}>
                                        <Grid item lg={3.5} md={2}>
                                        </Grid>
                                        <Grid item lg={4.5} md={6}>
                                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                                {
                                                    megaListMenu.map((ele, index) => {
                                                        return (
                                                          
                                                                <Box key={index} sx={{mt: "18px", cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "space-between" }} onMouseEnter={() => { handleHoverControl({ ...ele }) }} onMouseLeave={handleRemoveHover} onClick={()=>{handleClickControl({ ...ele })}}>
                                                                    <Typography sx={{  display: "flex", alignItems: "center", fontSize: "15px", fontWeight: "800" }}>
                                                                        {ele.icon}{ele.title}
                                                                    </Typography>
                                                                    <Box sx={{ pt: "10px", ml: "3px", width: borderMegaControl == ele.title ? "100%" : "0%", transition: "width 0.3s ease", borderBottom: `3px solid ${THEME_COLOR}` }}>

                                                                    </Box>
                                                                </Box>
                                                           
                                                        )
                                                    })
                                                }
                                            </Box>
                                            <Box>

                                            </Box>
                                        </Grid>
                                        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <Box sx={{ width: "fit-content", border: `2px solid ${SALE_COLOR}`, color: SALE_COLOR, p: "5px 10px", height: "fit-content" }}>
                                                <Typography sx={{ fontSize: "12px", fontWeight: "700", }}>
                                                    SALE! 30% OFF!
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>


                                    {
                                        hoverEffect && <Box sx={{ bgcolor: "white", width: "100%", position: "absolute", zIndex: 9999 }}>

                                            <MegaMenu onPointerOut={handleRemoveHover} borderStyle={borderStyle} setHoverEffect={setHoverEffect} />
                                        </Box>
                                    }



                                </Grid>
                            }
                        </Grid>
                    </Grid>






                </Toolbar>
            </AppBar>
    

   
            
            <AppBar position='static'  sx={{display: {lg:"none",md:"none",sm:"block",xs:"block"}}}>
                <Toolbar disableGutters sx={{ p:"15px", bgcolor: 'black', borderBottom: '1px solid #757575', display: 'flex', flexDirection: 'column' }}>
                    <Grid container sx={{ mb: '5px', }}>
                        <Grid item xs={12}>
                        <Box sx={{ display:"flex",alignItems:"center"}}>
                                <Box style={{ }}><ArrowBackIosIcon sx={{ fontSize: "22px" }} /></Box>
                                <Box sx={{width:"100%",overflow:"hidden"}}>
                                <Slide duration={2000} transitionDuration={200} infinite={true} arrows={false}>
                                    {
                                        images.map((ele) => (
                                            <Box key={ele.id}>
                                                <Typography align='center' sx={{ display: "flex", alignItems: "center", fontSize: { lg: "13px", md: "11px",sm:"10px",xs:"8px" }, color:"white",justifyContent: "center" }}>{ele.icon}{ele.caption}</Typography>
                                            </Box>
                                        ))
                                    }

                                </Slide>
                                </Box>
                              
                                <Box ><ArrowForwardIosIcon sx={{ fontSize: "22px" }} /></Box>

                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container ref={elementRef} sx={{ position: isTouchingTop ? 'sticky' : 'static', zIndex: 1, bgcolor: THEME_COLOR, top: "0px", alignItems: 'center', justifyContent: 'space-between', mt: '8px' }}>
                        <Box>
                            <MenuOutlinedIcon sx={{ fontSize: { xs: '22px', sm: '25px', md: '29px', lg: '35px' } }} onClick={()=>{setOpen(true)}}/>
                        </Box>

                        <Box

                            sx={{
                                display: 'flex',
                                justifyContent: 'right',
                            }}
                        >
                            <Box
                                sx={{
                                    userSelect: 'none',
                                    cursor: 'pointer',
                                    width: { lg: '100px', xs: '70px', md: '85px', sm: '75px' },
                                    bgcolor: 'white',
                                    borderRadius: '10px',
                                    height:"50px",
                                    position:"relative"
                                }}
                                onClick={()=>{router.push('home')}}
                            >
                               <Image src={logo} alt='pic' sizes=""  fill  style={{ cursor: "pointer",objectFit:"cover" }} />
                            </Box>
                        </Box>

                        <Box>
                            <PersonOutlineOutlinedIcon sx={{ mr: '3px', fontSize: '25px', fontWeight: '100', mt: '-3px' }}  onClick={functionOpenDrawer}/>
                        </Box>
                    </Grid>

                    <Grid container sx={{ display: 'flex', alignItems: 'center', mt: '10px', }}>
                        <Grid xs={12} item sx={{ position: 'relative', border: '2px solid #757575', display: 'flex', alignItems: 'center', height: '35px', width: '100%' }}>
                        <Box sx={{ borderLeft: "2px solid #757575", height: "100%", display: "flex", alignItems: "Center" }}>
                                    <input placeholder='Type here...' style={{ background: "none", outline: "none", paddingLeft: "10px", border: "none", color: "whitesmoke" }} />
                                </Box>
                            <Box sx={{ position: 'absolute', right: '0px' }}>
                                <SearchIcon sx={{ mr: '10px', fontSize: '25px', fontWeight: '300' }} />
                            </Box>
                        </Grid>
                    </Grid>
                   
                </Toolbar>
            </AppBar>   
             <SideDrawer open={open} setOpen={setOpen}/>
             <RightSideDrawer rightOpen={rightOpen}  setRightOpen={setRightOpen}/>
             <WishlistDrawer wishListopen={wishListopen} setWishListopen={setWishListopen}/>
             <MyCartDrawer cartOpen={cartOpen} setCartOpen={setCartOpen}/>
             
            </>
        )
        
    }




