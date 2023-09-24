import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Yangiliklar_Header() {
  return (
    <div className='Yangiliklar_Header'>
                 <div className="topinfo">
              <div className="leftInfo">
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
                <div className="logo">
                  <a href=""><img src="./img/asosiy/logoos.jpg" alt="logo" /></a>
                </div>
                <div className="rightList">
                  <ul>
                    <li><Link to="/">Asosiy</Link></li>
                    <li><Link to="/yangiliklar">Yangiliklar</Link></li>
                    <li><Link to="/kurslar">Kurslar</Link></li>
                    <li><Link to="/Biz_haqimizda">Biz Haqimizda</Link></li>
                    <li><Link to="/register">Ro'yxatdan o'tish</Link></li>
                  </ul>
                  <a href="https://t.me/arriyod_education" className='buttom'>Kursga Yozilish</a>
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
                          <li><Link to="/">- Asosiy</Link></li>
                          <li><Link to="/yangiliklar">- Yangiliklar</Link></li>
                          <li><Link to="/kurslar">- Kurslar</Link></li>
                          <li><Link to="/Biz_haqimizda">- Biz Haqimizda</Link></li>
                          <li><Link to="/register">- Royxatdan o'tish</Link></li>
                        </ul>
                    </div>
                  </div>

            </div>
            <div className="headerFenesh">
                <h1>YANGILIKLAR</h1>
                <div className="linkAllPage">
                    <Link to="/">Asosiy <i class="fa-solid fa-chevron-right"></i></Link>
                    <Link to="/Yangiliklar">Yangiliklar</Link>
                </div>
            </div>
    </div>
  )
}
