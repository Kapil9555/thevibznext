'use client'
import { globalContext } from '@/Global/VibzContext'
import { THEME_COLOR } from '@/Styles/ConstantStyle'
import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import ProductCatModal from './AdminProductCatModal'
import EditProductCatModal from './adminProductCatDataEdit'

const AdminProductCategories = () => {
    const router=useRouter()
    const {state,dispatch,setCatIDU}=useContext(globalContext)
    const [open, setOpen]=useState(false)
    const [editOpen, setEditOpen]=useState({ open:false,id:"" ,catName:"",isCatAvailable:false,})
    const [mainApi, setMainApi] = useState([]);
    

  

    useEffect(() => {
        setMainApi(filterData());
      }, []);
    
      
      const filterData = () => {
          const allCat = [...new Set(state.mainState.map((ele) => ele.catName))];
          const filteredApi = allCat.map((ele) => {
          const catAvailable = state.mainState.filter((item) => item.catName === ele);
          const isMyCatAvailable = catAvailable.map((ele) => ele.isCatAvailable);
          return { myCatLength: catAvailable.length, myCatAvailable: isMyCatAvailable, myCatName: ele,cat_ID:catAvailable[0].cat_Id };
        });
        return filteredApi;
      };
    
      const handleDeleteCat = (item) => {

        const itemDelete = state.mainState.filter((ele) => ele.catName != item);

        dispatch({
            type:"DELETECATEGORY",
            payload:(itemDelete)
        })
        
      };

    

    // console.log(mainApi)
    const handleOpen = () =>setOpen(true)
        
    const handlePageChange =(ele)=>{
        console.log(ele)
        setCatIDU(ele)
        router.push(`/adminproductsec/${ele.cat_ID}`)
        
    }

    const handleEditCat =(item)=>{
       const value = state.mainState.filter((ele)=>{ return ele.cat_Id==item})
       const isCatAvailableVal=value.map((item)=>{ return item.isCatAvailable})
        setEditOpen({
            open:true,
            id:item,
            catName:value[0].catName,
            isCatAvailable:isCatAvailableVal.every(val=>val==true)?true:false
        })
    }  
// console.log(state.mainState)

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
                   Product Categories
                </Typography>
                </Grid>
               
               
            </Grid>
            <Grid container sx={{  }}>
            <Grid item xs={12}>
                <Box sx={{p:"15px",bgcolor:"#e0e0e0"}}>
                <Typography align='center' sx={{ fontSize: "25px", fontWeight: "900",color:THEME_COLOR,cursor:"pointer" }} >
                   Product Categories
                </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{p:"15px"}}>
                <Box sx={{display:"flex",justifyContent:"right"}}>
                    <Button onClick={handleOpen} sx={{bgcolor:THEME_COLOR,color:"white",'&:hover':{bgcolor:THEME_COLOR},fontSize:"14px",fontWeight:"600"}}>
                        add new Categories
                    </Button>
                    <EditProductCatModal open={editOpen} setOpen={setEditOpen} />
                    <ProductCatModal open={open} setOpen={setOpen}/>  
                </Box>
            </Grid>
            <Grid item xs={12} sx={{}}>
                <Table container={"true"} component={Paper}>
                    <Table  aria-label="sticky table">
                        <TableHead  >
                            <TableRow  sx={{backgroundColor:THEME_COLOR}}>
                                <TableCell align='center' sx={{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"}}>
                                    S.N
                                </TableCell>
                                <TableCell align='center' sx={{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"}}>
                                    Cat Name
                                </TableCell>
                                <TableCell align='center' sx={{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"}}>
                                   Is Available
                                </TableCell>
                                <TableCell align='center' sx={{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"}}>
                                    No. of Item
                                </TableCell>
                                <TableCell align='center' sx={{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"}}>
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            mainApi.map((ele,index)=>{
                                return(
                                    <TableRow key={index}>
                                    <TableCell align='center' sx={{cursor:"pointer"}}>{index}</TableCell>
                                <TableCell align='center' sx={{cursor:"pointer"}} onClick={()=>{handlePageChange(ele)}}>
                                       {
                                        ele.myCatName
                                       }
                                </TableCell>
                                <TableCell align='center' sx={{cursor:"pointer"}}>
                                        {ele.myCatAvailable.every(cat => cat === true) ? 'true' : 'false'}
                                </TableCell>
                                <TableCell align='center' sx={{cursor:"pointer"}}>
                                    {ele.myCatLength-1}
                                </TableCell>
                                <TableCell align='center' sx={{cursor:"pointer"}}>
                                    <Box>
                                        <Button variant='contained' sx={{bgcolor:THEME_COLOR,"&:hover":{bgcolor:THEME_COLOR},p:"3px 0px",fontSize:"12px",mr:"10px"}} onClick={()=>{handleEditCat(ele.cat_ID)}}>edit</Button>
                                        <Button variant='contained' sx={{bgcolor:"red","&:hover":{bgcolor:"red"},p:"3px 0px",fontSize:"12px"}} onClick={()=>{handleDeleteCat(ele.myCatName)}}>delete</Button>
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

export default AdminProductCategories