import React from 'react'
import FuterTopInfo from '../Asosiy/FuterTopInfo'
import HeaderReg from './HeaderReg'
import '../Yangiliklar/scss/index.css'
import NavInfoAll from './NavInfoAll'
import Map from './Map'

export default function Register() {
  return (
    <div>
        <HeaderReg/>
        <Map/>
        <NavInfoAll/>
        <FuterTopInfo/>
    </div>
  )
}
