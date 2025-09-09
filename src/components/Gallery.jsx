import React, { useState } from 'react'
import { galleryFromDataBase } from '../gallery'
export const Gallery = () => {
   const [imgs, setImg] = useState(galleryFromDataBase)
   console.log(imgs);
   
  return (
    <div className='d-flex gap-2 flex-column img-fluid '>
      {/* a staten meghivod a map-t es csak az objektumok url-t jelenjen meg*/
      galleryFromDataBase.map((obj)=>
        <img className='rounded' src={obj.url} alt="" key={obj.id}/>
      )
      
      }
    </div>
  )
}


