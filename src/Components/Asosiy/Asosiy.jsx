import React from 'react'
import Header from './Header'
// web site Asosiy page style part or import 
import './Scss/index.css'
import NavAsosiy from './NavAsosiy'
import SectionAsosiy from './SectionAsosiy'
import AsideAsosiy from './AsideAsosiy'
import AsideComment from './AsideComment'
import ArticleAsosiy from './ArticleAsosiy'
import AsideButtonInfo from './AsideButtonInfo'
import FuterTopInfo from './FuterTopInfo'
import SectionTopInfo from '../Biz_Haqimizda/SectionTopInfo'
import Loader from './Loader'

export default function Asosiy() {
  return (
    <>
          <Loader/>
         <Header/>
         {/* <NavAsosiy/> */}
         <SectionTopInfo/>
         <SectionAsosiy/>
         <AsideAsosiy/>
         <AsideComment/>
         <AsideButtonInfo/>
         <ArticleAsosiy/>
         <FuterTopInfo/>
    </>
  )
}
