import React from 'react'
import { Link } from 'react-router-dom'

export default function Navinfo() {
  return (
    <div className='NavInfo'>
        <div className="infoTop">
            <div className="leftInfo" data-aos="fade-up">
                <img src="https://storage.googleapis.com/iifl-finance-storage/files/awards/images/iifl_awards_3.jpg" alt="" />
            </div>
            <div className="rightInfo">
                <h2 data-aos="fade-up">NIMA UCHUN <b>AR-RIYOD education</b>?</h2>
                <p data-aos="fade-up" >«AR-RIYOD» education NTM o‘z oldiga ta’lim sifatini oshirish, xalqaro tajribalar asosida o‘qitishning innovatsion shakllarini joriy qilish, yuqori malakali pedagoglarni va xorijiy o‘qituvchi mutaxassislarni jalb qilish, viloyat markazlarida va boshqa hududlarda ham filiallar tashkil etish bo‘yicha ko'plab vazifalarni maqsad qilgan. O‘qituvchilarimiz tomonidan alifbo, boshlang‘ich hamda yuqori bosqich uchun mo‘ljallangan grammatikaga oid o‘quv dasturlari, metodik qo‘llanmalar va kitoblar esa, bugungi kunda yuqoridagi maqsadlarning yorqin misoli bo'lib xizmat qilmoqda.</p>
                  <a data-aos="fade-up" href="https://t.me/arriyod_education">BOG'LANIH</a>
            </div>
        </div>
    </div>
  )
}
