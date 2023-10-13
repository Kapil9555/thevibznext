'use client'
import { globalContext } from '@/Global/VibzContext';
import { THEME_COLOR } from '@/Styles/ConstantStyle';
import { Button, Checkbox, FormControlLabel, FormGroup, Grid, Modal, OutlinedInput, Paper, Typography } from '@mui/material';
import { useContext, useState } from 'react';


const ProductCatModal = ({open, setOpen}) => {
    const {dispatch}=useContext(globalContext)
    const [adminProductModalData, setAdminProductModalData] = useState({
        catName:"",
        isCatAvailable:false,
        cat_Id:new Date().getTime()
      });
    
    

    const handleClose = () =>{
       setOpen(false)
    };

    const handleCollectData=(e)=>{
        setAdminProductModalData({...adminProductModalData,catName:e.target.value})
    }

    const handleCollectDataCheck=(e)=>{
        setAdminProductModalData({...adminProductModalData,isCatAvailable:!adminProductModalData.isCatAvailable})
    }

    const handleAddCategory =()=>{
       dispatch({
        type:"ADDCATEGORY",
        payload:(adminProductModalData)
       })
       setOpen(false)
       setAdminProductModalData({
        catName: "",
        isCatAvailable: false,
       })

    }


   
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >


                <Paper sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 500,
                    bgcolor: 'white',
                    p: 4,
                    textAlign: 'center',
                    height: 250,
                    bgcolor: "white"
                }}>

                    <Grid container>
                        <Grid item xs={12} sx={{ mb: "45px" }}>

                            <Typography align='center' sx={{ bgcolor: THEME_COLOR, color: "white", p: "10px", fontSize: "14px", fontWeight: "700" }}> Add New</Typography>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ pr: "7px", display: "flex", alignItems: "center", justifyContent: "right" }}>
                            <Typography sx={{ fontSize: "14px" }}>Category Name:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9} sx={{ display: "flex", alignItems: "center" }}>
                            <OutlinedInput sx={{ height: "30px" }} value={adminProductModalData.catName} fullWidth onChange={(e)=>{handleCollectData(e)}}/>
                        </Grid>

                        <Grid item xs={3} sx={{ pr: "7px", display: "flex", alignItems: "center", justifyContent: "right" }}>
                            <Typography sx={{ fontSize: "14px" }}> isAvailable:</Typography>
                        </Grid>
                        <Grid item xs={9}  sx={{ display: "flex", alignItems: "center" }}>
                            <FormGroup>

                                <FormControlLabel  control={<Checkbox value={adminProductModalData.isCatAvailable}  onChange={(e)=>{handleCollectDataCheck(e)}}/>}  />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={12} sx={{ mt:"15px", display: "flex", alignItems: "center", justifyContent:"center" }}>
                             <Button variant='contained' sx={{bgcolor:THEME_COLOR,color:"white",'&:hover':{bgcolor:THEME_COLOR}}} onClick={handleAddCategory}>create Category</Button>
                        </Grid>
                    </Grid>

                </Paper>


            </Modal>
        </>
    )
}

export default ProductCatModal