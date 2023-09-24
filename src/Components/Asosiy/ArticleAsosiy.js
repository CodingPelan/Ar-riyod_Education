import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ArticleAsosiy() {
    const form = useRef();

    const sendEmail = (e) => {
    //   e.preventDefault();
  
      emailjs.sendForm('service_3oy9kj6', 'template_98lhuxm', form.current, 'Vr7ja3WnwzTBwjUA6')

        .then((result) => {
            console.log(result.text);
            console.log("massage ")
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <>
        <div className="ArticleAsosiy">
            <div className="leftInfo" data-aos="fade-up">
                <img src="img/asosiy/info3.png" alt="logo" />
            </div>
            <div className="rightinfo">
                <h2 data-aos="fade-up">Siz butun zinapoyani ko'rishingiz shart emas, faqat birinchi qadamni qo'ying</h2>
                <p data-aos="fade-up">Bizga  siz online ariza topshiring, biz sizga o'zimiz tez orada aloqaga chiqamiz!</p>
                <div className="bottomInfo">
                <button data-aos="fade-up" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Ariza Yuborish</button>
                            {/* web site email INtegratsiya qismi */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">online arizalar!</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
                          </div>
                          <div class="modal-body">
                            <form ref={form} onSubmit={sendEmail}>
                            <label  data-aos="fade-up" >Ism <span>*</span></label> <br />
                            <input data-aos="fade-up" type="text" name="user_name" placeholder='Your Name' required/> <br />
                            <label data-aos="fade-up" >Familya <span>*</span></label> <br />
                            <input data-aos="fade-up" type="text" name="user_femaliy" placeholder='Last name' required/> <br />
                            <label data-aos="fade-up" >Tel: <span>*</span></label> <br />
                            <input data-aos="fade-up" type="text" name="user_phone_number" placeholder='Phone number' required/> <br />
                            <label data-aos="fade-up">Qiziqishingiz <span>*</span></label> <br />
                            <select data-aos="fade-up" name="user_selection" id="" required> <br />
                                <option value="Arab Tili">Arab Tili</option>
                                <option value="Ingliz Tili">Ingliz Tili</option>
                                <option value="Rus Tili">Rus Tili</option>
                            </select> <br />
                            <label data-aos="fade-up" >Ta'lim Tili <span>*</span></label> <br />
                            {/* <select data-aos="fade-up" name="user_language" id="" required> <br />
                                <option value="uz">Uzbek</option>
                                <option value="Ru">Rus</option>
                            </select> <br /> */}
                            <span>Uzbek</span>
                            <input className='radio' id='status' value="uz" type="radio" name="user_language"/>
                            <span className='rusus'>Rus</span>
                            <input className='radio'  type="radio" id='status' value="ru"  name="user_language"/> <br />

                            <label data-aos="fade-up">O'z fikringizni billdiring <span>*</span></label> <br />
                            <textarea data-aos="fade-up" name="message" placeholder='A...' required/> 
                            <br />
                            <input data-aos="fade-up" className='inputConverseytinBotton' type="submit" value="Jo'natish" />
                        </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a data-aos="fade-up" href="tel:+998 91 881 31 41">Telefon qilish</a>
                </div>
            </div>
        </div>
    </>
  )
}
