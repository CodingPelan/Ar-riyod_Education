import React from 'react'
import { Link } from 'react-router-dom'

export default function Tamirlanmoqda() {
  return (
    <div className='the_page_is_under_repair'>
        <div className="boxAll">
            <div className="topInss">
                <i class="fa-solid fa-gear"></i>
                <i class="fa-solid fa-gear"></i>
            </div>
            <div className="butonOllaaf">
                <h2>the page is under repair</h2>
                <Link to="/">Back </Link>
            </div>
        </div>
    </div>
  )
}
