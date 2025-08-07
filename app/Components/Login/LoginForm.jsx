"use client";
import React from "react";

const LoginForm = () => {
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.email.value;
    console.log(email, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="fieldset">
        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          name="email"
          placeholder="Email"
        />
        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          name="password"
          placeholder="Password"
        />
        <div>
          <a className="link link-hover">Forgot password?</a>
        </div>
        <button type="submit" className="btn btn-neutral mt-4">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
