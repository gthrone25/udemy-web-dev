import { useState } from "react"

import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Create from '@mui/icons-material/Create';

export default function ToDoForm({addTodo}) {
    const [text, setText] = useState("");
    const handleChange = (evt) => {
        setText(evt.target.value)
    }
const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
}

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
            < TextField
                id="filled-basic"
                label="Create Todo"
                variant="filled"
                onChange={handleChange}
                value={text}
                InputProps ={{
                    endAdornment: <InputAdornment position="end">
                      <IconButton
                        aria-label="create Todo"
                        edge="end"
                        type="submit"
                      >
                      <Create />
                      </IconButton>
                    </InputAdornment>
                  }}
            />
            </form>

        </ ListItem>
    )
}