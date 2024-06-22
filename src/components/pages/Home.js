import React from 'react';
import './Home.css';
import picture from './images/profile_pic.jpg';

const Home = () => {
  return (
    <div className="home">
      <img src={picture} alt="profile picture" className="profile-picture" />
      <h1 id="home-title">Welcome to My Portfolio</h1>
      <p className="typing-message">Hello, I'm Jared, a passionate front-end developer and video editor.</p>
    </div>
  );
};

export default Home;
