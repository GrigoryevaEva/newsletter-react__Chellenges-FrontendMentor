const InputEmailSubscribe = (props) => {
  
  return (
    <input className={props.inputStyle} placeholder="email@company.com" value={props.value} onChange={props.onChange}/>
  )
}

export default InputEmailSubscribe;