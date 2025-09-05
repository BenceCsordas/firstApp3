import React, { useState } from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import { Button, Spinner } from 'reactstrap'
import { FaMinusCircle } from "react-icons/fa";
import { MyImage } from './MyImage';



export const Counter = () => {
    const [nr, setNr] = useState(0)
    const [loading, setLoading] = useState(true)
  
    const decrement=()=>{
        setNr(nr-1)
        setLoading(true)
    }
    const increment=()=>{
        setNr(nr+1)
        setLoading(true)
    }

    return (
        <div>

        
    <div className='p-5 d-flex justify-content-center'>

        <Button color="dark" outline onClick={decrement}><FaMinusCircle />
        </Button>
        <Button style={{color: nr<0 ? "red" : "green"}}  outline >{nr}</Button>
        <Button color="dark" onClick={increment} outline><FaCirclePlus />
        </Button>


        {/*itt jelenjen meg egy kép, aminek az indexét a nr adja (>0) picsum*/}
        


    </div>
        <div className='d-flex justify-content-center'>
            
            {nr>0 && <MyImage nr={nr} loading={loading} setLoading={setLoading}/>}
        </div>
    </div>
  )
}


