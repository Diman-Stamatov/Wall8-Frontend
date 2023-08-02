import React from "react";
import { Link } from "react-router-dom";

function VerifyEmail({ email }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border border-gray-700  rounded-md shadow-lg w-96 px-6 py-2 bg-gradient-to-br from-black to-gray-900">
        <h1 className="text-3xl font-bold mb-6 text-white font-roboto">
          Verify your email
        </h1>
        <p className="text-white font-roboto">
          We have sent an email to <span className="font-bold">{email}</span>
          Please verify your email to continue.
        </p>
        <Link to="/login">
          <text className="text-sm text-gray-500 hover:text-gray-700">
            Login
          </text>
        </Link>
      </div>
    </div>
  );
}

export default VerifyEmail;
