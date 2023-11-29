import { useState, useEffect } from "react"

import List from '@mui/material/List';
import {Box} from "@mui/material"
import Typography from '@mui/material/Typography';


import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"))
    if(!data) return [];
    return data
}

export default function ToDoList() {
    // const starter = [
    //     { id: 1, text: "walk the dog", isCompleted: true },
    //     { id: 2, text: "go shopping", isCompleted: false }
    // ]
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    const removeTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter((t) => t.id !== id);
        })
    }

    const toggleTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map((item) => {
                if (item.id === id) {
                    return { ...item, isCompleted: !item.isCompleted }
                } else {
                    return item
                }
            })
        })
    }

    const addTodo = (text) => {
        setTodos((prevTodos) => {
            return [...prevTodos, {text: text, id: crypto.randomUUID(), isCompleted: false}]
        });
    }

    return (
        <Box sx={{
            display: "flex",
            justifyConent: "center",
            flexDirection: "column",
            alignItems: "center",
            m: 3
        }}
        >
            <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
            React Todos
          </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((item) => {
                return (
                    <ToDoItem
                        item={item}
                        key={item.id}
                        remove={removeTodo}
                        // alt method to keep logic here 
                        toggle={() => toggleTodo(item.id)}
                    />
                );
            })}
            <ToDoForm addTodo={addTodo}/>
        </List>
        {/* // <div>
        //     <ul>
        //         {starter.map((item, idx) => (
        //             <li key={item.id}>
        //                 {item.text}
        //             </li>
        //         ))}
        //     </ul>
        //     <form action="">
        //         <TextField id="filled-basic" label="Filled" variant="filled" />

        //     </form>
        // </div> */}
        </Box>
    )
}