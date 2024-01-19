import RollDice from "./RollDice"
import UpperSection from "./UpperSection"
import { useState } from "react"

const SecondPage = () => {
  const [selectedNumber,setselectedNumber] = useState(0);
  const [Total,setTotal] = useState(0);
  const [dice,setdice] = useState(1);
  console.log(dice);
  console.log(selectedNumber);
  const set = () => {
    if(dice===selectedNumber){
      setTotal((prev) => prev+dice);
    }
    else{
      setTotal((prev) => prev-2);
    }
  }
  
  return (
    <div>
        <UpperSection selectedNumber={selectedNumber} setselectedNumber={setselectedNumber} Total={Total}/>
        <RollDice dice={dice} setdice={setdice} set={set} total={setTotal}/>
    </div>
  )
}

export default SecondPage