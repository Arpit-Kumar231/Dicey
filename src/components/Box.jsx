import './Box.css'
const Box = ({val,onClick,sl}) => {
  

    

  return (
    <div onClick={() => (
      onClick(val)

  )} className={sl===val ? "Selected" : "NotSelected"}>{val}</div>
  )
}

export default Box