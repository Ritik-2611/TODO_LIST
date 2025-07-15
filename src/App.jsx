import { useState } from 'react'
import './App.css'

function App() {

  const [arr,setarr]=useState([{
    Work : "Hit Gym ",
    Description : "Keep body fit ",
    Done : false,
  }]);

  function check(){
    let nwarr = [];
    for(let i=0;i<arr.length;i++){
      nwarr.push(arr[i]);
    }
    nwarr.push({
      Work : document.getElementById("work").value,
      Description : document.getElementById("description").value,
      Done : document.getElementById("update").value
    })
    setarr(nwarr);
    document.getElementById("work").value="",
    document.getElementById("description").value="",
    document.getElementById("update").value="Select Status"
  }

  return (
    <div id='outer'>
      <input class='outerstyle'id='work' type="text" placeholder='Add Task'/>
      <input class='outerstyle'id='description' type="text" placeholder='Add Description'/>
      <select class='outerstyle' id='update'>
        <option disabled selected>Select Status</option>
        <option value="true">Done</option>
        <option value="false">Not Done</option>
      </select>
      <br />
      <button onClick={check}>Add Task</button>
      <br />
      <br />
      <hr />
      <br />
      {
        arr.map((data)=>(
          <Todo
          Done={data.Done}
          Work={data.Work}
          Description={data.Description}
          />
        ))
      }
    </div>
  );
}

function Todo(data){
  return (
    <div id='beauty'>
    <span>
      {data.Done==="true" ? <input type="checkbox" checked disabled /> : <input type="checkbox" disabled/>}
    </span>
    <span id='stlying'>{data.Work}</span>
    <span id='stlying'>{data.Description}</span>
    <br />
  </div>
  )
}

export default App
