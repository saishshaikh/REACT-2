import "../index.css"

import { useState } from "react"


const LikeIncDec = () => {
    const[inc,setinc]=useState(0)
    const Increase =()=>{
    
    setinc(inc+1)
}

const Decrease =()=>{
    setinc(inc-1)
}

  return (
    <div>

         <h1>Count ={inc} </h1>
  
    <h1></h1>
    <div>
        <button onClick={Increase}>Increase</button>
        <button onClick={Decrease}>Decrease</button>
    </div>
      </div>
  )
}

export default LikeIncDec
