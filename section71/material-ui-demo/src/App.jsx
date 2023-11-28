
// import './App.css'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';

import RatingDemo from "./RatingDemo"
import FormDemo from "./FormDemo"
import Navbar from "./Navbar"

function App() {

  return (
    <>
      <Navbar />
      <FormDemo />
      <RatingDemo />
      <Button variant="text">Text</Button>
      <Button variant="contained"
        onClick={() => alert('hi')}
      >Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained"
        onClick={() => alert('hi')}
        color="success"
      >Contained</Button>
      <Button variant="contained"
        onClick={() => alert('hi')}
        color="error"
      >Contained</Button>
      <Button variant="contained"
        onClick={() => alert('hi')}
        color="secondary"
        size="small"
      >Contained</Button>

      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
    </>
  )
}

export default App
