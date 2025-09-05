import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { FaSadCry } from "react-icons/fa";
import { IoHappy } from "react-icons/io5";


export const Toggle = () => {
  const [isHappy, setIsHappy] = useState(true)

  return (
    <div className='d-flex justify-content-center flex-direction-column'>
      <Button onClick={()=>setIsHappy(!isHappy)} outline>Are you happy?</Button>
          <div>
          {  isHappy ?<IoHappy style={{fontSize:"3rem", color:"green"}}/> :<FaSadCry style={{fontSize:"3rem", color:"red"}}/>
          }
          </div>
    </div>
  )
}

