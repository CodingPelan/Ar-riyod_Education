import React from 'react'

export default function MobilniKura() {
  return (
    <div className='mobilni'>
        <div className="cardinfo">
          <div className="cardlft_info" data-aos="fade-up">
            <img src="img/kurslar/imgAr.gif" alt="img" />
          </div>
          <div className="cartleft_info">
              <a href="https://t.me/arriyod_edu" data-aos="fade-up">Arab Tili</a>
              <p data-aos="fade-up">“AR-RIYOD” nodavlat ta’lim muassasasi yurtimizda Arab tilini fundamental o’rgatish bo’yicha birinchi raqamli o’quv markazidir. Markaz 15 yil mоbaynida arab tilini o’qitish bo’yicha katta malakaga ega</p>
              <a  data-aos="fade-up" href="https://t.me/arriyod_edu" className='onerr'>BATAFSIL</a>
          </div>
        </div>
        <div className="cardinfo">
          <div className="cardlft_info">
            <img src="img/kurslar/ruimg.jpg" alt="img" data-aos="fade-up"/>
          </div>
          <div className="cartleft_info">
              <a data-aos="fade-up" href="https://t.me/arriyod_edu">Rus Tili</a>
              <p data-aos="fade-up">Ta’lim muassasamiz tomonidan taklif etilayotgan rus tili kurslari yozma va og‘zaki nutq qoidalarini o‘zlatirishingizga yordam beradi. Ushbu kurslar uch bosqichdan iborat bo‘lib, ular: -Boshlang‘ich; - O‘rta; - Yuqori bosqichlardir.</p>
              <a data-aos="fade-up" href="https://t.me/arriyod_edu" className='onerr'>BATAFSIL</a>
          </div>
        </div>
        <div className="cardinfo">
          <div className="cardlft_info">
            <img src="img/kurslar/inglzTili.jpg" alt="img"  data-aos="fade-up"/>
          </div>
          <div className="cartleft_info">
              <a data-aos="fade-up" href="https://t.me/arriyod_edu">Ingliz Tili</a>
              <p data-aos="fade-up">Ingliz tilini boshlang'ich Beginner darajasidan boshlab to eng yuqori Advanced darajasigacha turli o'qish tezligida o'rganishingiz mumkin. Shuningdek biz Sizlarga IELTS va CEFR </p>
              <a data-aos="fade-up" href="https://t.me/arriyod_edu" className='onerr'>BATAFSIL</a>
          </div>
        </div>
        <div className="cardinfo">
          <div className="cardlft_info">
            <img src="img/kurslar/webimg.jpg" alt="img" data-aos="fade-up" />
          </div>
          <div className="cartleft_info">
              <a data-aos="fade-up"  href="https://t.me/arriyod_edu">Web Dasturlash</a>
              <p data-aos="fade-up" >Dasturlash kurslari Web dasturlash, iOS/Android va boshqa turli qurilmalarga dasturlar tuzish kurslariga taklif etamiz!</p>
              <a data-aos="fade-up"  href="https://t.me/arriyod_edu" className='onerr'>BATAFSIL</a>
          </div>
        </div>
    </div>
  )
}
