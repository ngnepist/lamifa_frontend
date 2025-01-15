import React, { useState } from 'react';
import './loginForm.css'; // Ajoutez des styles pour le formulaire

const LoginForm = () => {
    const [loginFormData, setLoginFormData] = useState({
        id: '',
        email: '',
        password:'',

      });
      const handleFormChange = (event) => {
        const { id, value } = event.target;
        setLoginFormData({
          ...loginFormData,
          [id]: value
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulez une action de connexion
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="yourmail@email.mail"
                        value={loginFormData.email}
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
                        value={loginFormData.password}
                        onChange={handleFormChange}
                        required
                    />
                </div>
                <button type="submit" className="login-button">
                    Login
                </button>
                <div className="forgot-password">
                    <a href="/reset-password">Forgot Password?</a> {/* Lien pour récupérer le mot de passe */}
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
