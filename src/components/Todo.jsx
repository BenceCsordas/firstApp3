import React, { useState } from 'react'
import { todosData } from '../data'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { FaTrashAlt } from "react-icons/fa";
import { MdFileDownloadDone } from "react-icons/md";
import { NewTodo } from './NewTodo';
import { TodoSummary } from './todoSummary';



export const Todo = () => {
  const [todos, setTodos] = useState(todosData)
  //console.log(todos);
  
  const handleDelete = (id) => {
    //console.log(id);
    setTodos(prev => prev.filter(obj => obj.id != id))
  }

  const handleDone = (id) => {
    //console.log("Handle Done függvény ", id);
    setTodos(prev=>prev.map(obj=>obj.id == id ? {...obj,isDone:!obj.isDone}:obj))
    

    
  }

  


  const handleAdd = (desc) =>{
    const newTodo={
      id: Date.now(),
      desc,
      isDone:false
    }
    setTodos(prev=>[...prev, newTodo])
  }

  const handleDeleteAll = ()=>{
    setTodos(prev => prev.filter(obj=>!obj))
  }


 

  return (
    <div style={{maxWidth:"600px", margin:"auto"}} className=''>
      <NewTodo handleAdd={handleAdd}/>
      <FaTrashAlt style={{ color: "red", fontSize: "3rem" }} onClick={() => handleDeleteAll()} /> 
      <ListGroup>
        {todos.map(obj =>
          <ListGroupItem key={obj.id} className='d-flex justify-content-between'>
            <MdFileDownloadDone style={{ color: obj.isDone ? "lightgreen" : "gray", fontSize: "2rem" }} onClick={() => handleDone(obj.id)} />
            <div style={{ textDecoration: obj.isDone ? "line-through" : "none" }}>
              {obj.desc}
            </div>
            <FaTrashAlt style={{ color: "red", fontSize: "2rem" }} onClick={() => handleDelete(obj.id)} />
          </ListGroupItem>
        )}
      </ListGroup>
      <TodoSummary todos={todos}/>

    </div>

  )
}
