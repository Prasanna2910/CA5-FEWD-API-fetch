import React, { useState } from 'react';
import './register.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';

function Register() {
  const [Nameerror, setNameerror] = useState(false);
  const [EmailError, setEmailError] = useState(false);
  const [wholeError, setWholeError] = useState(false);
  const [Success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    Name: '',
    Email: '',
    Password: '',
    ResetPassword: '',
  });

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const inputField = event.target.name;
    setForm({ ...form, [inputField]: inputValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNameerror(false);
    setEmailError(false);
    setWholeError(false);
    const { Name, Email, Password, ResetPassword } = form;

    if (Name === '') {
      setNameerror(true);
      return;
    }
    if (!Email.includes('@gmail.com')) {
      setEmailError(true);
      return;
    }
    if (Password === '' || ResetPassword === '') {
      setWholeError(true);
      return;
    }
    if (Password !== ResetPassword) {
      setWholeError(true);
      return;
    }
    if (!Nameerror && !EmailError && !wholeError) {
      setSuccess(true);
      return;
    }
  };
  return (
    <div className="mainDiv">
      <h2>Create Account</h2>

      <form onSubmit={handleSubmit}>
        <div
          style={{ backgroundColor: '#5EE9FF', width: '60%' }}
          className="regDiv"
        >
          {Success ? (
            <p style={{ color: 'black' }} className="Registered">
              Registered
            </p>
          ) : null}
        </div>
        <h3>Name</h3>
        <div>
          <input
            type="text"
            name="Name"
            placeholder="Enter your Name"
            className="input"
            onChange={handleChange}
          />
          {Nameerror ? (
            <p style={{ color: 'red', fontSize: '15px' }}>
              Please enter your name
            </p>
          ) : null}
        </div>
        <h3>Email</h3>
        <div>
          <input
            type="email"
            name="Email"
            placeholder="Enter your emailID@gmail.com"
            className="input"
            onChange={handleChange}
          />
          {EmailError ? (
            <p style={{ color: 'red', fontSize: '15px' }}>Enter you email</p>
          ) : null}
        </div>
        <h3>Password</h3>
        <div>
          <input
            type="password"
            name="Password"
            placeholder="Enter your Password"
            className="input"
            onChange={handleChange}
          />
          {wholeError ? (
            <p style={{ color: 'red', fontSize: '15px' }}>
              Please check the password inputs
            </p>
          ) : null}
        </div>
        <h3>Re-enter Password</h3>
        <div>
          <input
            type="password"
            name="ResetPassword"
            placeholder="Confirm your password"
            className="input"
            onChange={handleChange}
          />
          {wholeError ? (
            <p style={{ color: 'red', fontSize: '15px' }}>
              Please check the password inputs
            </p>
          ) : null}
        </div>
        <div>
          <div>
            {Success ? (
              <Link to="/">
                <button type="submit" className="SubmitBtn">
                  Submit
                </button>
              </Link>
            ) : (
              <button type="submit" className="SubmitBtn">
                Submit
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
export default Register;
