import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-20">
        <div className="card bg-base-100 w-full max-w-sm mx-auto  shrink-0 shadow-2xl mt-20">
          <h2 className="text-center bg-secondary text-white py-3 rounded-t-sm">
            Register Your Account
          </h2>
          <div className="card-body">
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Name" />

              {/* Photo */}
              <label className="label">Photo</label>
              <input type="file" className="input" placeholder="Photo" />
              {/* Email */}
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />

              {/* Password */}
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>

            <p>
              Already have an account? Please{" "}
              <Link
                href={"/login"}
                className="text-red-500 font-semibold hover:underline cursor-pointer"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
