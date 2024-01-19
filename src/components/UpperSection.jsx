import Box from './Box'
import './UpperSection.css'
const UpperSection = ({selectedNumber,setselectedNumber,Total}) => {
    const arrNumber = [1,2,3,4,5,6];
    
    
  return (
    <div className='Upper' >
        <div className='score'>
            <h1 className='s'>{Total}</h1>
            <p>Total Score</p>
        </div>
        <div className='Num'>
            {arrNumber.map((value,i) => (
                <Box key={i} val={value} onClick={(value) => {
                    setselectedNumber(value);
                }} sl={selectedNumber}/>
            ))}
            
            


        </div>
        
    </div>
  )
}

export default UpperSection