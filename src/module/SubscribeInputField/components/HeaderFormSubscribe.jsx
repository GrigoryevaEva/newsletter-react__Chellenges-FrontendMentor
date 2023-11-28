const HeaderFormSubscribe = (props) => {

  return (
    <div className="card-subscribe__subscribe-form-header">
      <label htmlFor="" className="card-subscribe__subscribe-form-header-label">Email address</label>
      {props.error}
    </div>
  )
}

export default HeaderFormSubscribe;