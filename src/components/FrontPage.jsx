import FrontImg from "./FrontImg"
import FrontText from "./FrontText"
import './FrontPage.css'

const FrontPage = ({change}) => {
  return (
    <div className="Front">
        <FrontImg />
        <FrontText x={change} />
    </div>
  )
}

export default FrontPage