import { Box, Grid } from '@mui/material'
import React from 'react'
import whats from '../assets/whats2.webp'

const FloatingButtons = () => {
  return (
    <Box>
        <Box sx={{boxShadow:"20px",position:"fixed",cursor:"pointer",zIndex:99999,left:"30px",bottom:"40px",backgroundImage:`url(${whats.src})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",height:"70px",width:"70px"}}>

        </Box>
    </Box>
  )
}

export default FloatingButtons