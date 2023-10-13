import { Box } from '@mui/material'
import React from 'react'
import {Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import hero1 from '../assets/heroCrousel1.png'
import hero2 from '../assets/heroCrousel2.png'
import hero3 from '../assets/heroCrousel3.png'


const CrouselComp = () => {

    const images=[{
        silde:hero1,
        caption:"Slide 1"
    },
    {
        silde:hero2,
        caption:"Slide 2"
    },
    {
        silde:hero3,
        caption:"Slide 3"
    },
  

]

    const proprietes = {
        duration: 2000,
        transitionDuration: 200,
        infinite: true,
        arrows: true,
        
        
    }
    
  return (
    <>
        <Box sx={{}}>
        <Slide {...proprietes}>
          {
            images.map((ele,index)=>(
                <Box key={index}>
                  <Box sx={{backgroundImage:`url(${ele.silde.src})`,display:"flex",alignItems:"center",justifyContent:"center",height:{lg:"600px",md:"500px",sm:"400px",xs:"270px"},backgroundSize:"100% 100%"}}>
                     
                  </Box>
                </Box>
            ))
          }
         
       </Slide>
        </Box>
    </>
  )
}

export default CrouselComp