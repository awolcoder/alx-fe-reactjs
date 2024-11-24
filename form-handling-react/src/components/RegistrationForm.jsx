import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); // Object to track field-specific errors

  const validateFields = () => {
    const newErrors = {};

    if (!username) {
      newErrors.username = 'Username is required';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateFields()) {
      console.log('Form Submitted:', { username, email, password });
      alert('Registration successful!');
      setUsername('');
      setEmail('');
      setPassword('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Registration Form</h2>

      {/* Username Field */}
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={username} // Specific value for username
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}

      {/* Email Field */}
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email} // Specific value for email
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

      {/* Password Field */}
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password} // Specific value for password
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

      {/* Submit Button */}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;

