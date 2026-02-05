import { useEffect, useState } from "react"

 const  ChnagingA =() => {
    console.log ("CHANGING A")
 }

  const  ChnagingB =() => {
    console.log ("CHANGING B")
 }


const USeEffect = () => {
    const[A,SetA]=useState(0)
    const [B,SetB]=useState(0)

    useEffect (function(){
        ChnagingA()
    },[A])
   
    useEffect (function(){
        ChnagingB()
    },[B])


  return (
    <div>
        <h1> : {A}</h1>
        <h1> : {B}</h1>
<div>
    <button onClick={()=>SetA(A+1)}>CHANGE A</button>
    <button onClick={()=>SetB(B-1)}>CHANGE B</button>
</div>
    </div>
  )
}

export default USeEffect
