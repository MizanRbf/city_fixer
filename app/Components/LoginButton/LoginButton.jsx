"use client";
import React from "react";
import { signIn } from "next-auth/react";
const LoginButton = () => {
  return (
    <div>
      <button
        className="bg-secondary text-white px-3 py-2 rounded-sm font-bold cursor-pointer"
        onClick={() => signIn()}
      >
        Login
      </button>
    </div>
  );
};

export default LoginButton;
