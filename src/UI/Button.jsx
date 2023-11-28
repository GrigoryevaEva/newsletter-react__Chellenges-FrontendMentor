const Button = (props) => {
  const classes = 'button ' + props.className
  
  return (
    <button className={classes} onClick={props.onClick} type={props.type} name={props.name}>{props.children}</button>
  )
}

export default Button;