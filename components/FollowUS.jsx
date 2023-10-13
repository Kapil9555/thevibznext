import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Button, Grid, Typography } from '@mui/material';
import { THEME_COLOR } from '../Styles/ConstantStyle';



const FollowUS = () => {
  return (
    <Grid container>
        <Grid item xs={12} sx={{mt:"100px"}}>
            <Box  sx={{bgcolor:"#2979ff",p:"15px"}}>
               <Typography sx={{color:"white",display:"flex",alignItems:"center"}}>
                    <InfoOutlinedIcon sx={{color:"white",mr:"10px"}}/> To use this element select instagram user
               </Typography>
            </Box>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"150px"}}>
                <Button sx={{bgcolor:THEME_COLOR,fontSize:"15px",fontWeight:"900",p:"8px 15px","&:hover":{bgcolor:THEME_COLOR},color:"white"}}>
                  <InstagramIcon sx={{mr:"7px"}}/> FOLLOW US ON INSTAGRAM
                </Button>
            </Box>
         </Grid>
        
    </Grid>
  )
}

export default FollowUS