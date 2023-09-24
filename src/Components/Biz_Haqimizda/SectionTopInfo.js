import React from 'react'

export default function SectionTopInfo() {
  return (
    <div className='navInd'>
        <h2 data-aos="fade-up"><b>AR-RIYOD education</b> BILAN</h2>
        <p data-aos="fade-up">Ilm olishingiz uchun eng asosiy 4 ta sabab</p>
        <div className="BUTTONiNFOol">  
            <div className="boxOn" data-aos="fade-up">
                <div className="topInfo">
                    <i class="fa-solid fa-wifi"></i>
                </div>
                <h3>Ko'p yillik tajriba</h3>
            </div>
            <div className="okline" data-aos="fade-up"></div>
            <div className="boxOn" data-aos="fade-up">
                <div className="topInfo">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <h3>Malakali ustozlar</h3>
            </div>
            <div className="okline" data-aos="fade-up"></div>
            <div className="boxOn" data-aos="fade-up">
                <div className="topInfo">
                    <i class="fa-solid fa-thumbs-up"></i>
                </div>
                <h3>Samarali o'quv dasturlar </h3>
            </div>
            <div className="okline" data-aos="fade-up"></div>
            <div className="boxOn" data-aos="fade-up">
            <div className="topInfo">
                <i class="fa-solid fa-user"></i>
                </div>
                <h3>Qulay shart-sharoit</h3>
            </div>
        </div>
    </div>
  )
}
