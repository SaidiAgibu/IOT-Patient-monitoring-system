import  { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import logoutAvatar from '../data/images/logoutAvatar.png';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Preparing the data to send
    const data = {
      email: email,
      password: password
    };

    // Making a POST request to our backend API to register the user
    fetch('http://localhost:4000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        toast.success('Login success');
        window.location.href = 'http://localhost:3000';
      } else {
        toast.error('Failed to login');
      }
    })
    .catch(error => {
      // Handle any network or API errors
      toast.error('Failed to login', error);
      console.error('Error:', error);
    });
  };


  return (
    <section className="login-container">
      <form className="form" onSubmit={handleLogin}>
      <p className="form-title">Sign in to your account</p>
      <div className="input-container">
        <input placeholder="Enter email" type="email" value={email}
            onChange={(e) => setEmail(e.target.value)} />
        <span>
          <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
        </span>
      </div>
      <div className="input-container">
        <input placeholder="Enter password" type="password" value={password}
            onChange={(e) => setPassword(e.target.value)} />
        <span>
          <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
        </span>
      </div>
      <button className="submit" type="submit">
        Sign in
      </button>
      <p className="signup-link">
        No account?
        <a href="/register">Sign up</a>
      </p>
    </form>
      <ToastContainer />
    </section>
  );
};

export default Login;


