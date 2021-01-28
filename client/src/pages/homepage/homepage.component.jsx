import React from 'react';

import { ReactComponent as LandingLogo } from './../../assets/SVGs/online-learning.svg';

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
    </div>
  )
}

export default HomePage;