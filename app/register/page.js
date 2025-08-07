import Link from "next/link";
import React from "react";
import Form from "../Components/Register/Form";

const page = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-20">
        <div className="card bg-base-100 w-full max-w-sm mx-auto  shrink-0 shadow-2xl mt-20">
          <h2 className="text-center bg-secondary text-white py-3 rounded-t-sm">
            Register Your Account
          </h2>
          <div className="card-body">
            {/* Form */}
            <Form></Form>

            {/* Go to Login Page */}
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
