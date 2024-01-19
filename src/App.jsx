import FrontPage from "./components/FrontPage"
import { useState } from "react"
import SecondPage from "./components/SecondPage";


function App() {
  const [Play,setPlay] = useState(false);
  const change = () => {
    setPlay(!Play);
  }

  return (
    <>
     {Play ? <SecondPage /> : <FrontPage change={change}/>}
    
     
    </>
  )
}

export default App
