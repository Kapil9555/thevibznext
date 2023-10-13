import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { megaMenuClothesData } from '../constantMapData'
import { FAMILY } from '../Styles/ConstantStyle'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const MegaMenuClothes = () => {
    const router=useRouter()
    const [ data,setData]=useState(megaMenuClothesData)
    const [ blurrShow,setBlurrShow]=useState("")
    

    const handlePageChange =(id)=>{
      router.push(`/shoppage/${id}`)
    }
  return (
    <>
        <Grid container sx={{justifyContent:"center"}}>
        {
            data.map((ele,index)=>{
                return(
                    <Grid key={index} item lg={2.5} md={3} sx={{height: "100%" ,pt:"7px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                       <Box sx={{width:{lg:"262px",md:"240px"},cursor:"pointer",height: "100%",opacity:blurrShow==ele.title?1:0.8}} onClick={()=>{handlePageChange(ele.id)}} onMouseEnter={() => {setBlurrShow(ele.title) }}>
                         <Box sx={{position:"relative",height:"254px"}}>
                           <Image src={ele.img.src} fill objectFit='cover'/>
                         </Box>
                         <Box >
                            <Typography align='center' sx={{fontSize:"15px",fontWeight:"800",color:"black",mt:"8px"}}>
                            {ele.title}
                            </Typography>
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

export default MegaMenuClothes