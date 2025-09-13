import "./App.css"
import {useState} from "react"
function App() {
    const[count,setCount]=useState(0)
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")  
   const handleClick=(name)=>{
     alert("Login Successful")
   }
   const handleSubmit=(event)=>{
     event.preventDefault();
     alert(`Email:${email}\nPassword:${password}\nYou are logged in`)
   }
   const handleChange=(event)=>{
     console.log(event.target.name)
     console.log(event.target.value)
   }

  const handleEmail=(event)=>{
    setEmail(event.target.value)
  }
  const handlePassword=(event)=>{
    setPassword(event.target.value)
  }
  const handleIncrement=()=>{
    setCount((prevCount)=>prevCount+1)
    console.log(count)
  }
  
  return (
    <div>
      {<form onSubmit={handleSubmit}>
      <p>Iam a button</p>
      <input type="text" name="Email" placeholder="Enter your Email" onChange={handleChange}/><br/>
      <input type="password" name="password" placeholder="Enter your password" onChange={handleChange}/><br/>
      <button type="Submit">Login</button>
      </form> }
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )

}

export default App
