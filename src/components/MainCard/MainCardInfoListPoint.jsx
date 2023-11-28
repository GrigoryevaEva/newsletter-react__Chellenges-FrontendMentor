import iconlist from "../../assets/images/icon-list.svg";

const MainCardInfoListPoint = (props) => {
  
  return (
    <div className="card-subscribe__info-list-point">
      <img src={iconlist} alt="" className="card-subscribe__info-list-point-icon"/>
      <p className="card-subscribe__info-list-point-text">{props.text}</p>
    </div>
  )
}

export default MainCardInfoListPoint;