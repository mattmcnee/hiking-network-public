import React, { useState, useEffect } from 'react';
import { useAuth } from '/src/services/useAuth';
import { Link, useNavigate } from 'react-router-dom';

import Navbar from '/src/components/Navbar';

import { PrimaryButton, ClickableText } from '/src/components/Buttons';
import FormInput from '/src/components/FormInput';

import './AuthPages.scss';

const LoginPage = () => {
  const { login, loading, user } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await login(email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignUp = () => {
    navigate('/signup', { replace: true });
  };

  useEffect(() => {
    if (user && !loading) {
      navigate(-1);
    }
  }, [user, loading]);

  if (user) {
    return (
      <div className='page-container'>
        <Navbar />
      </div>
    );
  }

  return (
    <div className='page-container'>
      <Navbar />
      <div className="auth-container">
        <h2>Login to your account</h2>
        <form onSubmit={handleLogin} className="login-form">
          <FormInput
            name="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            autoComplete="username"
          />

          <FormInput
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            autoComplete="current-password"
          />

          <div className="flex-col">
            <PrimaryButton type="submit" disabled={loading}>
              Login
            </PrimaryButton>

            <ClickableText type="button" onClick={handleSignUp}>
              Don't have an account? <span>Sign Up</span>
            </ClickableText>
          </div>
        </form>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default LoginPage;
