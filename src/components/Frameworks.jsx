import React, { useState } from 'react'
import {frontendFrameworks} from '../frameworks.js'

export const Frameworks = () => {

    const [frameworks, setFrameworks] = useState(frontendFrameworks)
    console.log(frameworks);
    frameworks.map((obj)=>{console.log(obj);
    })

  return (
    <div className='d-flex flex-cloumn gap-2 justify-content-center text-center'>
      <ul style={{listStyleType:"none"}}>
        {frameworks.map(obj=>
            <li key={obj}>{obj}</li>
        )}
      </ul>
    </div>
  )
}
