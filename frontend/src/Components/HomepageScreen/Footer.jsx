import React from 'react'

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <> 
        <div class="wave-container wave">
            <p>© {year}, Developed & Designed by <a className='footer_faizan' target='Dirghanshu & Jatan' href='https://dirghanshu.vercel.app'>Dirghanshu & Jatan</a></p>
        </div>
    </>
  )
}

export default Footer