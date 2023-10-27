import FormSubscribe from "./components/FormSubscribe";
import SendButtonSubscribe from "./components/SendButtonSubscribe";

const SubscribeInputField = () => {
  return (
    <div className="card-subscribe__subscribe">
      <FormSubscribe />
      <SendButtonSubscribe></SendButtonSubscribe>
    </div>
  )
}

export default SubscribeInputField;