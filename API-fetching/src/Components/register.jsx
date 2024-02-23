import React, { useState } from 'react';
import './register.css';

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
    const { Name, Email, Password, ResetPassword } = form;

    if (Name === ' ') {
      setNameerror(true);
      return;
    }
    if (!Email.includes('@gmail.com')) {
      setEmailError(true);
      return;
    }
    if (Password == ' ' || ResetPassword == ' ' || Password !== ResetPassword) {
      setWholeError(true);
      return;
    }
    setSuccess(true);
  };
  return (
    <div className="mainDiv">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
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
              {' '}
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
          <button type="submit">Submit</button>
        </div>
      </form>
      {Success ? <p style={{ color: 'green' }}>Registered</p> : null}
    </div>
  );
}
export default Register;
