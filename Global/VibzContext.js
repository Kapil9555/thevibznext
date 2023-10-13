'use client'
import React, { createContext, useReducer, useState } from 'react'
import { reducer } from './Reducer'
import AllCat from '@/constantMapData'



export const globalContext=createContext('')

const intialState={
  triger:false,
  mainState:AllCat,
  allCat:[],
  mensHalfSleeve:[],
  couplesData:[],
  woHalf:[],
  menFormalShirt:[]

}


const VibzContext = ({ children }) => {

  const [state,dispatch]=useReducer(reducer,intialState)

  return (
    <>
        <globalContext.Provider value={{state,dispatch}}>
             {children}
        </globalContext.Provider>
    </>
  )
}

export default VibzContext