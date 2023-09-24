import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



export default function SectionCorusel() {
  return (
    <>
        <div className="SectionCorusel">
        <Swiper
        spaceBetween={150}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="boxCorusel">
                <div className="leftInfo">
                <i class="fa-solid fa-thumbtack"></i>
                    <h2>Ingliz Tili</h2>
                    <p>Ingliz tilini boshlang'ich Beginner darajasidan boshlab to eng yuqori Advanced darajasigacha turli o'qish tezligida o'rganishingiz mumkin. Shuningdek biz Sizlarga IELTS va CEFR olishingizga yordam beramiz. </p>
                    <a href="https://t.me/arriyod_education">BATAFSIL</a>
       <img src="	https://grandtalim.uz/backend/web/uploads/15777869133477.jpg" alt="Arab tili kurs" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="boxCorusel" data-aos="fade-up">
                <div className="leftInfo">
                <i class="fa-solid fa-thumbtack"></i>
                    <h2>Arab Tili</h2>
                    <p>“AR-RIYOD EDUCATION" nodavlat ta’lim muassasasi yurtimizda Arab tilini fundamental o’rgatish bo’yicha birinchi raqamli o’quv markazidir. Markaz 1 yil mоbaynida arab tilini o’qitish bo’yicha katta malakaga ega bo’ldi. </p>
                    <a href="https://t.me/arriyod_education">BATAFSIL</a>
                                        <img src="https://grandtalim.uz/backend/web/uploads/16107125863458.gif" alt="Arab tili kurs" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="boxCorusel">
                <div className="leftInfo">
                <i class="fa-solid fa-thumbtack"></i>
                    <h2>Rus Tili</h2>
                    <p>Ta’lim muassasamiz tomonidan taklif etilayotgan rus tili kurslari yozma va og‘zaki nutq qoidalarini o‘zlatirishingizga yordam beradi. Ushbu kurslar uch bosqichdan iborat bo‘lib, ular: -Boshlang‘ich; - O‘rta; - Yuqori bosqichlardir. </p>
                    <a href="https://t.me/arriyod_education">BATAFSIL</a>
                                        <img src="https://grandtalim.uz/backend/web/uploads/16324861676735.jpg" />
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
      {/* <Swiper
        slidesPerView={1}
        spaceBetween={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="boxCorusel">
                <div className="leftInfo">
                    <h2>Arab Tili</h2>
                    <p>“MA'RIFAT EDUCATION" nodavlat ta’lim muassasasi yurtimizda Arab tilini fundamental o’rgatish bo’yicha birinchi raqamli o’quv markazidir. Markaz 15 yil mоbaynida arab tilini o’qitish bo’yicha katta malakaga ega bo’ldi. </p>
                    <a href="">BATAFSIL</a>
                                        <img src="https://grandtalim.uz/backend/web/uploads/16107125863458.gif" alt="Arab tili kurs" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="boxCorusel">
                <div className="leftInfo">
                    <h2>Arab Tili</h2>
                    <p>“MA'RIFAT EDUCATION" nodavlat ta’lim muassasasi yurtimizda Arab tilini fundamental o’rgatish bo’yicha birinchi raqamli o’quv markazidir. Markaz 15 yil mоbaynida arab tilini o’qitish bo’yicha katta malakaga ega bo’ldi. </p>
                    <a href="">BATAFSIL</a>
                                        <img src="https://grandtalim.uz/backend/web/uploads/16107125863458.gif" alt="Arab tili kurs" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="boxCorusel">
                <div className="leftInfo">
                    <h2>Arab Tili</h2>
                    <p>“MA'RIFAT EDUCATION" nodavlat ta’lim muassasasi yurtimizda Arab tilini fundamental o’rgatish bo’yicha birinchi raqamli o’quv markazidir. Markaz 15 yil mоbaynida arab tilini o’qitish bo’yicha katta malakaga ega bo’ldi. </p>
                    <a href="">BATAFSIL</a>
                                        <img src="https://grandtalim.uz/backend/web/uploads/16107125863458.gif" alt="Arab tili kurs" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="boxCorusel">
                <div className="leftInfo">
                    <h2>Arab Tili</h2>
                    <p>“MA'RIFAT EDUCATION" nodavlat ta’lim muassasasi yurtimizda Arab tilini fundamental o’rgatish bo’yicha birinchi raqamli o’quv markazidir. Markaz 15 yil mоbaynida arab tilini o’qitish bo’yicha katta malakaga ega bo’ldi. </p>
                    <a href="">BATAFSIL</a>
                                        <img src="https://grandtalim.uz/backend/web/uploads/16107125863458.gif" alt="Arab tili kurs" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="boxCorusel">
                <div className="leftInfo">
                    <h2>Arab Tili</h2>
                    <p>“MA'RIFAT EDUCATION" nodavlat ta’lim muassasasi yurtimizda Arab tilini fundamental o’rgatish bo’yicha birinchi raqamli o’quv markazidir. Markaz 15 yil mоbaynida arab tilini o’qitish bo’yicha katta malakaga ega bo’ldi. </p>
                    <a href="">BATAFSIL</a>
                                        <img src="https://grandtalim.uz/backend/web/uploads/16107125863458.gif" alt="Arab tili kurs" />
                </div>
            </div>
        </SwiperSlide>
      </Swiper> */}

        </div> 
    </>
  )
}
