import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { FAMILY, GRAY_TYPO } from '../Styles/ConstantStyle';
import girl from '../assets/megaGirl.webp';
import { megaMenuAllData } from '../constantMapData';
import { useRouter } from 'next/navigation';

const MegaMenuAll = () => {
    const router=useRouter()
    const [megatData,setMegaData] = useState(megaMenuAllData)



    const handleNavigate=(id)=>{
        router.push(`/shoppage/${id}`)
      }

  return (
         <>
            <Grid container sx={{height:"100%"}}>
                                <Grid item lg={2} md={0} ></Grid>
                                <Grid item lg={1.9} md={3} >                                        
                                        <Box sx={{ height:"250px",backgroundImage:`url(${girl.src})`,cursor: "pointer",display: "flex", alignItems: "center",justifyContent:"flex-end", flexDirection: "column", width: "100%",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat" }}>
                                            <Typography sx={{ color: "white", letterSpacing: "-1px", fontSize: "15px", fontWeight: "600", }}>
                                                PERFECT YOURSELF STYLE
                                            </Typography>
                                            <Button sx={{ mt: "10px",mb:"20px", width: "130px", fontSize: "12px", letterSpacing: "-1px", fontWeight: "800", backgroundColor: "white", color: "black", "&:hover":{ bgcolor:"white"}}}>
                                                SHOP COLLECTION
                                            </Button>
                                        
                                    </Box>
                                </Grid>
                                {
                                    megatData.map((ele,index) => {
                                        return (
                                            <Grid key={index} item lg={2.5} sx={{ ml: "10px"}}>
                                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", pl: "20px" }}>
                                                    <Typography sx={{ fontSize: "13px", fontWeight: "700",color:"black",mb:"10px","&:hover":{color:"#c62828"},cursor:"pointer" }} >{ele.mainHead}</Typography>
                                                    {
                                                        ele.listData.map((ele) => {
                                                            return (
                                                                <>
                                                                    <Typography key={ele.id} sx={{ cursor: "pointer", fontSize: "13px", fontWeight: "500",color:GRAY_TYPO, mt: "5px","&:hover":{color:"black"} }} onClick={()=>{handleNavigate(ele.id)}}>{ele.title}</Typography>
                                                                </>

                                                            )
                                                        })
                                                    }

                                                    <Box sx={{ width: "90%", mt: "10px", bgcolor: "#e0e0e0", p: "15px", borderRadius: "3px", cursor: "pointer" }}>
                                                        <Typography sx={{ display: "flex", alignItems: "center", color:"black",justifyContent: "Center", fontSize: "12px", fontWeight: "600", letterSpacing: "-0.5px" }}><EmailOutlinedIcon sx={{ fontSize: "18px", mr: "5px" }} />EMAIL:INFO@THEVIBZZ.COM</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }
</Grid>
    </>
  )
}

export default MegaMenuAll