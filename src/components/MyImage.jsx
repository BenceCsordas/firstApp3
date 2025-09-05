import React, { useState } from 'react'
import { Spinner } from 'reactstrap';

export const MyImage = ({nr, loading, setLoading}) => {
    
    console.log(nr);
    const url = `https://picsum.photos/id/${nr}/400/400`
  return (
    <div>
        {loading &&
            
            <Spinner color="info">
                Loading...
            </Spinner>
            
            }

      <img src={url} alt="" className='img-fluid rounded thumbnail'
      onLoad={()=>setLoading(false)}
      onError={()=>setLoading(false)}
      style={{display: loading ? "none" : "block"}}
      />
    </div>
  )
}

