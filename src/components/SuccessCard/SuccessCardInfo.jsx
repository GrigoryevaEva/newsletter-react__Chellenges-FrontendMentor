import iconSuccess from '../../assets/images/icon-success.svg';

import Button from "../../UI/Button";
import Header from "../../UI/HeaderText";
import Card from "../../UI/Card";
import Text from "../../UI/Text";

const SuccessCardInfo = () => {
  return (
    <Card className='card-subscribe-success'>
      <img src={iconSuccess} alt="" />
      <Header>Thanks for subscribing!</Header>
      <Text>A confirmation email has been sent to <span></span>. Please open it and click the button inside to confirm your subscription.</Text>
      <Button className='card-subscribe-success__button'>Dismiss message</Button>
    </Card>
  )
}

export default SuccessCardInfo;