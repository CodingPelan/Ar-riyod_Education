import React from 'react'
// import './scss/kurs.css'
// import './scss/kursarO.css'
import Header_Kurs from './Header_Kurs'
// import FuterTopInfo from '../Asosiy/ArticleAsosiy'
import NavCard from './NavCard'
import MobilniKura from './MobilniKura'
import FuterTopInfo from '../Asosiy/FuterTopInfo'
import '../Yangiliklar/scss/index.css'

export default function KurslarAll() {
  return (
    <div>
      <Header_Kurs/>
      <NavCard/>
      <MobilniKura/>
      <FuterTopInfo/>
    </div>
  )
}
