import MainCardInfoListPoint from "./MainCardInfoListPoint";

const MainCardInfoList = () => {
  const points = [
    {
      text: 'Product discovery and building what matters',
    },
    {
      text: 'Measuring to ensure updates are a success',
    },
    {
      text: 'And much more!',
    },
  ]

  return (
    <ul className="card-subscribe__info-list">
      {points.map((point) => (
        <MainCardInfoListPoint text={point.text}/>
      ))}
    </ul>
  )
}

export default MainCardInfoList;