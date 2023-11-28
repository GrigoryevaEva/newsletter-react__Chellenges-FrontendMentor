import { useNavigate } from "react-router-dom";

import SubscribeInputField from "../../module/SubscribeInputField";
import MainCardInfo from "../../components/MainCard/MainCardInfo";
import MainCardHero from "../../components/MainCard/MainCardHero";
import Card from "../../UI/Card";

const PageMain = () => {
  // const navigate = useNavigate();

  return (
    <Card className="card-subscribe">
      <section className="card-subscribe__box card-subscribe__box-section grid-section">
        <MainCardInfo />
        <SubscribeInputField />
      </section>
      <MainCardHero/>
    </Card>
  )
}

export default PageMain;