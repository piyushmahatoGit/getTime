import { useState } from 'react'
import '../public/styles/App.css'

function App() {
  const currTime = new Date()
  .toLocaleTimeString()
  .replace("AM", "")
  .replace("PM", "");

const [time, changeTime] = useState(currTime);

function getTime() {
  const newTime = new Date()
    .toLocaleTimeString()
    .replace("AM", "")
    .replace("PM", "");
  changeTime(newTime);
}

setInterval(getTime, 1000);

return (
  <div className="container">
    <h1>{time}</h1>
    <button onClick={getTime}>Get Time</button>
  </div>
);
}

export default App
