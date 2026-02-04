import { useState } from "react"

import "./Todo.css";


const Todo = () => {
    const[input,Setinput]=useState("")
    const[Task,SetTask]=useState([])

    const showInput =(e)=>{
      
     Setinput(e.target.value)

    }

    const DisplyList = () =>{
        if(input.trim()==="" ) return;         //  for avoid emty task
        SetTask ([...Task ,input])
        Setinput("")
    }

    const DeletTask =(index) => {   //  for delet task
        const newtask = [...Task]
        newtask.splice(index,1)
        SetTask(newtask)
    }




  return (
    
    <div className="todo-container" >
        <h1> YOUR TODO LIST {input}</h1>
        <input
        value={input}
        onChange={showInput}
         type="text" 
          placeholder="ENTER YOUR TASK"/>
        <button onClick={DisplyList}> ADDTASK</button>

       <div>
       <ul>
        {Task.map((item,index)=>(
            <li key={index}>{item}
            <button onClick={()=>DeletTask(index)}> DELET</button>
            
            </li>
        ))}
       </ul>
       



       </div>



    </div>
   
  )
}

export default Todo
