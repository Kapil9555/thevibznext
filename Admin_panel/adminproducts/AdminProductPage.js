
'use client'
import { globalContext } from '@/Global/VibzContext'
import { THEME_COLOR } from '@/Styles/ConstantStyle'
import { CleaningServices } from '@mui/icons-material'
import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { useRouter,useParams } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'


const AdminProductPage = () => {
    const param=useParams()
    const router =useRouter()
    const {state,dispatch,setProductEdit}=useContext(globalContext)
    const [showData,setShowData]=useState([])


    useEffect(()=>{
      const filteredData=state.mainState.filter((item)=>{
        return item.cat_Id == param.adminproductpage
      })
      setShowData(filteredData) 
    },[])

   

    // function for deleter product
    const handleDeleteProduct = (id) => {
        const filtered = state.mainState.filter((ele) => {
            return ele._id !== id;
        });
    
        dispatch({
            type: "DELETEPRODUCT",
            payload: filtered
        });
    }

    const handleEditPage =(id)=>{
        router.push(`/admineditproduct/${id}`)
    }

   
    return (
        <>
            <Grid container sx={{  height: "80px", bgcolor: THEME_COLOR, alignItems: "center", width: "100%" }}>
               <Grid item xs={4} sx={{}}>
               <Typography  sx={{ fontSize: "30px", fontWeight: "900", color: "white" }}>
                  Admin DashBoard
                </Typography>
               </Grid>
                
                <Grid item xs={4} sx={{display:"flex",justifyContent:"center"}}>
                <Typography sx={{ fontSize: "25px", fontWeight: "900", color: "white" }}>
                  Men Product,s
                </Typography>
                </Grid>
               
               
            </Grid>
            <Grid container sx={{  }}>
            <Grid item xs={12}>
                <Box sx={{p:"15px",bgcolor:"#e0e0e0"}}>
                <Typography align='center' sx={{ fontSize: "25px", fontWeight: "900",color:THEME_COLOR }}>
                  Men Product,s
                </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{p:"15px"}}>
                <Box sx={{display:"flex",justifyContent:"right"}}>
                    <Button onClick={() =>router.push(`/adminProductNewAdd/${param.adminproductpage}`)} sx={{bgcolor:THEME_COLOR,color:"white",'&:hover':{bgcolor:THEME_COLOR},fontSize:"14px",fontWeight:"600"}}>
                        add new product
                    </Button>
                    
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Table container={"true"} component={Paper}>
                    <Table  aria-label="sticky table">
                        <TableHead  >
                            <TableRow  sx={{backgroundColor:THEME_COLOR}}>
                                <TableCell align='center' sx={{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"}}>
                                    S.N
                                </TableCell>
                                <TableCell align='center' sx={{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"}}>
                                    Product Name
                                </TableCell>
                                <TableCell align='center' sx={{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"}}>
                                   Is Available
                                </TableCell>
                                <TableCell align='center' sx={{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"}}>
                                   ₹
                                </TableCell>
                                <TableCell align='center' sx={{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"}}>
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            showData.map((ele,index)=>{
                                return(
                                    <TableRow key={index} sx={{border:"1px solid red"}}>
                                    <TableCell align='center' sx={{cursor:"pointer"}}>{index}</TableCell>
                                <TableCell align='center' sx={{cursor:"pointer"}} onClick={()=>{router.push(`/adminproductdetails`)}}>
                                       {
                                        ele.productName
                                       }
                                </TableCell>
                                <TableCell align='center' sx={{cursor:"pointer"}}>
                                    {
                                        ele.isAvailable?"true":"false"
                                    }
                                </TableCell>
                                <TableCell align='center' sx={{cursor:"pointer"}}>
                                    <span style={{color:"green",marginRight:"7px"}}>{ele.discPrice } </span> <s style={{color:"red"}}>{ ele.orgPrice}</s>
                                </TableCell>
                                <TableCell align='center' sx={{cursor:"pointer"}}>
                                    <Box>
                                        <Button variant='contained' sx={{bgcolor:THEME_COLOR,"&:hover":{bgcolor:THEME_COLOR},p:"3px 0px",fontSize:"12px",mr:"10px"}} onClick={()=>{handleEditPage(ele._id)}}>edit</Button>
                                        <Button variant='contained' sx={{bgcolor:"red","&:hover":{bgcolor:"red"},p:"3px 0px",fontSize:"12px"}} onClick={()=>{handleDeleteProduct(ele._id)}}>delete</Button>
                                    </Box>
                                </TableCell>
                            </TableRow>
                                )
                            })
                        }
                            
                        </TableBody>
                    </Table>
                </Table>
            </Grid>
              

            </Grid>
        </>
    )
}

export default AdminProductPage