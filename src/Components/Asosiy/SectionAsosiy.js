import React from 'react'
import SectionSpd from './SectionSpd'
import SectionCorusel from './SectionCorusel'

export default function SectionAsosiy() {
  return (
    <>
      <div className="SectionAsosiy">
            <SectionSpd/>
            <div className="buttonOneAndSectionPart">
                <div className="topInfo">
                      <h3 data-aos="fade-up">-<i class="fa-solid fa-quote-left"></i>-</h3>
                      <h2 data-aos="fade-up" >KURSLARIMIZ</h2>
                      <p data-aos="fade-up" >O'Z KURSINGIZNI TANLANG</p>
                </div>
                <SectionCorusel/>
                
            </div>
      </div>
    </>
  )
}
