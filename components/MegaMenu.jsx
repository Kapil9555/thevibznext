import { Box, Grid } from '@mui/material';
import React from 'react';
import MegaMenuAll from './MegaMenuAll';
import MegaMenuClothes from './MegaMenuClothes';

const MegaMenu = ({ onPointerOut, borderStyle, setHoverEffect }) => {
    
    const handleMegaControl = () => {
        if (borderStyle.Smenu) {
            setHoverEffect(true)
        }
        else {
            setHoverEffect(false)
        }
    }

    const handleRemoveHover = () => {
        onPointerOut()
    }

    // console.log(borderStyle.Stitle)
    
    return (
        <>
        <Grid container sx={{height:"100%"}}>

        
            <Grid item xs={12} sx={{ width:"100%"}}>
                <Box sx={{   height: "fit-content" }}  >
                    <Grid container sx={{ p: "25px",borderBottom:"1px solid #bdbdbd", height: "100%", zIndex: 999, }} onMouseEnter={handleMegaControl} onMouseLeave={handleRemoveHover}>
                        <Box sx={{  width: "100%"}}>
                       {
                         
                        borderStyle.Stitle=="ALL CATEGORIES"?<MegaMenuAll/>:<MegaMenuClothes/>
                       }
                            
                        </Box>
                    </Grid>
                </Box>
            </Grid>
            </Grid> 
        </>
    )
}

export default MegaMenu