import React, { useState } from 'react'
import { todosData } from '../data'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { FaTrashAlt } from "react-icons/fa";
import { MdFileDownloadDone } from "react-icons/md";



export const Todo = () => {
  const [todos, setTodos] = useState(todosData)
  console.log(todos);

  const handleDelete = (id) => {
    console.log(id);
    setTodos(prev => prev.filter(obj => obj.id != id))
  }

  return (
    <div>
      <ListGroup>
        {todos.map(obj =>
          <ListGroupItem key={obj.id} className='d-flex justify-content-between'>
            <MdFileDownloadDone style={{ color: obj.isDone ? "lightgreen" : "gray", fontSize: "2rem" }} />
            <div style={{ textDecoration: obj.isDone ? "line-through" : "none" }}>
              {obj.desc}
            </div>
            <FaTrashAlt style={{ color: "red", fontSize: "2rem" }} onClick={() => handleDelete(obj.id)} />
          </ListGroupItem>
        )}
      </ListGroup>
    </div>
  )
}
