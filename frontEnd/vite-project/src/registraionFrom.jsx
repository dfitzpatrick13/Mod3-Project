import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationError, setRegistrationError] = useState(null);

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setRegistrationError("Passwords don't match");
      return;
    }

    try {
      const response = await fetch('mongodb+srv://danfitz156:12345@cluster0.yyfxne3.mongodb.net/?retryWrites=true&w=majority', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        setRegistrationError(data.message || 'Registration failed');
        return;
      }

      
      console.log('Registration successful');
    } catch (error) {
      console.error('Registration failed:', error); 
      setRegistrationError('Registration failed');
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleRegistration}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      {registrationError && <p style={{ color: 'red' }}>{registrationError}</p>}
    </div>
  );
};

export default RegistrationForm;
