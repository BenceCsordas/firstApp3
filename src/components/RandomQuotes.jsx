import React, { useState } from 'react'
import { quotesFromDatabase } from '../randomquotes';
import { Button } from 'reactstrap';


export const RandomQuotes = () => {

    const [quotes, setQuotes] = useState("")
    console.log(quotes);
    let selectRandom 

    const selectQuote = () =>{
        selectRandom = Math.abs(Math.round((Math.random()*quotesFromDatabase.length-1)))        
        setQuotes(quotesFromDatabase[selectRandom])
    }

  return (
    <div className='d-flex flex-column align-items-center'>
        <Button onClick={selectQuote}>Idézet:</Button>
        <p>{quotes}</p>    
    </div>
  )
}


