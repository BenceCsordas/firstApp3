export const randNr = (min, max)=>{
    return Math.floor(Math.random()*(max-min+1))+min
}

import axios, { all } from "axios"

const baseUrl = "http://localhost:8000/"

//összes adat lekérése
export const getTodos = async (setTodos) => {
    const resp = await axios.get(baseUrl+"todos")
    setTodos(resp.data)
}

//todo törlése
export const deleteTodo = async (id) => {
    const url = `${baseUrl}todos/${id}`
    console.log(url);
    await axios.delete(url)
}

//új hozzáadása
export const addTodo = async (desc) => {
    await axios.post(baseUrl+"todos", {desc})
}

export const doneTodo = async (id) => {
    await axios.patch(`${baseUrl}todos/${id}`)
}

export const deleteAllTodo = async () => {    
    await axios.delete(`${baseUrl}delall`)
}