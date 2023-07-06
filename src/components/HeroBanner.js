import React from 'react';

import HeroBannerImage from '../assets/images/davidlaid2.jpg';

const HeroBanner = () => (
      <div className="hero-banner">
           <p className="title">GYM SHARK</p>
            <p className="subtitle">
                      Sweat, Smile <br />
                   And Repeat
             </p>
            <p className="description">
           Check out the most effective exercises personalized to you
           </p>
        <div className="explore-button">
              <a href="#exercises" className="button-link">Explore Exercises</a>
         </div>
  <p className="exercise-text">Exercise</p>
  <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
</div>
);

export default HeroBanner;
