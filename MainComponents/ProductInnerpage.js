'use client'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Grid, Paper, Skeleton, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import ViewCompactOutlinedIcon from '@mui/icons-material/ViewCompactOutlined';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import productimg from '../assets/couple1.webp';
import sale from '../assets/sale.jpg';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Image from 'next/image'
import { globalContext } from '@/Global/VibzContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FollowUS from '@/components/FollowUS';
import { useParams, useRouter } from 'next/navigation';
import { SALE_COLOR, THEME_COLOR } from '@/Styles/ConstantStyle';
import FloatingButtons from '@/components/FloatingButtons';





const ProductInnerPage = () => {
    const params = useParams()
    const router=useRouter()
    const { state } = useContext(globalContext)

    const [value, setValue] = useState([667, 1499]);
    const [categories, setCategories] = useState([]);
    const [showTypo, setShowTypo] = useState(false)
    const [cardShow, setCardShow] = useState("")
    const [showProducts, setShowProducts] = useState([])
    const [colorTypo,setColorTypo]=useState("")

    const [arrange, setArrange] = useState({
        width: '100%',
        widthlg: '100%',
        widthmd: '100%',
        widthsm: '100%',
        widthxs: '100%',
        height: '322px',
        heightlg: '360px',
        heightmd: '270px',
        heightsm: '480px',
        heightxs: '245px',
        lg: 2.8,
        md: 3,
        sm: 6,
        xs: 6

    })

    const skeletonArr = new Array(12).fill(1)
  

    useEffect(() => {

        if (params.shop !='shop') {
            const showProductsData = state.mainState.filter((ele) => ele.cat_Id == params.shop);
            setShowProducts(showProductsData);
            setColorTypo(params.shop);
        }
        if (params.shop =='shop'){
            setShowProducts(state.mainState);
        };


        const uniqueItem=[...new Set(state.mainState.map((item)=>item.catName))]
        setCategories([...new Set(uniqueItem)]);
        
         const data=  uniqueItem.map((item)=>{

            const catID=state.mainState.filter((ele)=>{
                return ele.catName ==item;
            })[0].cat_Id;

            return {cID:catID,cNAME:item }
        })
        setCategories(data)
    }, []);



    function valuetext(value) {
        return `${value}°C`;
    }




const boxSizeHandler = (ele) => {
        if (ele === 'six') {
            setArrange({
                width: '100%',
                widthlg: '100%',
                widthmd: '90%',
                widthsm: '90%',
                widthxs: '100%',
                height: '490px',
                heightlg: '600px',
                heightmd: '480px',
                heightsm: '380px',
                heightxs: '245px',
                lg: 6,
                md: 6,
                sm: 6,
                xs: 6
            })
            setShowTypo(false)
        }
        if (ele === 'four') {
            setArrange({
                width: '100%',
                widthlg: '100%',
                widthmd: '90%',
                widthsm: '90%',
                widthxs: '100%',
                height: '500px',
                heightlg: '450px',
                heightmd: '370px',
                heightsm: '480px',
                heightxs: '245px',
                lg: 4,
                md: 4,
                sm: 6,
                xs: 6
            })
            setShowTypo(false)
        }
        if (ele === 'three') {
            setArrange({
                width: '100%',
                widthlg: '100%',
                widthmd: '100%',
                widthsm: '100%',
                widthxs: '100%',
                height: '322px',
                heightlg: '322px',
                heighttmd: '270px',
                heightsm: '480px',
                heightxs: '245px',
                lg: 2.9,
                md: 3,
                sm: 6,
                xs: 6
            })
            setShowTypo(false)
        }
        if (ele === 'twelve') {
            setArrange({
                width: '100%',
                widthlg: '60%',
                widthmd: '60%',
                widthsm: '60%',
                widthxs: '100%',
                height: '322px',
                heightlg: '600px',
                heighttmd: '520px',
                heightsm: '300px',
                heightxs: '245px',
                lg: 6,
                md: 6,
                sm: 6,
                xs: 6
            })
            setShowTypo(true)
        }
        else {

        }


    }




    const handleShowProducts = (item) => {

        const filterObj = state.mainState.filter((ele) => {
            return (
                ele.cat_Id == item
            )
        })
        setShowProducts(filterObj)
        setColorTypo(item)
    }

    // console.log(showProducts)
    const handleProductControl =(ele)=>{
        router.push(`/userproductpage/${ele}`)
    }
    
console.log(params.shop)

    return (
        <>
            <Header />
            {/* <HomePage /> */}

            <Grid container sx={{ mt: "180px" }}>
                <Grid item xs={12} sx={{ bgcolor: '#f5f5f5', display: 'flex', justifyContent: 'center', alignItems: 'center', p: '8px' }}>
                    <Typography sx={{ color: 'grey', fontSize: '15px' }}>Home</Typography>
                    <KeyboardArrowRightIcon sx={{ color: '#bdbdbd', fontSize: '18px', mb: '2px' }} />
                    <Typography sx={{ color: '#bdbdbd', fontSize: '15px' }}>Shop</Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', p: '25px 0px 0px 0px' }}>
                    <Typography sx={{ fontSize: '30px', fontWeight: '900', textTransform: 'uppercase', }}>our top categories</Typography>
                </Grid>

                {/* filter and products  */}
                <Grid container >
                    {/* filter  */}
                    <Grid item xs={2.4} sx={{ p: '0px 10px 0px 15px', display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' } }}>
                        <Grid container>
                            <Grid item xs={12} >
                                <Accordion elevation={0} >
                                    <AccordionSummary sx={{ borderBottom: '1px solid #e0e0e0', }}
                                        expandIcon={<ExpandMoreIcon sx={{ border: '1.5px solid grey', borderRadius: '50%' }} />}

                                    >
                                        <Typography sx={{ fontSize: { lg: '12px', md: '11px' }, fontWeight: '700', }}>SEARCH</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ border: '1.5px solid #212121', mt: '20px', p: '0px', width: '100%' }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>


                                            <Box sx={{ width: { lg: '60%', md: '60%' }, p: '0px 0px 0px 5px' }}>
                                                <input placeholder='Search product..' type='text' style={{ border: 'none', outline: 'none', fontSize: '15px' }} />

                                            </Box>
                                            <Box sx={{ width: { lg: '20%', md: '20%' }, ml: { lg: '20px', md: '35px' }, p: '0px 8px 0px 8px', bgcolor: '#212121', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <SearchOutlinedIcon sx={{ m: '3px', color: 'white' }} />
                                            </Box>
                                        </Box>


                                    </AccordionDetails>
                                </Accordion>

                                <Accordion elevation={0} expanded>
                                    <AccordionSummary sx={{ borderBottom: '1px solid #e0e0e0', }}
                                        expandIcon={<ExpandMoreIcon sx={{ border: '1.5px solid grey', borderRadius: '50%' }} />}

                                    >
                                        <Typography sx={{ fontSize: { lg: '12px', md: '10.5px' }, fontWeight: '700', }}>PRODUCT CATEGORIES</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ mt: '15px', p: '0px' }}>

                                        <Grid container sx={{ p: '0px 0px 0px 10px' }}>
                                            {
                                                categories.map((ele, index) => {
                                                    console.log(ele)
                                                    return (
                                                        <Grid key={index} item xs={12}>
                                                            <Typography sx={{ color:colorTypo==ele.cID?"black":'gray', cursor: "pointer", lineHeight: '30px', fontSize: { lg: '16px', md: '15px' } }} onClick={() => { handleShowProducts(ele.cID) }}>
                                                                {ele.cNAME} (
                                                                {
                                                                    state.mainState.filter((item) => {
                                                                        return (item.catName==ele.cNAME)
                                                                    }).length
                                                                }
                                                                )
                                                            </Typography>



                                                        </Grid>
                                                    )
                                                })
                                            }


                                        </Grid>


                                    </AccordionDetails>
                                </Accordion>





                                <Accordion elevation={0} >
                                    <AccordionSummary sx={{ borderBottom: '1px solid #e0e0e0', }}
                                        expandIcon={<ExpandMoreIcon sx={{ border: '1.5px solid grey', borderRadius: '50%' }} />}
                                    >
                                        <Typography sx={{ fontSize: { lg: '12px', md: '10.5px' }, fontWeight: '700', }}>PRODUCT STATUS</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ mt: '20px', p: '0px' }}>

                                        <Box sx={{ width: '100%', p: '0px 8px 0px 8px' }}>
                                            <Box sx={{ width: '100%', height: '20px' }}>
                                                <Slider
                                                    getAriaLabel={() => 'Temperature range'}
                                                    value={value}
                                                    onChange={()=>{setValue(newValue)}}
                                                    valueLabelDisplay="auto"
                                                    getAriaValueText={valuetext}
                                                    size='small'
                                                    sx={{ color: 'black', }}
                                                />
                                            </Box>
                                            <Box sx={{ display: 'flex', display: 'flex', justifyContent: 'left', alignItems: 'center', pt: '20px' }}>
                                                <Typography sx={{ fontSize: '16px', color: 'grey' }}>Price:</Typography>
                                                <Typography sx={{ fontSize: '13px', ml: '3px' }}>₹649 — ₹1,499</Typography>
                                            </Box>

                                        </Box>



                                    </AccordionDetails>
                                </Accordion>

                                <Accordion elevation={0} >
                                    <AccordionSummary sx={{ borderBottom: '1px solid #e0e0e0', }}
                                        expandIcon={<ExpandMoreIcon sx={{ border: '1.5px solid grey', borderRadius: '50%' }} />}

                                    >
                                        <Typography sx={{ fontSize: { lg: '12px', md: '10.5px' }, fontWeight: '700', }}>FILTER BY PRICE</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ mt: '20px', p: '0px' }}>

                                        <Box sx={{ width: '100%', p: '0px 8px 0px 8px' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Checkbox size='small' />
                                                <Typography sx={{ fontSize: { lg: '16px', md: '12px' }, color: 'grey' }}>In Stock (232)</Typography>
                                            </Box>

                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Checkbox size='small' />
                                                <Typography sx={{ fontSize: { lg: '16px', md: '12px' }, color: 'grey' }}>Out of Stock (232)</Typography>
                                            </Box>

                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Checkbox size='small' />
                                                <Typography sx={{ fontSize: { lg: '16px', md: '12px' }, color: 'grey' }}>On sale (232)</Typography>
                                            </Box>

                                        </Box>



                                    </AccordionDetails>
                                </Accordion>


                                <Accordion elevation={0} >
                                    <AccordionSummary sx={{ borderBottom: '1px solid #e0e0e0', }}
                                        expandIcon={<ExpandMoreIcon sx={{ border: '1.5px solid grey', borderRadius: '50%', }} />}
                                    >
                                        <Typography sx={{ fontSize: { lg: '12px', md: '10.5px' }, fontWeight: '700', }}>RECENTLY VIEWED PRODUCTS</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ mt: '20px', p: '0px' }}>

                                        <Grid container sx={{ display: 'flex', justifyContent: { lg: 'space-evenly', md: 'space-evenly' }, alignItems: 'flex-start', }}>
                                            <Grid item lg={3.8} md={3.5} sx={{ width: '100%', height: '100%' }} >
                                                <Box sx={{ width: { lg: '90px', md: '70px', }, height: '100px', position: 'relative', mr: { lg: '4px', md: '15px' } }}>
                                                    <Image src={productimg} alt='product' fill styele={{ objectFit: 'cover' }} sizes="(min-width: 808px) 50vw, 100vw" />
                                                </Box>

                                            </Grid>
                                            <Grid item lg={4} md={3}  >
                                                <Typography sx={{ fontWeight: '800', fontSize: { lg: '11px', md: '10px' } }}>3D MIRROR...</Typography>
                                                <Typography ><del style={{ color: 'grey', fontSize: { lg: '15px', md: '13px' } }}>₹1,799.00</del></Typography>
                                                <Typography sx={{ fontSize: { lg: '15px', md: '13px' } }}>₹1,299.00</Typography>

                                            </Grid>
                                        </Grid>



                                    </AccordionDetails>
                                </Accordion>



                            </Grid>

                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '20px' }}>
                                <Box sx={{ backgroundImage: `url(${sale.src})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', height: { lg: '272px', md: '200px' }, width: '192px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', borderRadius: '2px' }}>
                                    <Typography sx={{ fontSize: { lg: '31px', md: '23px' }, color: 'white', fontWeight: '800', mb: '10px', textAlign: 'center' }}>FREE SHIPPING</Typography>
                                    <Typography sx={{ fontSize: { lg: '23px', md: '20px' }, color: 'white', mb: '7px' }}>HURRY UP!!!</Typography>

                                    <Box sx={{ width: '85%', borderRadius: '2px', mt: '3px', height: '41px', bgcolor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Typography sx={{ fontSize: { lg: '13px', md: '10px' }, fontWeight: '600' }}>SHOP SKINNY JEANS</Typography>

                                    </Box>

                                </Box>


                            </Grid>
                        </Grid>


                    </Grid>
                    <Grid item lg={9.6} md={9.6} sm={12} xs={12} >
                        <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: '11px', pl: { lg: '0px', md: '0px', sm: '10px', xs: '10px' } }}>
                            <Grid item lg={5} md={5} sm={6} xs={7} sx={{ height: '29px' }}>
                                <Box sx={{ width: '100%', heiht: '100%', display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
                                    <Box sx={{ width: { lg: '45%', md: '45%', sm: '60%', xs: '75%' }, border: '1.5px solid grey', borderRadius: '3px', p: '2px 0px' }}>
                                        <select style={{ width: '100%', height: '100%', background: 'none', border: 'none', outline: 'none', textAlign: 'center', color: '#bdbdbd', fontFamily: 'arial' }}>
                                            <option style={{ color: '#bdbdbd' }}>Default sorting</option>
                                            <option style={{ color: '#bdbdbd' }}>Sort by popularity</option>
                                            <option style={{ color: '#bdbdbd' }}>Sort by averagee rating</option>
                                            <option style={{ color: '#bdbdbd' }} >Sort by latest</option>
                                            <option style={{ color: '#bdbdbd' }}>Sort by price: low to high</option>
                                            <option style={{ color: '#bdbdbd' }}>Sort by price: high to low</option>

                                        </select>

                                    </Box>
                                    <Box sx={{ width: '50%', display: { lg: 'flex', md: 'flex', sm: 'none', xs: 'none' } }}>
                                        <Box sx={{ width: '35px', height: '100%', borderRight: '1px solid #eeeeee', textAlign: 'center' }}>
                                            <GridViewOutlinedIcon sx={{ color: '#9e9e9e', cursor: 'pointer', fontSize: '22px' }} onClick={() => { boxSizeHandler('six') }} />

                                        </Box>
                                        <Box sx={{ width: '35px', height: '100%', textAlign: 'center', borderRight: '1px solid #eeeeee' }}>
                                            <GridOnOutlinedIcon sx={{ color: '#9e9e9e', cursor: 'pointer', fontSize: '22px' }} onClick={() => { boxSizeHandler('four') }} />

                                        </Box>
                                        <Box sx={{ width: '35px', height: '100%', textAlign: 'center', borderRight: '1px solid #eeeeee' }}>
                                            <ViewCompactOutlinedIcon sx={{ color: '#9e9e9e', cursor: 'pointer', fontSize: '22px' }} onClick={() => { boxSizeHandler('three') }} />

                                        </Box>
                                        <Box sx={{ width: '35px', height: '100%', textAlign: 'center', borderRight: '1px solid #eeeeee' }}>
                                            <TableRowsOutlinedIcon sx={{ color: '#9e9e9e', cursor: 'pointer', fontSize: '22px' }} onClick={() => { boxSizeHandler('twelve') }} />

                                        </Box>
                                        <Box sx={{ width: '35px', height: '100%', textAlign: 'center', }}>
                                            <KeyboardArrowDownOutlinedIcon sx={{ color: '#9e9e9e', cursor: 'pointer', fontSize: '22px' }} />

                                        </Box>


                                    </Box>

                                </Box>

                            </Grid>
                            <Grid item lg={3} md={3} sm={4} xs={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Typography sx={{ color: '#757575' }}>Show</Typography>
                                <Box sx={{ width: { lg: '30%', md: '30%', sm: '40%', xs: '100%' }, border: '1.5px solid grey', ml: '12px', borderRadius: '3px', mr: '20px' }}>

                                    <select style={{ width: '100%', height: '100%', background: 'none', border: 'none', outline: 'none', textAlign: 'center', color: '#bdbdbd' }}>
                                        <option style={{ color: '#bdbdbd' }}>12</option>
                                        <option style={{ color: '#bdbdbd' }}>20</option>
                                        <option style={{ color: '#bdbdbd' }}>28</option>
                                        <option style={{ color: '#bdbdbd' }} >All</option>


                                    </select>

                                </Box>

                            </Grid>
                        </Grid>

                        {/* product map start  */}

                        
                        {
                           
                            showProducts.length <1
                               &&
                                <Grid container sx={{  mt: '8px', p: '8px 8px', justifyContent: 'space-between', alignItems: 'flex-start' }} >
                                    {
                                        skeletonArr.map((ele, index) => {
                                            return (
                                                <Grid item key={index} lg={arrange.lg} md={arrange.md} sm={arrange.sm} xs={arrange.xs} sx={{ cursor: "pointer", mt: "15px" }}  >
                                                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "95%" }}>
                                                        <Skeleton variant="rectangular" sx={{ width: "100%", height: { lg: "350px", md: "220px", sm: "170px", xs: "230px" } }} />
                                                        <Skeleton sx={{ width: "100%", height: "20px" }} />
                                                        <Skeleton sx={{ width: "100%", height: "20px" }} />
                                                        <Skeleton sx={{ width: "100%", height: "20px" }} />
                                                        <Skeleton sx={{ width: "100%", height: "20px" }} />
                                                    </Box>
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                        }
                        
                           { showProducts.length >1 &&
                             <Grid container sx={{ mt: '8px', p: '0px 8px', justifyContent: 'space-between', alignItems: 'flex-start' }} spacing={2}>
                                    {
                                        showProducts.map((ele, index) => {
                                            
                                            return (
                                                <Grid item key={index} lg={arrange.lg} md={arrange.md} sm={arrange.sm} xs={arrange.xs} sx={{ cursor: "pointer" }}  onMouseEnter={() => {setCardShow(ele._id) }} onMouseLeave={()=>{setCardShow("")}} onClick={()=>{handleProductControl(ele._id)}}>
                                                    <Paper sx={{ pb: "10px", width: arrange.width }}>
                                                        <Box sx={{ height: { lg: arrange.heightlg, md: arrange.heightmd, sm: arrange.heightsm, xs: arrange.heightxs }, backgroundImage: `url(${ele.magnifyImg[0].img.src})`, backgroundSize: '100% 100%', backgroundRepeat: "no-repeat", width: "100%", position: "relative", }} >
                                                        {  ele.sale && <span style={{ backgroundColor: SALE_COLOR, top: "10px", left: "10px", padding: "5px 8px", position: "absolute" }}>
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
                                                            <Button variant='contained' sx={{ "&:hover": { bgcolor: THEME_COLOR }, fontSize: { xs: "10px" }, bgcolor: THEME_COLOR, width: { lg: "100%", md: "90%", sm: "80%", xs: "70%" } }} >QUICK VIEW</Button>
                                                        </Box>
                                                    </Box>)

                                                     }
                                                        </Box>
                                                        <Box>
                                                            <Typography align='center' sx={{ mt: "10px", textTransform: "uppercase", letterSpacing: "-0.5px", fontSize: { lg: "12px", md: "10px", sm: "15px", xs: "9px" }, fontWeight: "900", }}>
                                                                <b>{(ele.productName).slice(0, 30)}</b>

                                                            </Typography>

                                                            {

                                                                showTypo && <Typography sx={{ p: '0px 20px', color: 'grey', fontSize: { lg: '15px', md: '15px', sm: '12px', xs: '11px' }, lineHeight: { lg: '20px', md: '15px', sx: '14px', xs: '13px' } }}>{ele.details}</Typography>


                                                            }

                                                            <Typography align='center' sx={{ fontSize: { lg: "14px", md: '14px', sm: '16px', xs: '14px' }, mt: "7px" }}>
                                                                <span style={{ color: '#9e9e9e', marginRight: "5px" }}><s>{ele.orgPrice}</s></span>{ele.discPrice}
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{ display: "flex", justifyContent: "center", mt: "7px", p: "0px 8px" }}>
                                                            <Box style={{ border: `1px solid #e0e0e0`, display: "flex" }}>
                                                                <Box sx={{ height: "30px", width: "40px", fontSize: "14px", color: '#9e9e9e', display: "flex", justifyContent: "center", alignItems: "center" }}><RemoveOutlinedIcon /></Box>
                                                                <Box sx={{ height: "30px", width: "40px", fontSize: "14px", borderLeft: "1px solid #e0e0e0", borderRight: "1px solid #e0e0e0", display: "flex", justifyContent: "center", alignItems: "center" }}>1</Box>
                                                                <Box sx={{ height: "30px", width: "40px", ontSize: "14px", color: '#9e9e9e', display: "flex", justifyContent: "center", alignItems: "center" }}><AddOutlinedIcon /></Box>
                                                            </Box>
                                                            <Box sx={{ bgcolor: "#e0e0e0", height: "30px", width: "40px", ml: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}><ShoppingBagOutlinedIcon sx={{ fontWeight: "100", fontSize: "18px" }} /></Box>
                                                        </Box>
                                                    </Paper>
                                                </Grid>
                                            )
                                        })
                                    }

                                </Grid>
                            }
                    </Grid>
                </Grid>
               
                <FollowUS />
                <Footer />
            </Grid>
        </>
    )
}

export default ProductInnerPage