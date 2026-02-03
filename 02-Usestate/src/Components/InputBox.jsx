import { useState } from "react"

const InputBox = () => {

  const [show, setshow] = useState("")
  const [name, setname] = useState("")

  const screenshow = () => {
    setname(show)
  }

  const inputname = (e) => {
    setshow(e.target.value)
  }

  return (
    <div>
      <h1>YOUR INPUT {name}</h1>

      <input 
        type="text" 
        placeholder="INTER YOUR INPUT"
        onChange={inputname}
      />

      <button onClick={screenshow}>CLICK ME</button>
    </div>
  )
}

export default InputBox
