import React from 'react'
import './carouselCard.css'
import { Link } from 'react-router-dom'
export default function CarouselCard({imgPath,img,title,id,overview}) {
    const data = {
        imgPath,
        img,
        id,
        title,
        overview,
        }
  return (
    <Link to='carddetails' state={{data}}>
    <div className='cardCarouselParent'>
     <img src={`${imgPath}${img}`} alt="poster" width={'100%'}   loading="lazy" className='carouselimg'/>
    </div>
    </Link>
  )
}
