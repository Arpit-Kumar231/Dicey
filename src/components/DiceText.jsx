import './DiceText.css'
import { useState } from 'react'
const DiceText = ({total}) => {
    const [isOpen,setisOpen] = useState(false);
    const set = () => {
        setisOpen(!isOpen);
    }
    const set2 = () => {
        total(0);
    }
  return (
    <div className='text'>
        <p className='top'>Click on the Dice to Roll</p>
        <button onClick={set2}>Reset Score</button>
        <button className='rules' onClick={set}>Show Rules</button>
        {
            isOpen ?  <div className='lowt'>
            <h1 className='x'>How to play the dice game</h1>
            <p className='lower'>Select any number</p>
            <p className='lower'>Click on dice image</p>
            <p className='lower'>After click if selected number is equal to dice number you will get the same point as dice number if you get wrong guess then 2 points will be deducted</p>
        </div> : <div></div>
        }
       
    </div>
  )
}

export default DiceText