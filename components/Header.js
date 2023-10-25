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




const Header = () => {
    const router = useRouter()
    const params = useParams()
    const [hoverEffect, setHoverEffect] = useState(false)
    const [borderStyle, setBorderStyle] = useState({ Stitle: "", Smenu: false })
    const [borderMegaControl, setborderMegaControl] = useState("")
    const [megaListMenu, setMegaListMenu] = useState(megaMenuList)
    const [open, setOpen] = useState(false)
    const [rightOpen, setRightOpen] = useState(false)
    const [wishListopen, setWishListopen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)
    const elementRef1 = useRef(null);
    const elementRef2 = useRef(null);
    const [isTouchingTop, setIsTouchingTop] = useState(false);




    // checking wether the header element is touching top or not
    const handleScroll = () => {
        if (elementRef1.current) {const elementRect1 = elementRef1.current.getBoundingClientRect();const touchTop1 = elementRect1.top <= 0;
            if (touchTop1) {setIsTouchingTop(true)}
            else {setIsTouchingTop(false)}
        }
        if (elementRef2.current) {const elementRect2 = elementRef2.current.getBoundingClientRect();const touchTop2 = elementRect2.top <= 0;
            if (touchTop2) {setIsTouchingTop(true)}
            else {setIsTouchingTop(false)}
        }
    };
//    running handleScroll function only
    useEffect(() => {window.addEventListener('scroll', handleScroll);
        return () => {window.removeEventListener('scroll', handleScroll);};
    }, []);

    



    const functionOpenDrawer = () => {setRightOpen(true)}

    const handleHoverControl = ({ title, megaMenu }) => {setBorderStyle((prev) => ({ ...prev, Smenu: megaMenu, Stitle: title }));setborderMegaControl(title)
        if (megaMenu) {setHoverEffect(true)}
        else {setHoverEffect(false)}

    }


    const handleRemoveHover = () => {setborderMegaControl("");setHoverEffect(false)}

    const handleClickControl = ({ navigator }) => {router.push(`/${navigator}`)}

    const handleCartControl = () => {
        const paramsValue = Object.keys(params)[0]
        if (paramsValue == 'buynowpage' || paramsValue == 'placeorderpage' || paramsValue == 'addtocartpage') {
            router.push('/addtocart/addtocartpage')
        }
        else {
            setCartOpen(true)
        }
    }


    return (
        <>
            <Grid container sx={{ bgcolor: "black", pt: "8px", justifyContent: "center" }}>
                <Grid item lg={4} md={4} sx={{ display: { lg: "flex", md: "flex", sm: "none", xs: "none" }, justifyContent: { lg: "center", md: "center", sm: "center", xs: "center" }, alignItems: "flex-start" }}>
                    <Typography sx={{ fontSize: "15px", color: "white", fontWeight: "800", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <AddIcCallOutlinedIcon sx={{ fontSize: { lg: "17px", md: "12px" }, mr: "5px" }} /> CALL TO US! +91-972723423
                    </Typography>
                </Grid>

                <Grid item lg={4.5} md={4.5} xs={11.5} sm={11}>

                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                        <Box><ArrowBackIosIcon sx={{ fontSize: "16px", color: "white" }} /></Box>
                        <Box sx={{ height: "30px" }}>
                            <Typography align='center' sx={{ display: "flex", mt: "8px", alignItems: "center", fontSize: { lg: "13px", md: "11px", sm: "10px", xs: "8px" }, color: "white", justifyContent: "center" }}> <ReceiptIcon sx={{ mr: "5px", fontSize: "19px" }} />Upto 50% off for your first order Read more</Typography>
                        </Box>
                        <Box><ArrowForwardIosIcon sx={{ fontSize: "16px", color: "white" }} /></Box>
                    </Box>
                </Grid>


                <Grid item lg={2.5} md={3.3}>
                    <Box sx={{ display: { lg: "flex", md: "flex", sm: "none", xs: "none" }, justifyContent: { lg: "center", md: "right" } }}>
                        <Typography sx={{ color: "white", mr: "7px", fontWeight: "900", letterSpacing: "-0.5px", fontSize: "14px", display: "flex", alignItems: "center", cursor: "pointer" }} onClick={functionOpenDrawer}><PersonOutlineOutlinedIcon sx={{ mr: "3px", fontSize: "25px", fontWeight: "100", mt: "-3px", color: "white" }} />LOGIN/SIGNUP</Typography>
                        <Typography sx={{ color: "white", fontWeight: "900", letterSpacing: "-0.5px", fontSize: "14px", display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => { setWishListopen(true) }}><FavoriteBorderOutlinedIcon sx={{ mr: "3px", fontSize: "22px", fontWeight: "100", mt: "-3px" }} />WISHLIST</Typography>
                    </Box>
                </Grid>

            </Grid>

            
                <Grid ref={elementRef1} container sx={{ position: isTouchingTop == true ? "sticky" : "static", top: "-2px",bgcolor: "black", display: { lg: "block", md: "block", sm: "none", xs: "none" },zIndex:99999 }}>
                    <Grid container sx={{p:"10px 0px"}}>
                        <Grid item xs={4} sx={{ display: "flex", justifyContent: "space-around" }}>
                            <Grid container>
                                <Grid item xs={6} sx={{ display: "flex", justifyContent: "right" }}>

                                    <Box sx={{ userSelect: 'none', height: "60px", width: { lg: "100px", xs: "100px", md: '80px' }, bgcolor: "white", borderRadius: '10px', position: "relative" }} onClick={() => { router.push('/home') }}>
                                        <Image sizes="" src={logo} alt='pic' fill style={{ cursor: "pointer", objectFit: "cover" }} />
                                    </Box>

                                </Grid>
                                <Grid item xs={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Box sx={{ height: "fit-content" }}>
                                        <FacebookOutlinedIcon sx={{ mr: "10px",color:"white" }} />
                                        <InstagramIcon sx={{ mr: "10px", mt: "2px",color:"white" }} />
                                        <TwitterIcon sx={{ color: "black", fontSize: "22px", bgcolor: "white", borderRadius: "50px" }} />

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



                    <Grid container >
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

                                                            <Box key={index} sx={{ mt: "18px", cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "space-between" }} onMouseEnter={() => { handleHoverControl({ ...ele }) }} onMouseLeave={handleRemoveHover} onClick={() => { handleClickControl({ ...ele }) }}>
                                                                <Typography sx={{ display: "flex", alignItems: "center", fontSize: "15px", fontWeight: "800" }}>
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
                </Grid>
        



            
            <Grid ref={elementRef2} container sx={{ position: isTouchingTop == true ? "sticky" : "static", top: "0px",bgcolor: "black", height:"70px",display: { lg: "none", md: "none", sm: "flex", xs: "flex" },zIndex:9999999,justifyContent: "center" }}>
                <Grid item xs={11.5} sm={11} sx={{ zIndex: 1, bgcolor: THEME_COLOR, display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>

                    <Box >
                        <MenuOutlinedIcon sx={{ fontSize: { xs: '22px', sm: '25px', md: '29px', lg: '35px' }, color: "white" }} onClick={() => { setOpen(true) }} />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                        <Box sx={{ userSelect: 'none', cursor: 'pointer', width: { lg: '100px', xs: '70px', md: '85px', sm: '75px' }, bgcolor: 'white', borderRadius: '10px', height: "40px", position: "relative" }} onClick={() => { router.push('/home') }}>
                            <Image src={logo} alt='pic' sizes="" fill style={{ cursor: "pointer", objectFit: "cover" }} />
                        </Box>
                    </Box>

                    <Box>
                        <PersonOutlineOutlinedIcon sx={{ mr: '3px', fontSize: '25px', fontWeight: '100', mt: '-3px', color: "white" }} onClick={functionOpenDrawer} />
                    </Box>
                </Grid>
            </Grid>
            <Grid container sx={{ display: { lg: "none", md: "none", sm: "flex", xs: "flex" }, justifyContent: "center", alignItems: 'center', bgcolor: "black", pt: "8px", pb: "8px" }}>
                <Grid xs={11.5} sm={11} item sx={{ position: 'relative', border: '2px solid #757575', display: 'flex', alignItems: 'center', height: '35px', width: '100%' }}>
                    <Box sx={{ borderLeft: "2px solid #757575", height: "100%", display: "flex", alignItems: "Center" }}>
                        <input placeholder='Type here...' style={{ background: "none", outline: "none", paddingLeft: "10px", border: "none", color: "whitesmoke" }} />
                    </Box>
                    <Box sx={{ position: 'absolute', right: '0px' }}>
                        <SearchIcon sx={{ mr: '10px', fontSize: '25px', fontWeight: '300' }} />
                    </Box>
                </Grid>
            </Grid>


            <SideDrawer open={open} setOpen={setOpen} />
            <RightSideDrawer rightOpen={rightOpen} setRightOpen={setRightOpen} />
            <WishlistDrawer wishListopen={wishListopen} setWishListopen={setWishListopen} />
            <MyCartDrawer cartOpen={cartOpen} setCartOpen={setCartOpen} />


        </>
    )
}

export default Header





