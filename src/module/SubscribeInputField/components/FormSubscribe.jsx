import { useState } from "react";

import HeaderFormSubscribe from "./HeaderFormSubscribe";
import InputEmailSubscribe from "./InputEmailSubscribe";
import ErrorMessage from "./ErrorMessage";
import Button from "../../../UI/Button"
import SendButtonSubscribe from "./SendButtonSubscribe";

const FormSubscribe = () => {

  const [inputEmail, setInputEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(<span></span>);
  const [inputStyle, setInputStyle] = useState('card-subscribe__subscribe-form-input');

  const handleEmailChange = (event) => {
    setInputEmail(event.target.value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!checkCorrectEmail(inputEmail)) {
      setErrorMessage(<ErrorMessage />)
      setInputStyle('card-subscribe__subscribe-form-input-error');
      return
    } else {
      setErrorMessage(<span></span>);
      setInputStyle('card-subscribe__subscribe-form-input');
    }

    const userEmail = {
      email: inputEmail,
    };
    console.log(userEmail);
  }

  const checkCorrectEmail = (email) => {
    let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (reg.test(email) !== false) {
      return true;
    } else return false;
  }

  
  return (
    <form className="card-subscribe__subscribe-form" onSubmit={handleSubmit}>
      <HeaderFormSubscribe error={errorMessage}/>
      <InputEmailSubscribe value={inputEmail} onChange={handleEmailChange} inputStyle={inputStyle}/>
      <SendButtonSubscribe />
    </form>
  )
}

export default FormSubscribe;