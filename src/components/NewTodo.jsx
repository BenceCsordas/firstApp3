import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

export const NewTodo = () => {


    const [descr, setDescr] = useState("")

    console.log("Renderelődik a NewTodo: ",descr);
    
    const handleSubmit=()=>{

    }

    return (
        
        <div>

            <Form style={{display:'flex', gap:"5px", maxWidth:"600px"}}>
                <FormGroup style={{flex:1}}>
                    <Input
                        placeholder="new item"
                        type="text"
                        value={descr}
                        onChange={(e)=>setDescr(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Button onClick={handleSubmit()}>Add</Button>    
                </FormGroup>
            </Form>
        </div>

    )
}

