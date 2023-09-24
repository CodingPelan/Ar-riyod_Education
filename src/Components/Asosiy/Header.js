import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/css/bundle'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; 

export default function Header() {
  return (
    <>
        <div className="AsosiyPage">
            <div className="topinfo">
              <div className="leftInfo" data-aos="fade-up">
                <a href="mailto: edumarifat@gmail.com"><i class="fa-regular fa-envelope"></i> edumarifat@gmail.com</a>
                <a href=""><i class="fa-solid fa-phone"></i> +998 (91) 881-31-41</a>
              </div>
              <div className="icon_one_box">
                    <a href="https://tiktok.com/arriyod_edu" data-aos="fade-up"><i class="fa-brands fa-tiktok"></i></a>
                    <a href="https://youtobe.com/arriyod_edu" data-aos="fade-up"><i class="fa-brands fa-youtube"></i></a>
                    <a href="https://instagram.com/arriyod_edu" data-aos="fade-up"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://t.me/arriyod_edu" data-aos="fade-up"><i class="fa-solid fa-paper-plane"></i></a>
                    <a href="sms:+998 91 881 31 41" data-aos="fade-up"><i class="fa-solid fa-comment"></i></a>
                </div>
            </div>
            <div className="butonInfo">
                <div className="logo" data-aos="fade-up">
                  <a href=""><img src="./img/asosiy/logoos.jpg" alt="logo" /></a>
                </div>
                <div className="rightList">
                  <ul>
                    <li data-aos="fade-up"><Link to="/">Asosiy</Link></li>
                    <li data-aos="fade-up"><Link to="yangiliklar">Yangiliklar</Link></li>
                    <li data-aos="fade-up"><Link to="Kurslar">Kurslar</Link></li>
                    <li data-aos="fade-up"><Link to="Biz_haqimizda"> Biz Haqimizda</Link></li>
                    <li data-aos="fade-up"><Link to="register">Ro'yxatdan o'tish</Link></li>
                  </ul>
                  <a data-aos="fade-up" href="" className='buttom'>Kursga Yozilish</a>
                </div>
            </div>
            <div className="butonInfoMedia">
              <div className="logo">
                  <a href=""><img src="/img/asosiy/logoos.jpg" alt="logo" /></a>
              </div>
              <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><i class="fa-solid fa-bars"></i></button>

                  <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                    <div class="offcanvas-header">
                    <div className="logo">
                  <a href=""><img src="/img/asosiy/logoso.jpg" alt="logo" /></a>
              </div>
                      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul>
                          <li data-aos="fade-up"><Link to="/">- Asosiy</Link></li>
                          <li data-aos="fade-up"><Link to="yangiliklar">- Yangiliklar</Link></li>
                          <li data-aos="fade-up"><Link to="Kurslar">- Kurslar</Link></li>
                          <li data-aos="fade-up"><Link to="Biz_haqimizda">- Biz Haqimizda</Link></li>
                          <li data-aos="fade-up"><Link to="register">- Ro'yxatdan o'tish</Link></li>
                          
                        </ul>
                    </div>
                  </div>

            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 8500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
      >
        <SwiperSlide>
          <div className="headerButtom">
                <h2 data-aos="fade-up">Arab tilini biz bilan mustaqil o'rganing</h2>
                <p data-aos="fade-up">Boshlangich Arab tili, Fonetika, Grammatika,</p>
                <a data-aos="fade-up" href="https://t.me/arriyod_education">Batafsil</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="headerButtomm">
                <h2>Ingliz tilini biz bilan mustaqil o'rganing</h2>
                <p>Grammatika, Beginner, Pre IELTS, IELTS</p>
                <a href="https://t.me/arriyod_education">Batafsil</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="headerButtommm">
                <h2>Rus tilini biz bilan mustaqil o'rganing</h2>
                <p>0 dan CEFR ga tayyorlov kursi,</p>
                <a href="https://t.me/arriyod_education">Batafsil</a>
          </div>
        </SwiperSlide>  
      </Swiper>
     
        </div>
    </>
  )
}
