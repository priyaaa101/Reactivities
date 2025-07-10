import { ListItem, ListItemText, Typography } from '@mui/material';
import {useState, useEffect} from 'react'
import axios from "axios"
function App() {

 const[activities, setActivities] = useState<Activity[]>([]);

 useEffect(() => {
      axios.get<Activity[]>('https://localhost:5001/api/activities')
           .then(response => setActivities(response.data))
    }, [])
  return (
    <>
    <Typography variant='h3'>Reactivities</Typography>
    <ul>
      {activities.map((activity) => (
        <ListItem key={activity.id}>
          <ListItemText>{activity.title}</ListItemText>
        </ListItem>
      ))}
    </ul>
    </>
  )
}

export default App
