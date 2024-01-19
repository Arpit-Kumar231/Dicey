import DiceText from "./DIceText"
import DiceImage from "./DiceImage"
import './RollDice.css'

const RollDice = ({dice,setdice,set,total}) => {
  return (
    <div className="flex">
        <DiceImage setdice={setdice} dice={dice} set={set}/>
        <DiceText total={total} />

    </div>
  )
}

export default RollDice