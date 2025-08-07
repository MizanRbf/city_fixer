import React from "react";
import SocialLogin from "../Components/Login/SocialLogin";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-50">
        <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
          <h2 className="text-center bg-secondary text-white py-3 rounded-t-sm">
            Login Your Account
          </h2>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>

            {/* Divider */}
            <div className="flex items-center">
              <hr className="w-1/2 text-gray-300" />
              <p className="mx-3">or</p>
              <hr className="w-1/2 text-gray-300" />
            </div>

            {/* Google */}
            <SocialLogin></SocialLogin>

            <p>
              Do not have an account? Please{" "}
              <Link
                href={"/register"}
                className="text-red-500 font-semibold hover:underline cursor-pointer"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
