import React from 'react'

export default function NavInfoAll() {
  return (
    <div className='register_Nav_button_all_task'>
        <form >
            <div className="inputTy">
                <label data-aos="fade-up">Ism <span>*</span></label> <br />
                <input data-aos="fade-up" type="text" placeholder='Your name' />
            </div>
            <div className="inputTy">
                <label data-aos="fade-up" >Famiya <span>*</span></label> <br />
                <input data-aos="fade-up" type="text" placeholder='Your surname' />
            </div>
            <div className="inputTy">
                <label data-aos="fade-up">E-mail <span>*</span></label> <br />
                <input data-aos="fade-up" type="text" placeholder='E-mail' />
            </div>
            <div className="inputTy">
                <label data-aos="fade-up">Sizning habaringz <span>*</span></label> <br />
                <textarea data-aos="fade-up" placeholder='Your masage'></textarea>
            </div>
            <button data-aos="fade-up">xabar yuborish</button>
        </form>
    </div>
  )
}
