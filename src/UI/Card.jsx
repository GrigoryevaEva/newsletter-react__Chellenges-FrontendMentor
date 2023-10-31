const Card = (props) => {
  const classes = 'card ' + props.className
  
  return (
    <main className={classes}>{props.children}</main>
  )
}

export default Card;