import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    const handleClick = () =>{
        alert('You gym membership has been added to your account')
    }
  return (
    <div className="landing-page">
      <h1>Welcome to Our Gym</h1>
      <p>Your fitness journey starts here.</p>
      <button className="cta-button" onClick={handleClick}>Get Started</button>
    </div>
  );
};

export default LandingPage;
