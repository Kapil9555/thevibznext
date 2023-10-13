'use client';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import {  GRAY_TYPO, GREY_TITLE } from '../Styles/ConstantStyle';
import FollowUS from '../components/FollowUS';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { globalContext } from '@/Global/VibzContext';
import { useRouter } from 'next/navigation';




const AllCategories = () => {

   const router=useRouter()

    const {state}=useContext(globalContext)
    const [singleCat,setSingleCat]=useState([])


    useEffect(()=>{
        getData();
        setSingleCat(getData())
    },[])


   const getData=()=>{
        const uniqueItem=[...new Set(state.mainState.map((item)=>item.catName))]

     const numItem = uniqueItem.map((ele)=>{

           const lengthItem=state.mainState.filter((item)=>{
            return(
                item.catName==ele
            )
           }).length;

           const catId=state.mainState.filter((item)=>{
            return(
                item.catName==ele
            )
           })[0].cat_Id;
        

           const img=state.mainState.filter((elem)=>{
               return(
                elem.catName==ele
               )
           })[0].magnifyImg[0].img;
           
          
           return({lengthCat:lengthItem,imgCat:img,myCat:ele,catID:catId});
      
       
        })

        return numItem ; 
    }

    const handlePageChange=(id)=>{
        router.push(`/shoppage/${id}`)
    }
    
    

  return (
    <>
    <Header/>
    <Container maxWidth disableGutters>
        
        <Grid container sx={{mt:"175px"}}>
        <Grid item xs={12}>
            <Box sx={{height:"60px",bgcolor:"#eeeeee"}}>

            </Box>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: "15px" }}>
            <Box  sx={{ width: { lg: "90%", md: "90%", sm: "90%", xs: "100%" } }}>
                
            <Grid container sx={{justifyContent:"center"}}>
                                {
                                    singleCat.map((ele,index) => {
                                        return (
                                            <Grid key={index} item lg={3} md={4} sm={6} xs={12} sx={{ cursor: "pointer" }}>
                                                <Box sx={{ m: "15px", mt: "20px",backgroundImage:`url(${ele.imgCat.src})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height:{lg:"430px",md:"430px",sm:"470px",xs:"550px"} }} onClick={()=>{handlePageChange(ele.catID)}}>

                                                </Box>
                                                <Box>
                                                    <Typography align='center' sx={{ mt: "10px", textTransform: "uppercase", letterSpacing: "-0.5px", fontSize:"16px", fontWeight: "900"}}>
                                                        {ele.myCat}
                                                    </Typography>
                                                    <Typography sx={{textAlign:"center",fontSize:GREY_TITLE,color:GRAY_TYPO}}>
                                                       {`${ele.lengthCat} Products` }
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }

            </Grid>

                <Box sx={{mt:"40px"}}>
                   <Typography sx={{borderTop:"1px solid #bdbdbd",pt:"8px",fontSize:"17px",letterSpacing:"-1px",fontWeight:"900",width:"fit-content"}}>
                    SHARE THIS:
                   </Typography>
                   <Button variant='outlined' sx={{mt:"10px",mr:"15px",border:"1px solid #bdbdbd",color:"black","&:hover":{border:"1px solid #bdbdbd"}}}>
                     <TwitterIcon sx={{mr:"5px"}}/> Twitter
                   </Button>
                   <Button variant='outlined' sx={{mt:"10px",border:"1px solid #bdbdbd",color:"black","&:hover":{border:"1px solid #bdbdbd"}}}>
                     <FacebookOutlinedIcon sx={{mr:"5px"}}/> Facebook
                   </Button>
                 </Box>
            </Box>
        </Grid>
         
         
        </Grid>
        
        <FollowUS/>
    </Container>
    <Footer/>
       
       
    </>
  )
}

export default AllCategories