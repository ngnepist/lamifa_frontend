import React, { useState } from 'react';
import LoginForm from './components/loginForm';
import SignUpForm from './components/signUpForm';
import "./App.css";


const App = () => {
  const [showFamilyTreeList, setshowFamilyTreeList] = useState(true);
  const [showLoginForm, setshowLoginForm] = useState(false);
  const [showSignUpForm, setshowSignUpForm] = useState(false);

  const handleLogin = () =>{
    setshowSignUpForm(false);
    setshowLoginForm(true);
  }
  const handleSignUp = () =>{
    setshowSignUpForm(true);
    setshowLoginForm(false);
  }


  return (
    <div className="hero">
      {/* <div className={`landing-page ${showFamilyTreeList ? 'fade-out' : ''}`}> */}
      <div className="landing-page">
        <div className="hero-left">
          <h1>Welcome To laMIFA</h1>
          <div className="underline"></div>
          <p>It is important to know your roots</p>
          <div className='login-sign_up-container'> 
            <a href="#" onClick={() => handleLogin()} className="cta-button">Login</a>
            <a href="#" onClick={() => handleSignUp()} className="cta-button">Sign up</a>
          </div>
        </div>
        { (!showLoginForm && !showSignUpForm) &&
           <div className="hero-right">
           <h2>Welcome to laMIFA: here, family comes first!</h2>
           <p>
           This web application allows you to create, save, and share your family tree with ease and security. 
           With laMIFA, you can pass down a precious legacy to future generations, preserving your family’s history and memories.
           </p>
          </div>
        }
        {(!showLoginForm && showSignUpForm) && <SignUpForm/>}
        {(showLoginForm && !showSignUpForm) && <LoginForm/>}
      </div>
      {/* <div className={`familyTree-list-container ${showFamilyTreeList ? 'visible' : ''}`}>

      </div> */}
    </div>
  );
};

export default App;