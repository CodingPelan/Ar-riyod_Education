import React from 'react'
import Header_Hq from './Header_Hq'
import '../Yangiliklar/scss/index.css'
import FuterTopInfo from '../Asosiy/FuterTopInfo'
import Navinfo from './Navinfo'
import SectionTopInfo from './SectionTopInfo'
import SectionSpd from '../Asosiy/SectionSpd'
import AsideComment from '../Asosiy/AsideComment'

export default function Biz_Haqimizda() {
  return (
    <div>
          <Header_Hq/>
          <Navinfo/>
          <SectionTopInfo/>
          <SectionSpd/>
          <AsideComment/>
          <FuterTopInfo/>
    </div>
  )
}
