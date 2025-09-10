import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { FaSadCry } from "react-icons/fa";
import { IoHappy } from "react-icons/io5";
import { Dice } from './Dice';


export const Toggle = () => {
  const [isHappy, setIsHappy] = useState(true)

  return (
    <div className='d-flex justify-content-center flex-column align-items-center text-center'>
      <Button onClick={()=>setIsHappy(!isHappy)} outline>Are you happy?</Button>
          <div>
          {  isHappy ?<IoHappy style={{fontSize:"3rem", color:"green"}}/> :<FaSadCry style={{fontSize:"3rem", color:"red"}}/>
          }
          </div>

          <Dice/>
    </div>
  )
}

