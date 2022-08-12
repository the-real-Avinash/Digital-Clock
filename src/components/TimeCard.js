import React , {useState} from 'react';
import '../index.css';

function TimeCard() {
    const [intialTime, setTime] = useState(new Date().toLocaleTimeString());

   const onButtonClick = () =>{
    console.log("time");
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
   }

   setInterval(onButtonClick,1000);

  return (
    <>
        <div className="App">
      <header className="App-header">
      <h2>Time  </h2>
        <h1>{intialTime}</h1>
        {/* <button className="btn" onClick = {onButtonClick}>Get Time</button> */}
      </header>
    </div>
    </>
  )
}

export default TimeCard