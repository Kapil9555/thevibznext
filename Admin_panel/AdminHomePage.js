'use client'
import { THEME_COLOR } from '@/Styles/ConstantStyle'
import { Box, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

const AdminHomePage = () => {
    const router=useRouter()
    const cards = [{title:"Active Orders",route:"adminactiveorder"},{ title:"User Card",route:"adminusercard"}, {title:"All Users",route:"adminalluser"},{ title:"Product Categories",route:"adminproductcategroies"},{ title:"Sale Card",route:"adminsalecard"}, {title:"Coming Soon...",route:"comingsoon"}, {title:"Coming Soon...",route:"comingsoon"}, {title:"Coming Soon...",route:"comingsoon"}]
   
    const handlePageChange=(ele)=>{
        router.push(`${ele}`)
    }
    // console.log("kapil")

    return (
        <>
            <Box sx={{ display: "flex", height: "10vh", bgcolor: THEME_COLOR, justifyContent: "center", alignItems: "center", width: "100%" }}>
                <Typography sx={{ fontSize: "30px", fontWeight: "900", color: "white" }}>
                    Admin DashBoard
                </Typography>
            </Box>
            <Grid container sx={{ bgcolor:"#eeeeee",p:"10px",height:"90vh",alignItems:"center" }}>
                {
                    cards.map((ele,index) => {
                        return (
                            <Grid key={index} item xs={2.8} sx={{m:"10px"}}>
                                <Box sx={{ "&:hover":{bgcolor:THEME_COLOR,color:"#18ffff",border:"3px solid #18ffff"},bgcolor:"white",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",border: `3px solid ${THEME_COLOR}`, height: "200px", borderRadius: "12px", overflow: "hidden" }} onClick={()=>{handlePageChange(ele.route)}}>
                                   <Typography sx={{fontSize:"20px",fontWeight:"900"}}>{ele.title}</Typography>
                                </Box>
                            </Grid>
                        )
                    })
                }

            </Grid>
        </>
    )
}

export default AdminHomePage