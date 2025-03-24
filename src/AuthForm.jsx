import React, { useState } from "react";

const AuthForm = ({ isLogin: initialLogin, setIsLogin, closeForm }) => {
  const [isLogin, setFormLogin] = useState(initialLogin);
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!isLogin && !formData.username) newErrors.username = "Username is required";
    if (!isLogin && !formData.email) newErrors.email = "Email is required";
    if (!formData.password || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters long";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setMessage("");

    setTimeout(() => {
      setLoading(false);
      setMessage(isLogin ? "Login Successful!" : "Signup Successful!");

      setTimeout(() => {
        closeForm();
      }, 2000);
    }, 1000);
  };

  return (
    <div className="auth-form">
      <button className="close-btn" onClick={closeForm}>&times;</button>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      {message && <p className="success-message">{message}</p>}
      {errors.general && <p className="error">{errors.general}</p>}

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <input
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </>
        )}

        <input
          type={isLogin ? "text" : "email"}
          placeholder={isLogin ? "Username or Email" : "Email"}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"} 
        <button onClick={() => setFormLogin(!isLogin)}>
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;