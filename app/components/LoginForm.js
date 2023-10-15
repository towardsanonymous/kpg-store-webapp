import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../custom.css"

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here using formData
    console.log('Form submitted with:', formData);
  };

  return (
    <div className="bg-white">
      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="px-3">
          <div className="form-group pt-5">
            <div className="d-flex justify-content-center pb-2">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control auth-input"
                placeholder="Email"
              />
            </div>
            <div className="d-flex justify-content-center">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control auth-input"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="mt-20 d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-main"
              style={{ backgroundColor: 'rgb(236, 91, 35)', borderRadius: '4px' }}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
