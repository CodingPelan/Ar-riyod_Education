import React from 'react'

export default function NavAsosiy() {
  return (
    <>
        <div className="NavInfo">
            <div className="topInfo">
                <h3>-<i class="fa-brands fa-stack-overflow"></i>-</h3>
                <h2>O'quv Kurslarimiz</h2>
                <p>TURLI YO'NALISHLARDA BIZ BILAN TA'LIM OLING</p>
            </div>
            <div className="buutonTesos">
            <div class="card">
                 <a class="card1" href="#">
                    <h2><i class="fa-solid fa-language"></i></h2>
    <p>Boshlang'ich Arab Tili</p>
    <div class="go-corner" href="#">
      <div class="go-arrow">
        →
      </div>
    </div>
                </a>
            </div>
            <div class="card">
                 <a class="card1" href="#">
                 <h2><i class="fa-solid fa-head-side-cough"></i></h2>
    <p>Arab Tili Fonetika ("Ta'lafus")</p>
    <div class="go-corner" href="#">
      <div class="go-arrow">
        →
      </div>
    </div>
                </a>
            </div>
            <div class="card">
                 <a class="card1" href="#">
                 <h2><i class="fa-solid fa-pen"></i></h2>
    <p>Arab Tili Grammatika</p>
    <div class="go-corner" href="#">
      <div class="go-arrow">
        →
      </div>
    </div>
                </a>
            </div>
            
            </div>
        </div>
    </>
  )
}
