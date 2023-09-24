import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Pagination } from 'swiper/modules';

export default function AsideComment() {
  return (
    <>
        <div className="buttonInfoCommnet">
            <div className="topListOllComents">
                <h2 data-aos="fade-up">BIZ HAQIMIZDA YO'LLANGAN FIKRLAR</h2>
            </div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="comentInfoOrStyleOn" data-aos="fade-up">
                <div className="topInfools">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div className="bottonInfoOll">
                    <h2>Ulug'bek</h2>
                    <h3>Arab Tili</h3>
                    <p>"Ta'lim jarayonida soddalik va aniqlik yuqori darajadaligi juda ham yoqdi"</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="comentInfoOrStyleOn">
                <div className="topInfools">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div className="bottonInfoOll">
                    <h2>Anvar</h2>
                    <h3>Ingliz Tili</h3>
                    <p>"Beginnerdan boshlaganman hozir IELTS topshirib 7.0 ball oldim. Ustozlarimga rahmat"</p>
                </div>
            </div>
        </SwiperSlide>
        {/* <SwiperSlide>
            <div className="comentInfoOrStyleOn">
                <div className="topInfools">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div className="bottonInfoOll">
                    <h2>Ulug'bek</h2>
                    <h3>Arab Tili</h3>
                    <p>"Ta'lim jarayonida soddalik va aniqlik yuqori darajadaligi juda ham yoqdi"</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="comentInfoOrStyleOn">
                <div className="topInfools">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div className="bottonInfoOll">
                    <h2>Ulug'bek</h2>
                    <h3>Arab Tili</h3>
                    <p>"Ta'lim jarayonida soddalik va aniqlik yuqori darajadaligi juda ham yoqdi"</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="comentInfoOrStyleOn">
                <div className="topInfools">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div className="bottonInfoOll">
                    <h2>Ulug'bek</h2>
                    <h3>Arab Tili</h3>
                    <p>"Ta'lim jarayonida soddalik va aniqlik yuqori darajadaligi juda ham yoqdi"</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="comentInfoOrStyleOn">
                <div className="topInfools">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div className="bottonInfoOll">
                    <h2>Ulug'bek</h2>
                    <h3>Arab Tili</h3>
                    <p>"Ta'lim jarayonida soddalik va aniqlik yuqori darajadaligi juda ham yoqdi"</p>
                </div>
            </div>
        </SwiperSlide> */}
      </Swiper>
        </div> 
    </>
  )
}
