import React from 'react'
import { Link } from 'react-router-dom'

export default function FuterTopInfo() {
  return (
    <>
        <div className="topInfoAllBx">
            <div className="leftBoxAllpart">
                <h2>Bizga qo'shiling</h2>
                <p>Hoziroq kurslarimizga yoziling!</p>
            </div>
            <div className="rightBoxAllpart">
                <a href="https://t.me/arriyod_education">kursga yozilish</a>
            </div>
        </div>
        <div className="butonAllTas">
            <div className="leftInfo" data-aos="fade-up">
                <h2 data-aos="fade-up">AR-Riyod Education School</h2>
                <p data-aos="fade-up">«AR-RIYOD» NTM tashkil etishdan asosiy maqsad yurtimiz fuqarolarining bo‘sh vaqtlarini mazmunli tashkil etish va sifatli ta’limni yo‘lga qo‘yishdan iborat.</p>
                <div className="buttonInfo">
                    <a href="mailto: edumarifat@gmail.com" data-aos="fade-up"><i class="fa-regular fa-envelope"></i> edumarifat@gmail.com</a> <br /> <br />
                    <a href="" data-aos="fade-up"><i class="fa-solid fa-phone"></i> +998 (91) 881-31-41</a> <br /> <br />
                    <a href="https://maps.app.goo.gl/x16XBxU5VvktQF267" data-aos="fade-up"><i class="fa-solid fa-location-dot"></i> Toshkent Shahar</a> <br />
                </div>
            </div>
            <div className="centerInfo">
                <h2 data-aos="fade-up">Istalgan kursingizga yoziling</h2>
                <div className="butonOn">
                    <ul className='leftListt'>
                        <li><Link data-aos="fade-up" to="/kurslar"><i class="fa-solid fa-chevron-right"></i> Ingliz tili</Link></li>
                        <li><Link data-aos="fade-up" to="/kurslar"><i class="fa-solid fa-chevron-right"></i> Grammar</Link></li>
                        <li><Link data-aos="fade-up" to="/kurslar"><i class="fa-solid fa-chevron-right"></i> Beginner</Link></li>
                        <li><Link data-aos="fade-up" to="/kurslar"><i class="fa-solid fa-chevron-right"></i>Pre IELTS</Link></li>
                        <li><Link data-aos="fade-up" to="/kurslar"><i class="fa-solid fa-chevron-right"></i> IELTS</Link></li>
                    </ul>
                    <ul className='rightList'>
                        <li><Link data-aos="fade-up" to="/kurslar"><i class="fa-solid fa-chevron-right"></i> Arab tili</Link></li>
                        <li><Link data-aos="fade-up" to="/kurslar"><i class="fa-solid fa-chevron-right"></i> Boshlang’ich Arab tili</Link></li>
                        <li><Link data-aos="fade-up" to="/kurslar"><i class="fa-solid fa-chevron-right"></i> Fonetika</Link></li>
                        <li><a data-aos="fade-up"  href="/kurslar"><i class="fa-solid fa-chevron-right"></i> Grammatika</a></li>
                        {/* <li><a data-aos="fade-up" href="https://t.me/arriyod_education"><i class="fa-solid fa-chevron-right"></i> Bog'lanish</a></li> */}
                    </ul>
                </div>
            </div>
            <div className="rightAllInfoAs">
                <h2 data-aos="fade-up">IJTIMOIY TARMOQLAR</h2>
                <h3 data-aos="fade-up">Ijtimoiy tarmoqlarda bizni kuzatib boring</h3>
                <h4 data-aos="fade-up">Biz eng yaxshilarini sizga ulashamiz</h4>
                <div className="icon_one_box">
                    <a href="https://tiktok.com/arriyod_edu" data-aos="fade-up"><i class="fa-brands fa-tiktok"></i></a>
                    <a href="https://youtobe.com/arriyod_edu" data-aos="fade-up"><i class="fa-brands fa-youtube"></i></a>
                    <a href="https://instagram.com/arriyod_edu" data-aos="fade-up"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://t.me/arriyod_edu" data-aos="fade-up"><i class="fa-solid fa-paper-plane"></i></a>
                    <a href="sms:+998 91 881 31 41" data-aos="fade-up"><i class="fa-solid fa-comment"></i></a>
                </div>
            </div>
        </div>
        <div className="fuutwe">
            <div className="leftInfo">
                <ul>
                    <li><Link to="/" >Asosiy</Link></li>
                    <li><Link to="/Biz_haqimizda">Biz Haqimizda</Link></li>
                    <li><a href="https://t.me/arriyod_edu" >Tadbirlar</a></li>
                    <li><Link to="/yangiliklar">Yangiliklar</Link></li>
                    <li><a href="tel:+998 91 881 31 41" >Bog'lanish</a></li>
                    <li><a href="https://t.me/arriyod_education" >Online Ariza</a></li>
                </ul>
            </div>
            <div className="rightInfo">
                <a href="https://t.me/webOely_us">@Coding<i class="fa-solid fa-code"></i>Pelan_Group</a>
                <a href=""><i class="fa-solid fa-angles-up fa-bounce"></i></a>
            </div>
        </div>
    </>
  )
}

