import desktopHero from "../../assets/images/illustration-sign-up-desktop.svg"
import mobileHero from "../../assets/images/illustration-sign-up-mobile.svg"

const MainCardHero = () => {
  return (
    <div className="card-subscribe__box card-subscribe__box-hero card-subscribe__box-mobile grid-hero">
      <picture>
        <source className="card-subscribe__hero-desktop" media="(min-width:763px)" srcSet={desktopHero}/>
        <img className="card-subscribe__hero-mobile" src={mobileHero} alt="" />
      </picture>
    </div>
  )
}

export default MainCardHero;