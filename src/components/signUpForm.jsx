import React, { useState } from 'react';
import './signUpForm.css'; // Ajoutez des styles pour le formulaire

const SignUpForm = () => {
    const [SignUpFormData, setSignUpFormData] = useState({
        id: '',
        email: '',
        password:'',
        confirmedPassword:'',

      });


      const handleFormChange = (event) => {
        const { id, value } = event.target;
        setSignUpFormData({
          ...SignUpFormData,
          [id]: value
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('confirmed Password:', confirmedPassword);
        // Simulez une action de connexion
        if (password.value === confirmedPassword.value) {
          } else {
            alert('Passwords do not match. Please try again.');
          }
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="yourmail@email.mail"
                        value={SignUpFormData.email}
                        onChange={handleFormChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="your password"
                        value={SignUpFormData.password}
                        onChange={handleFormChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmedPassword"
                        placeholder="your password"
                        value={SignUpFormData.confirmedPassword}
                        onChange={handleFormChange}
                        required
                    />
                </div>
                <button type="submit" className="signup-button">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUpForm;
