/** @format */
import SignUpValidationButton from "@/components/SignUp/SignUpValidationButton";
import style from "../../../style/Pages/privacy.module.css";
export default function Privacy() {
  return (
    <section className={style.privacySection}>
      <div className={style.privacyContent}>
        <div className='text-center'>
          <img
            src='/images/signUpLogo.svg'
            alt='logo'
            className='m-auto'
          />
        </div>
        <img
          src='/images/leftArrow.svg'
          alt='leftArrow'
          className={style.leftArrow}
        />
        <h2 className={style.legalHeading}>
          Legalities and Privacy Commitments
        </h2>
        <p className={style.privacyPara}>
          Lorem ipsum dolor sit amet consectetur. Convallis turpis tincidunt
          feugiat amet quam aliquam est lectus. Justo viverra morbi sed non id
          arcu nulla. Nam sodales pellentesque non mi massa massa egestas morbi
          feugiat. Sapien eu tortor pellentesque facilisis sit tristique
          tristique nulla. Quis tortor eu nulla vulputate in. Fermentum
          condimentum lacinia sit mauris aliquam nec porta magna. Accumsan amet
          elementum faucibus vulputate proin scelerisque turpis eu. Non in nunc
          sit viverra enim sed. Ac mattis aenean iaculis pellentesque egestas.
          Est sed felis diam volutpat id neque eget mi. Vel eu sit amet orci
          lobortis. Ut augue et porttitor gravida nunc viverra. Aliquet risus
          amet in purus sodales ante vitae elementum. Suscipit cursus nunc
          aenean vitae vestibulum purus aliquam odio quis. Vitae tortor sit
          congue molestie vivamus purus aliquam. Enim egestas viverra egestas ac
          molestie nec a. Neque tellus at proin pulvinar amet potenti dolor.
          Curabitur cras accumsan vel lectus est mollis lacus. Lectus at quis
          lectus laoreet eget sit eu quis. In vulputate lacus pretium sit ipsum
          mi sodales mi. Pellentesque velit sed vulputate pulvinar at augue
          mauris turpis. Tortor enim massa nisi vitae at massa sapien adipiscing
          lectus. In viverra vulputate convallis tempor curabitur vitae. Viverra
          fringilla pharetra duis sapien placerat nec massa. Ac ut non donec
          fermentum. Viverra condimentum scelerisque nisi commodo nec vel id
          mauris tempus. Convallis aliquam in vulputate nisl. Arcu tristique mi
          rhoncus integer faucibus turpis enim quis sagittis.{" "}
        </p>
        <SignUpValidationButton
          ButtonText='I Agree'
          backgroundColor='#6000DA'
          color='#FFFFFF'
          border='none'
        />
      </div>
    </section>
  );
}
