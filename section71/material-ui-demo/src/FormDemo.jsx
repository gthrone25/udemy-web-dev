import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box'
import { useState } from 'react';

export default function FormDemo() {
    const [name, setName] = useState("")
    const [volume, setVolume] = useState(50)
    const updateName = (e) => {
        setName(e.target.value)
    }
    const changeVolume = (e, newVal) => {
        setVolume(newVal);
    }
    return (
        <Box sx={{
            border: "1px solid red",
            p: 6
        }}>
            <h1>Name is: {name}</h1>
            <TextField id="outlined-basic"
                label="Puppy Name"
                variant="outlined"
                placeholder='Fido'
                onChange={updateName}
            />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="standard-basic" label="Standard" variant="standard" />

            <h2>Volume: {volume}</h2>
            <Slider aria-label="Volume" value={volume} onChange={changeVolume} />

        </Box >
    )
}