import React from 'react';

import { ReactComponent as LandingLogo } from './../../assets/SVGs/online-learning.svg';
import { ReactComponent as BenefitsLogo } from './../../assets/SVGs/benefits.svg';
import { ReactComponent as Checkbox } from './../../assets/SVGs/checkbox.svg';

const HomePage = () => {
  return (
    <div className='homepage'>
      <section className="landing">
        <div className="landing__p">
          <p className="landing__p--1">Ține pasul cu tehnologia în era digitală a învățământului</p>
          <p className="landing__p--2">Platforma ta de organizare școlară dedicată învățământului preuniversitar unde totul se întamplă online și în siguranță</p>
          <button className="landing__cta">Află mai multe</button> {/*link to 'despre noi'*/}
        </div>
        <LandingLogo className="landing__logo" />
      </section>

      <section className="benefits">
        <BenefitsLogo className="benefits__img" />
        <h1 className="benefits__title">Principalele beneficii</h1>
        <div className="benefits__list">
          <div className="benefits__list--1">
            <Checkbox className="benefits__checkbox" />
            <div className="benefits__content">
              <p>Catalog electronic</p>
              <p>Urmărește sau gestionează în timp real de la distanță notele, absențele sau orarul</p>
            </div>
          </div>

          <div className="benefits__list--2">
            <Checkbox className="benefits__checkbox" />
            <div className="benefits__content">
              <p>Stocarea materialelor</p>
              <p>Cadrul didactic își poate stoca toate documentele necesare predării elevilor</p>
            </div>
          </div>

          <div className="benefits__list--3">
            <Checkbox className="benefits__checkbox" />
            <div className="benefits__content">
              <p>Cursuri online</p>
              <p>Cadrul didactic are posibilitatea de a ține orele online prin interacțiunea cu elevii și transmiterea de materiale didactice</p>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  )
}

export default HomePage;