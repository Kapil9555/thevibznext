
'use client'
import { THEME_COLOR } from '@/Styles/ConstantStyle'
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, Typography } from '@mui/material'
import { useState } from 'react'




const AdminProductDetails = () => {
   
       
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };
  
   
    
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
                   Product Details
                </Typography>
                </Grid>
               
               
            </Grid>
            <Grid container sx={{justifyContent: "center", overflow: "scroll",pb:"15px",mt:"10px" }}>
                <Grid item xs={6} sx={{border:"1px solid gray"}}>
                    <Grid container>

                        <Grid item xs={12} sx={{ mb: "15px" }}>

                            <Typography align='center' sx={{ bgcolor: THEME_COLOR, color: "white", p: "10px", fontSize: "14px", fontWeight: "700" }}> Add New Product</Typography>
                        </Grid>



                        <Grid item xs={1.5} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: "17px" }}>Product Name:</Typography>
                        </Grid>
                        <Grid item xs={10.5} sx={{ display: "flex", alignItems: "center" }}>
                            <Typography>Half sleeves</Typography>
                        </Grid>



                        <Grid item xs={1.5} sx={{ mt: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: "17px" }}>M.R.P:</Typography>
                        </Grid>
                        <Grid item xs={10.5} sx={{ display: "flex", alignItems: "center" }}>
                            <Typography>999</Typography>
                        </Grid>



                        <Grid item xs={12} sx={{ mt: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: "17px" }}>S.R.P:</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{  display: "flex", alignItems: "center" }}>
                        <Typography>1000</Typography>

                        </Grid>



                        <Grid item xs={12} sx={{ mt: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: "17px" }}>Sizes:</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                            <Box sx={{}}>
                                <FormControl component="fieldset">

                                    <FormGroup aria-label="position" row>
                                        <FormControlLabel
                                            value="top"
                                            control={<Checkbox size='small' sx={{ ml: "4px", p: "4px" }} checked={true} />}
                                            label={<Typography sx={{ mt: "4px", fontSize: "16px", fontWeight: "700" }}>S</Typography>}
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            value="start"
                                            control={<Checkbox size='small' sx={{ ml: "3px", p: "4px" }} checked={true}/>}
                                            label={<Typography sx={{ mt: "4px", fontSize: "16px", fontWeight: "700" }}>M</Typography>}
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            value="bottom"
                                            control={<Checkbox size='small' sx={{ ml: "3px", p: "4px" }} checked={true}/>}
                                            label={<Typography sx={{ mt: "4px", fontSize: "16px", fontWeight: "700" }}>L</Typography>}
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            value="end"
                                            control={<Checkbox size='small' sx={{ ml: "3px", p: "4px" }} checked={true}/>}
                                            label={<Typography sx={{ mt: "4px", fontSize: "16px", fontWeight: "700" }}>Xl</Typography>}
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            value="end"
                                            control={<Checkbox size='small' sx={{ ml: "3px", p: "4px" }} checked={true}/>}
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
                        <Grid item xs={12} sx={{  display: "flex", alignItems: "center" }}>
                            <Box sx={{ height: "80px", width: "80px",border:"1px solid red" }}>
                               
                            </Box>
                        </Grid>





                        <Grid item xs={12} sx={{ mt: "15px", pr: "7px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: "17px" }}> isAvailable:</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{}}>
                            <FormGroup sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <FormControlLabel
                                    value="end"
                                    name="but"
                                    control={<Checkbox size="small" sx={{ ml: '3px', p: '4px' }} checked={true} onChange={handleCheckboxChange} />}
                                    label={<Typography sx={{ mt: '4px', fontSize: '16px', fontWeight: '700' }}>Yes</Typography>}
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="end"
                                    name="but"
                                    control={<Checkbox size="small" sx={{ ml: '3px', p: '4px' }} checked={false} onChange={(e) => setIsChecked(!e.target.checked)} />}
                                    label={<Typography sx={{ mt: '4px', fontSize: '16px', fontWeight: '700' }}>No</Typography>}
                                    labelPlacement="end"
                                />
                            </FormGroup>
                        </Grid>



                        <Grid item xs={12} sx={{ mt: "15px", pr: "7px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: "17px" }}>Choose Product Image:</Typography>
                        </Grid>
                    
                        <Grid container sx={{ justifyContent: "space-between", mt: "15px" }}>
                            <Grid item xs={2.2} sx={{ height: "90px", border: "1px solid gray" }}></Grid>
                            <Grid item xs={2.2} sx={{ height: "90px", border: "1px solid gray" }}></Grid>
                            <Grid item xs={2.2} sx={{ height: "90px", border: "1px solid gray" }}></Grid>
                            <Grid item xs={2.2} sx={{ height: "90px", border: "1px solid gray" }}></Grid>
                            <Grid item xs={2.2} sx={{ height: "90px", border: "1px solid gray" }}></Grid>


                        </Grid>

                        <Grid item xs={12} sx={{ mt: "15px", pr: "7px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: "17px" }}>Describe Information:</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{  display: "flex", alignItems: "center" }}>
                            <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <Typography>Half sleeves</Typography>
                            <Typography>Half sleeves</Typography>
                            </Box>
                        </Grid>
                    </Grid>


                </Grid>
            </Grid>
        </>
    )
}

export default AdminProductDetails