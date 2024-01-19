import './DiceImage.css'
const DiceImage = ({dice,setdice,set}) => {
    const genrand = () => {
        return Math.floor(Math.random()*6)+1;
    }
    const set1 = () => {
        const value = genrand();
        setdice(value);
        set();
    }
  return (
    <div onClick={set1}>
        <img src={`/images/dice${dice}.png`} alt="" />
    </div>
  )
}

export default DiceImage