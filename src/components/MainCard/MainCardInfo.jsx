import MainCardInfoList from "./MainCardInfoList";
import HeaderText from "../../UI/HeaderText";
import Text from "../../UI/Text";

const MainCardInfo = () => {
  return (
    <article className="card-subscribe__info">
      <HeaderText className="card-subscribe__info-list-header">Stay updated!</HeaderText>
      <Text className="card-subscribe__info-list-description">Join 60,000+ product managers receiving monthly updates on:</Text>
      <MainCardInfoList />
    </article>
  )
}

export default MainCardInfo;