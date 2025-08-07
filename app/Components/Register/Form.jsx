"use client";
import React from "react";

const Form = () => {
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
  };
  return (
    <form onSubmit={handleSubmit} className="fieldset">
      {/* Name */}
      <label className="label">Name</label>
      <input type="text" name="name" className="input" placeholder="Name" />

      {/* Photo */}
      <label className="label">Photo</label>
      <input type="file" name="photo" className="input" placeholder="Photo" />

      {/* Email */}
      <label className="label">Email</label>
      <input type="email" name="email" className="input" placeholder="Email" />

      {/* Password */}
      <label className="label">Password</label>
      <input
        type="password"
        name="password"
        className="input"
        placeholder="Password"
      />
      <div>
        <a className="link link-hover">Forgot password?</a>
      </div>
      <button type="submit" className="btn btn-neutral mt-4">
        Register
      </button>
    </form>
  );
};

export default Form;
