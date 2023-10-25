'use client'
import { globalContext } from '@/Global/VibzContext';
import { THEME_COLOR } from '@/Styles/ConstantStyle';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, IconButton, OutlinedInput, Typography } from '@mui/material';
import { useParams, useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';



const AdminProductEditDetails = () => {
    const router = useRouter()
    const param=useParams()

    const { dispatch,state } = useContext(globalContext)

    const [productImgRaw, setProductImgRaw] = useState({img: "" });
    
    const [adminAddNewProduct, setAdminAddNewProduct] = useState({
        _id:"",
        productName:"",
        orgPrice: "",
        discPrice: "",
        isAvailable: "",
        magnifyImg: [],
        titDesc: [{ title: "", description: "",}],
        sizeChart: { small: "", medium: "", large: "", extraLarge: "", XXL: "" },
        sizeImage: ""
    });

    

useEffect(()=>{
    const filtered=state.mainState.filter((ele)=>{
        return ele._id ==param.adminproducteditpage
    })
    setAdminAddNewProduct(...filtered)
},[])

// console.log(adminAddNewProduct.sizeChart.extraLarge)


    //  function collecting data of name mrp srp 
    const handleCollectData = (e) => {
        const { name, value } = e.target;
        setAdminAddNewProduct({ ...adminAddNewProduct, [name]: value });
    };


    // function collecting data of sizechartimage state
    const handleCollectDataCheckBox = (e) => {
        const { name, value } = e.target;
        setAdminAddNewProduct({ ...adminAddNewProduct, sizeChart: { ...adminAddNewProduct.sizeChart, [name]: value } });
    };

    // collecting size chart image
    const handleImageHandler = (e) => {
        setAdminAddNewProduct({ ...adminAddNewProduct, sizeImage: URL.createObjectURL(e.target.files[0]) });
    };


    // collecting product image
    const handleCollectProductImage = (e) => {
        setProductImgRaw({ ...productImgRaw, img: URL.createObjectURL(e.target.files[0]) });
    };


    //    showing image of products
    const handleShowImage = () => {
        if (productImgRaw.img !== "") {
            setAdminAddNewProduct({
                ...adminAddNewProduct,
                magnifyImg: [...adminAddNewProduct.magnifyImg, { img: productImgRaw.img }]
            });
        } else {
            alert("Please select Image");
        }
    };


    // adding data to state of title and description
    const handleTitDes = (e, id) => {
        const { name, value } = e.target;
        setAdminAddNewProduct(prevState => ({ ...prevState, titDesc: prevState.titDesc.map(item => item.id === id ? { ...item, [name]: value } : item) }));
    };


    //    adding more title description to fill
    const handleIncreaseTitleDes = () => {
        setAdminAddNewProduct({ ...adminAddNewProduct, titDesc: [...adminAddNewProduct.titDesc, { title: "", description: "", id: new Date().getTime() }] })
    }

    // delete any title description input
    const handleDecreaseTitleDes = (item) => {
        if (adminAddNewProduct.titDesc.length > 1) {
            const newArr = adminAddNewProduct.titDesc.filter((ele) => {
                return ele.id !== item
            })
            setAdminAddNewProduct({ ...adminAddNewProduct, titDesc: newArr })
        }
        else {
            alert("You have to add atleast one title,description")
        }
    }

    // adding category to mainState
    const handleAddCategory = () => {
        if (
            adminAddNewProduct.productName == "" || adminAddNewProduct.orgPrice == "" || adminAddNewProduct.discPrice == "" || 
            adminAddNewProduct.isAvailable == "" || adminAddNewProduct.magnifyImg.length == 0 || adminAddNewProduct.titDesc[0].title == "" ||
            adminAddNewProduct.titDesc[0].description == "" || adminAddNewProduct.sizeImage == "")
            {

            alert("please fill the required fields")

        }
        else {
            const filteredData=state.mainState.map((ele)=>{ if(ele._id==adminAddNewProduct._id){return adminAddNewProduct}else{ return ele}  })
                        console.log(filteredData)
            dispatch({
                type: "EDITPRODUCT",
                payload: (filteredData)
            })
            // router.push(`/adminproductsec/${adminAddNewProduct.cat_Id}`)
        }

    }

    
    return (
        <>
            <Grid container sx={{ justifyContent: "center", overflow: "scroll", pb: "15px" }}>
                <Grid item xs={6} sx={{ border: "1px solid gray" }}>
                    <Grid container>

                        <Grid item xs={12} sx={{ mb: "15px" }}>

                            <Typography align='center' sx={{ bgcolor: THEME_COLOR, color: "white", p: "10px", fontSize: "14px", fontWeight: "700" }}> Add New Product</Typography>
                        </Grid>


                        <Grid container sx={{ p: "10px" }}>


                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography sx={{ fontSize: "17px" }}>Product Name:</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                                <OutlinedInput sx={{ height: "30px", width: "100%" }} name='productName' value={adminAddNewProduct.productName} onChange={(e) => { handleCollectData(e) }} />
                            </Grid>



                            <Grid item xs={12} sx={{ mt: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography sx={{ fontSize: "17px" }}>M.R.P:</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                                <OutlinedInput sx={{ height: "30px", width: "100%" }} name='orgPrice' value={adminAddNewProduct.orgPrice} onChange={(e) => { handleCollectData(e) }} />
                            </Grid>



                            <Grid item xs={12} sx={{ mt: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography sx={{ fontSize: "17px" }}>S.R.P:</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                                <OutlinedInput sx={{ height: "30px", width: "100%" }} name='discPrice' value={adminAddNewProduct.discPrice} onChange={(e) => { handleCollectData(e) }} />
                            </Grid>



                            <Grid item xs={12} sx={{ mt: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography sx={{ fontSize: "17px" }}>Sizes:</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                                <Box >
                                    <FormControl component="fieldset">

                                        <FormGroup aria-label="position" row>
                                            <FormControlLabel
                                               checked={adminAddNewProduct.sizeChart.small==true?true:false}
                                                control={<Checkbox size='small'   name='small'  sx={{ ml: "4px", p: "4px" }} onChange={(e) => { handleCollectDataCheckBox(e) }} />}
                                                label={<Typography sx={{ mt: "4px", fontSize: "16px", fontWeight: "700" }}>S</Typography>}
                                                labelPlacement="end"
                                            />
                                            <FormControlLabel
                                               checked={adminAddNewProduct.sizeChart.medium==true?true:false}
                                                control={<Checkbox size='small'  name='medium' sx={{ ml: "3px", p: "4px" }} onChange={(e) => { handleCollectDataCheckBox(e) }} />}
                                                label={<Typography sx={{ mt: "4px", fontSize: "16px", fontWeight: "700" }}>M</Typography>}
                                                labelPlacement="end"
                                            />
                                            <FormControlLabel
                                                checked={adminAddNewProduct.sizeChart.large==true?true:false}
                                                control={<Checkbox size='small'  name='large' sx={{ ml: "3px", p: "4px" }} onChange={(e) => { handleCollectDataCheckBox(e) }} />}
                                                label={<Typography sx={{ mt: "4px", fontSize: "16px", fontWeight: "700" }}>L</Typography>}
                                                labelPlacement="end"
                                            />
                                            <FormControlLabel
                                               checked={adminAddNewProduct.sizeChart.extraLarge==true?true:false}
                                                control={<Checkbox size='small'   name='extraLarge' sx={{ ml: "3px", p: "4px" }} onChange={(e) => { handleCollectDataCheckBox(e) }} />}
                                                label={<Typography sx={{ mt: "4px", fontSize: "16px", fontWeight: "700" }}>Xl</Typography>}
                                                labelPlacement="end"
                                            />
                                            <FormControlLabel
                                               checked={adminAddNewProduct.sizeChart.XXL==true?true:false}
                                                control={<Checkbox size='small' name='XXL' sx={{ ml: "3px", p: "4px" }} onChange={(e) => { handleCollectDataCheckBox(e) }} />}
                                                label={<Typography sx={{ mt: "4px", fontSize: "16px", fontWeight: "700" }}>XXL</Typography>}
                                                labelPlacement="end"
                                            />
                                        </FormGroup>
                                    </FormControl>

                                </Box>



                            </Grid>








                            <Grid item xs={12} sx={{ mt: "15px", pr: "7px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography sx={{ fontSize: "17px" }}>Size Guide:</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                                <Box sx={{ height: "30px", width: "100%" }}>
                                    <Typography align='center' sx={{ position: "relative", top: "0px", mt: "4px", border: "1px solid gray" }}>
                                        <input type='file' style={{ zIndex: 99, opacity: 0, position: "absolute", left: "0px", top: "0px", height: "30px", width: "100%" }} onChange={(e) => { handleImageHandler(e) }} />
                                        Choose Image
                                    </Typography>
                                </Box>
                            </Grid>





                            <Grid item xs={12} sx={{ mt: "15px", pr: "7px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography sx={{ fontSize: "17px" }}> isAvailable:</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{}}>
                                <FormGroup sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <FormControlLabel


                                        control={<Checkbox size="small" sx={{ ml: '3px', p: '4px' }} checked={adminAddNewProduct.isAvailable == true ? true : false} onChange={(e) => setAdminAddNewProduct({ ...adminAddNewProduct, isAvailable: e.target.checked })} />}
                                        label={<Typography sx={{ mt: '4px', fontSize: '16px', fontWeight: '700' }}>Yes</Typography>}
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel

                                        control={<Checkbox size="small" sx={{ ml: '3px', p: '4px' }} checked={adminAddNewProduct.isAvailable == true ? false : true} onChange={(e) => setAdminAddNewProduct({ ...adminAddNewProduct, isAvailable: !e.target.checked })} />}
                                        label={<Typography sx={{ mt: '4px', fontSize: '16px', fontWeight: '700' }}>No</Typography>}
                                        labelPlacement="end"
                                    />
                                </FormGroup>
                            </Grid>



                            <Grid item xs={12} sx={{ mt: "15px", pr: "7px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography sx={{ fontSize: "17px" }}>Choose Product Image:</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                                <Box sx={{ height: "30px", width: "100%" }}>
                                    <Typography align='center' sx={{ position: "relative", top: "0px", mt: "4px", border: "1px solid gray" }}>
                                        <input type='file' style={{ zIndex: 99, opacity: 0, position: "absolute", left: "0px", top: "0px", height: "30px", width: "100%" }} onChange={handleCollectProductImage}  />
                                        Choose Image
                                    </Typography>
                                </Box>
                                <Button variant='contained' sx={{ bgcolor: THEME_COLOR, '&:hover': { bgcolor: THEME_COLOR }, height: "25px", ml: "5px", p: "0px", mt: "3px", fontSize: "13px" }} onClick={handleShowImage} disabled={adminAddNewProduct.magnifyImg.length>4?true:false}>Add</Button>
                            </Grid>
                            <Grid container sx={{ justifyContent: "center", mt: "15px" }}>
                                {
                                    adminAddNewProduct.magnifyImg.map((ele, index) => {
                                        console.log(ele)
                                        return (
                                            <Grid item xs={2.2} key={index} sx={{ mr: "5px" }}>
                                                <Box
                                                    sx={{
                                                        height: "90px",
                                                        border: "1px solid gray",
                                                        backgroundImage: `url(${ele.img.src})`,
                                                        backgroundSize: "cover",
                                                        backgroundPosition: "center",
                                                    }}
                                                >
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }




                            </Grid>

                            <Grid item xs={12} sx={{ mt: "15px", pr: "7px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography sx={{ fontSize: "17px" }}>Describe Information:</Typography>
                            </Grid>
                            <Grid container sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                                {
                                    adminAddNewProduct.titDesc.map((ele, index) => {

                                        return (
                                            <Grid container key={index} sx={{ height: "70px", mt: "20px" }}>
                                                <Grid item xs={1} sx={{ display: "flex", alignItems: "center", justifyContent: "Center" }}>
                                                    <IconButton onClick={handleIncreaseTitleDes}>
                                                        <AddCircleOutlineOutlinedIcon sx={{ fontSize: "25px" }} />
                                                    </IconButton>
                                                </Grid>
                                                <Grid item xs={10} sx={{}}>
                                                    <OutlinedInput
                                                        placeholder="title"
                                                        name="title"
                                                        value={ele.title}
                                                        sx={{ height: '30px', width: '100%' }}
                                                        onChange={e => handleTitDes(e, ele.id)}
                                                    />
                                                    <OutlinedInput
                                                        placeholder="description"
                                                        name="description"
                                                        value={ele.description}
                                                        sx={{ height: '30px', width: '100%', mt: '10px' }}
                                                        onChange={e => handleTitDes(e, ele.id)}
                                                    />
                                                </Grid>
                                                <Grid item xs={1} sx={{ display: "flex", alignItems: "center", justifyContent: "Center" }}>
                                                    <IconButton onClick={() => { handleDecreaseTitleDes(ele.id) }}>
                                                        <CancelIcon sx={{ fontSize: "25px", color: "red" }} />
                                                    </IconButton>
                                                </Grid>
                                            </Grid>
                                        )
                                    })
                                }

                            </Grid>






                            <Grid item xs={12} sx={{ mt: "15px", display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                                <Button variant='contained' sx={{ bgcolor: THEME_COLOR, color: "white", '&:hover': { bgcolor: THEME_COLOR } }} onClick={handleAddCategory}>Edit Category</Button>
                            </Grid>
                        </Grid>

                    </Grid>


                </Grid>
            </Grid>
        </>
    )
}

export default AdminProductEditDetails