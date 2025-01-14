import React, { useState } from 'react';
import "./App.css";

const App = () => {
  const [showFamilyTreeList, setshowFamilyTreeList] = useState(true);
  return (
    <div className="hero">
      {/* <div className={`landing-page ${showFamilyTreeList ? 'fade-out' : ''}`}> */}
      <div className="landing-page">
        <div className="hero-left">
          <h1>Welcome To laMIFA</h1>
          <div className="underline"></div>
          <p>It is important to know your roots</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-right">
          <h2>Welcome to laMIFA: here, family comes first!</h2>
          <p>
          This web application allows you to create, save, and share your family tree with ease and security. 
          With laMIFA, you can pass down a precious legacy to future generations, preserving your family’s history and memories.
          </p>
        </div>
      </div>
      {/* <div className={`familyTree-list-container ${showFamilyTreeList ? 'visible' : ''}`}>

      </div> */}
    </div>
  );
};

export default App;